import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';

class UpdateRepairOrder extends Component {
    state = {
        value: {
          id: "",
          deviceSpecs: "",
          repairStatus: "",
          client: { clientId: "1", clientFirstName: "Ale", clientLastName: "Neagu", clientPhoneNumber: "074054221" },
        },
      };

    constructor(props) {
        super(props);

        this.state = {
            clients: [],
            repairOrders: [],
            client: this.emptyClient,
          };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeClient = this.handleChangeClient.bind(this);

    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let repairOrder = { ...this.state.repairOrder };
        repairOrder[name] = value;
        this.setState({ repairOrder });
      }

      handleChangeClient(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let repairOrder = { ...this.state.repairOrder };
        repairOrder[name] = JSON.parse(value);
        this.setState({ repairOrder });
      }

    async componentDidMount() {
        const responseClient = await fetch ("http://localhost:8090/api/clients");
        const bodyClient = await responseClient.json();
        this.setState({
            clients: bodyClient
        });
        const responseRepairOrder = await fetch("http://localhost:8090/api/repair_order");
        const bodyRepairOrder = await responseRepairOrder.json();
        this.setState({
            repairOrder: bodyRepairOrder
        });
        if( this.props.match.params.repairOrderId !== 'new') {
            const repairOrder = await(await fetch(`/api/repair_order/${this.props.match.params.repairOrderId}`)).text();
            this.setState({repairOrder});
        }
    }

   

    async handleSubmit(event) {
        event.preventDefault();
        let {repairOrder} = this.state;

       await fetch(((`http://localhost:8090/api/repair_order/edit/${repairOrder.repairOrderId}`) ), {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type" : "application/json",
            },

            body: JSON.stringify(repairOrder),
        });
            this.props.history.push('/repair_order');
    }

    render() {
       
        const title = <h2>Edit</h2>
        const { clients } = this.state;
      
        let optionList = clients.map((client) => (
            <option value={JSON.stringify(client)} id={client.clientId}>
              {" "}
              {client.clientFirstName}{" "}
              {client.clientLastName}{" "}
              {client.clientPhoneNumber}{" "}
            </option>
          ));
        return <div>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                        <Label for="repairOrderId">Repair order id</Label>
                        <Input type ="text"  name ="repairOrderId" id="repairOrderId" 
                        onChange={this.handleChange} autoComplete="repairOrderId"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="deviceSpecs">Device Specifications</Label>
                        <Input type ="text"  name ="deviceSpecs" id="deviceSpecs" 
                        onChange={this.handleChange} autoComplete="deviceSpecs"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="repairStatus">Repair Status</Label>
                        <Input type="text" name="repairStatus" id="repairStatus" 
                        onChange={this.handleChange} autoComplete="repairStatus"/>
                    </FormGroup>
                    <FormGroup>
              <Label for="client">Client</Label>
              <select
                name="client"
                id="clientId"
                value={JSON.stringify(this.state.value)}
                onChange={this.handleChangeClient}
              >
                {optionList}
              </select>
            </FormGroup>
                    <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" type={Link} to="/repair_order">Cancel</Button>
                    </FormGroup>
                    
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(UpdateRepairOrder);