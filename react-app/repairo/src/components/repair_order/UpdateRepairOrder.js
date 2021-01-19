import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import ApiService from '../../service/ApiService';
import ClientService from '../../service/ClientService';

class UpdateRepairOrder extends Component {
    value = {
      repairOrder: {
        repairOrderId: "",
          deviceSpecs: "",
          repairStatus: "",
          client: { 
            clientId: "", 
            clientFirstName: "", 
            clientLastName: "", 
            clientPhoneNumber: "" }
    }
  }

    constructor(props) {
        super(props);

        this.state = {
            clients: [],
            client: this.value.client,
            item: this.value
          };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeClient = this.handleChangeClient.bind(this);
        this.updateRepairOrder= this.updateRepairOrder.bind(this);
    }

    async componentDidMount() {
      if(this.props.match.params.repairOrderId !== 'new') {
       await( await (ClientService.getAll()
        .then(response => {this.setState({clients: response.data})})))
      }
  }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
      }

      handleChangeClient(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let repairOrder = { ...this.state.repairOrder };
        repairOrder[name] = JSON.parse(value);
        this.setState({ repairOrder });
      }

   

    updateRepairOrder(id, data) {
  
      ApiService.update(id, data)
        .then(response => {
            this.setState({
              id: response.data.id,
              deviceSpecs: response.data.deviceSpecs,
              repairStatus: response.data.repairStatus,
              client: response.data.client
            });
          console.log(response.data);
          alert("Repair order updated")
        }).catch(e => {console.log(e)
        })
      this.props.history.push(`repair_order`)
  }



    render() {
       
        const title = <h2>Edit</h2>
        const { clients } = this.state;
        const {item} = this.state;
      
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
                <Form onSubmit={this.updateRepairOrder}>
                <FormGroup>
                        <Label for="repairOrderId">Repair order id</Label>
                        <Input type ="text"  name ="repairOrderId" id="repairOrderId" 
                        value={item.repairOrderId || ''}
                        onChange={this.handleChange} autoComplete="repairOrderId"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="deviceSpecs">Device Specifications</Label>
                        <Input type ="text"  name ="deviceSpecs" id="deviceSpecs" 
                        value={item.deviceSpecs || ''}
                        onChange={this.handleChange} autoComplete="deviceSpecs"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="repairStatus">Defect</Label>
                        <Input type="text" name="repairStatus" id="repairStatus" 
                        value={item.repairStatus || ''}
                        onChange={this.handleChange} autoComplete="repairStatus"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="client">Client</Label>
                         <select name="client" id="clientId"
                        //  value={item.client || ''}
                        value={JSON.stringify(item.clientId)}
                        
                        onChange={this.handleChangeClient}
                        // onChange={this.handleChange} 
                        >
                        {optionList}
              </select>
            </FormGroup>
                    <FormGroup>
                    <button className="btn btn-primary"
                     onClick= { () => this.updateRepairOrder(item.repairOrderId, item)}>
                     Update
                     </button>
                    <Button color="secondary" type={Link} to="/repair_order">Cancel</Button>
                    </FormGroup>
                    
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(UpdateRepairOrder);


