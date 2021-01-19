
import React, {Component} from 'react';
import ClientService from '../../service/ClientService';
import {Link, withRouter} from 'react-router-dom';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';



class UpdateClient extends Component {
    emptyItem = {
        clientId: '',
        clientFirstName: '',
        clientLastName: '',
        clientPhoneNumber: null
    };

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyItem
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.updateClient = this.updateClient.bind(this);
    }

    async componentDidMount() {
        if( this.props.match.params.clientId !== 'new') {
            const client = await(await (ClientService.update(this.props.match.params.clientId).then(
                repsonse => {
                      this.setState({item: client});
                }
            )))
            //  await(await fetch(`/api/clients/${this.props.match.params.clientId}`)).text();
          
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

    // async handleSubmit(event) {
    //     event.preventDefault();
    //     const {item} = this.state;

    //     await ClientService.get((item.clientId ? '/' + item.clientId : ''), {
    //         method: (item.clientId) ? 'PUT' : 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type' : 'application/json'
    //         },

    //         body: JSON.stringify(item),
    //     }).then(response => {
    //         this.setState({item});
    //     });
    //         this.props.history.push('/clients');
    // }

    updateClient(id, data) {
        ClientService.update(id, data)
          .then(response => {
              this.setState({
                  clientFirstName: response.data.clientFirstName,
                  clientLastName: response.data.clientLastName,
                  clientPhoneNumber: response.data.clientPhoneNumber
              });
            console.log(response.data);
            alert("Client updated")
            this.refreshList();
          }).catch(e => {console.log(e)
          })
        this.props.history.push(`clients/`)
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.clientId ? 'Edit' : 'Add'}</h2>

        return <div>
            <Container>
                {title}
                <Form onSubmit={this.updateClient}>
                <FormGroup>
                        <Label for="clientId">Client id</Label>
                        <Input type ="text"  name ="clientId" id="clientId" value={item.clientId || ''}
                        onChange={this.handleChange} autoComplete="clientId"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="clientFirstName">First Name</Label>
                        <Input type ="text"  name ="clientFirstName" id="clientFirstName" value={item.clientFirstName || ''}
                        onChange={this.handleChange} autoComplete="clientFirstName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="clientLastName">Last Name</Label>
                        <Input type="text" name="clientLastName" id="clientLastName" value={item.clientLastName || ''}
                        onChange={this.handleChange} autoComplete="clientLastName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="clientPhoneNumber">Phone Number</Label>
                        <Input type="text" name="clientPhoneNumber" id="clientPhoneNumber" value={item.clientPhoneNumber || ''}
                        onChange={this.handleChange} autoComplete="clientPhoneNumber"/>
                    </FormGroup>
                    <FormGroup>
                    <button className="btn btn-primary"
                     onClick= { () => this.updateClient(item.clientId, item)}>
                     Update
                     </button>
                    <Button color="secondary" type={Link} to="/clients">Cancel</Button>
                    </FormGroup>
                    
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(UpdateClient);




















