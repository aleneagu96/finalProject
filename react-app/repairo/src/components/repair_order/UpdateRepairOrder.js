import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';

class UpdateRepairOrder extends Component {
    emptyItem = {
        repairOrderId: '',
        deviceSpecs: '',
        repairStatus: '',
        client: { clientId: "", clientFirstName: "", clientLastName: "", clientPhoneNumber: "" }
    };

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyItem
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if( this.props.match.params.repairOrderId !== 'new') {
            const repairOrder = await(await fetch(`/api/repair_order/${this.props.match.params.repairOrderId}`)).text();
            this.setState({item: repairOrder});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item ={...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('http://localhost:8090/api/repair_order/update/' + (item.repairOrderId ? '/' + item.repairOrderId : ''), {
            method: (item.repairOrderId) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },

            body: JSON.stringify(item),
        });
            this.props.history.push('/repair_order');
    }

    render() {
        const {item} = this.state;
        const {clients} = this.state;
        const title = <h2>{item.repairOrderId ? 'Edit' : 'Add'}</h2>
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
                        <Input type ="text"  name ="repairOrderId" id="repairOrderId" value={item.repairOrderId || ''}
                        onChange={this.handleChange} autoComplete="repairOrderId"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="deviceSpecs">Device Specifications</Label>
                        <Input type ="text"  name ="deviceSpecs" id="deviceSpecs" value={item.deviceSpecs || ''}
                        onChange={this.handleChange} autoComplete="deviceSpecs"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="repairStatus">Repair Status</Label>
                        <Input type="text" name="repairStatus" id="repairStatus" value={item.repairStatus || ''}
                        onChange={this.handleChange} autoComplete="repairStatus"/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="client">Client</Label>
                        <select name="client" id="clientId" value={JSON.stringify(item.client || '')}
                    onChange={this.handleChange}>
                    {optionList}
                         </select>
                        {/* <Label for="client">Client</Label>
                        <Input type="text" name="clientPhoneNumber" id="clientPhoneNumber" value={item.clientPhoneNumber || ''}
                        onChange={this.handleChange} autoComplete="clientPhoneNumber"/> */}
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