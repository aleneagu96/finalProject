import React, { Component } from "react";
import { Container, Button, Form, Input, Label, FormGroup } from "reactstrap";


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
      isLoading: true,
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
    await fetch("http://localhost:8090/api/repair_order/newRepairOrder", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(repairOrder),
    });
    console.log(repairOrder);
    alert("Repair order published")
  }
  async componentDidMount() {
    const responseClient = await fetch(
      "http://localhost:8090/api/clients"
    );
    const bodyCategory = await responseClient.json();
    this.setState({
      clients: bodyCategory,
      isLoading: false,
    });
    const responseRepairOrder = await fetch("http://localhost:8090/api/repair_order");
    const bodyRecipe = await responseRepairOrder.json();
    this.setState({
      repairOrders: bodyRecipe,
      isLoading: false,
    });
  }
  cancel() {
    this.props.history.push("/repair_order");
  }
  save() {
    this.props.history.push("/repair_order/newRepairOrder");
  }
  render() {
    const title = (
      <h3
        className="pt-2"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Add Repair Order
      </h3>
    );
    const { clients, isLoading } = this.state;
    if (isLoading) {
      return <div>Loading...</div>;
    }
    let optionList = clients.map((client) => (
      <option value={JSON.stringify(client)} id={client.clientId}>
        {" "}
        {client.clientFirstName}{" "}
        {client.clientLastName}{" "}
        {client.clientPhoneNumber}{" "}
      </option>
    ));
    return (
      <div className="Site">
        
        <div className="Home-image"></div>
        <Container className="Site-content">
          {title}
          
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
              <Label for="repairStatus">Repair Status </Label>
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