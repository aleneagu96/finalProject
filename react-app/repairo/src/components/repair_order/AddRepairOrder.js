import React, { Component } from "react";
import { Container, Button, Form, Input, Label, FormGroup } from "reactstrap";
import ClientService from '../../service/ClientService'
import ApiService from '../../service/ApiService'



class AddRepairOrder extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  
  async handleSubmit(event) {
    event.preventDefault();
    const { repairOrder } = this.state;
    ApiService.create(repairOrder).then(response => 
      {this.setState({
        id: response.data.id,
        deviceSpecs: response.data.deviceSpecs,
        repairStatus: response.data.repairStatus,
        client: response.data.client
      });
      console.log(response.data);
    })
    
    alert("Repair order created");
    this.props.history.push('/repair_order')

    // await axios.post("http://localhost:8090/api/repair_order/newRepairOrder")
    // .then(response =>
    //       this.setState({
    //         repairOrder: response.data,
    //       }));
    // console.log(repairOrder);
    // alert("Repair order published")
  }

  async componentDidMount() {
  ClientService.getAll()
         .then(response => {
           this.setState({
             clients: response.data
           });
         
           console.log(response.data);
         })
         .catch(e => {
           console.log(e);
         }); 
  }
  cancel() {
    this.props.history.push("/repair_order");
  }
  save() {
    this.props.history.push("/repair_order");
  }
  render() {
    const title = (
      <h3
        className="pt-2"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Request a repair order
      </h3>
    );
    const {clients} = this.state;
    
    let optionList = clients.map((client) => (
      <option value={JSON.stringify(client)} id={client.clientId}>
        {" "}
        {client.clientFirstName}{" "}
        {client.clientLastName}{" "}
        {client.clientPhoneNumber}{" "}
      </option>
    ));
    return (
      <div className="repairo">
        
        <div className="site"></div>
        <Container className="Site-content">
          {title}
          <div>
            <p>Please enter the following details !</p>
            </div>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="deviceSpecs">Device Specifications</Label>
              <Input
                type="deviceSpecs"
                name="deviceSpecs"
                id="deviceSpecs"
                onChange={this.handleChange}
                autoComplete="deviceSpecs"
              />
            </FormGroup>
            <FormGroup>
              <Label for="repairStatus"> Defect  </Label>
              <Input
                className="mt-2 ml-2"
                type="repairStatus"
                name="repairStatus"
                id="repairStatus"
                onChange={this.handleChange}
              />
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
              <Button
                size="sm"
                color="primary"
                type="submit"
              >
                Save Repair Order
              </Button>
              <Button
              size="sm"
            className="btn btn-danger"
            onClick={this.cancel.bind(this)}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}
export default AddRepairOrder;