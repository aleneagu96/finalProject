import React, {Component} from "react";
import ApiService from "../service/ApiService";

class RepairOrder extends Component {
    constructor(props) {
        super(props);
        this.onChangeClient = this.onChangeClient.bind(this);
        this.onChangeDeviceSpecs= this.onChangeDeviceSpecs.bind(this);
        this.onChangeRepairStatus= this.onChangeRepairStatus.bind(this);
        this.getRepairOrder = this.getRepairOrder.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateRepairOrder = this.updateRepairOrder.bind(this);
        this.deleteRepairOrder = this.deleteRepairOrder.bind(this);

        this.state = {
            currentRepair : {
                id: null,
                client: [],
                device_specs: "",
                repair_status: "",
                published: false
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getRepairOrder(this.props.match.params.id);
    }

    onChangeClient(e) {
        const client = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentRepair: {
              ...prevState.currentRepair,
              client: client
            }
          };
        });
      }

      onChangeDeviceSpecs(e) {
        const device_specs = e.target.value;
        
        this.setState(prevState => ({
          currentRepair: {
            ...prevState.currentRepair,
            device_specs: device_specs
          }
        }));
      }

      onChangeRepairStatus(e) {
        const repair_status = e.target.value;
        
        this.setState(prevState => ({
          currentRepair: {
            ...prevState.currentRepair,
            repair_status: repair_status
          }
        }));
      }

      getRepairOrder(id) {
        ApiService.get(id)
          .then(response => {
            this.setState({
              currentRepair: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

      updatePublished(status) {
        var data = {
          id: this.state.currentRepair.id,
          client: this.state.currentRepair.client,
          device_specs: this.state.currentRepair.device_specs,
          repair_status: this.state.currentRepair.repair_status,
          published: status
        };
    
        ApiService.update(this.state.currentRepair.id, data)
          .then(response => {
            this.setState(prevState => ({
              currentRepair: {
                ...prevState.currentRepair,
                published: status
              }
            }));
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

      updateRepairOrder() {
        ApiService.update(
          this.state.currentRepair.id,
          this.state.currentRepair
        )
          .then(response => {
            console.log(response.data);
            this.setState({
              message: "The repair order was updated successfully!"
            });
          })
          .catch(e => {
            console.log(e);
          });
      }

      deleteRepairOrder() {    
        ApiService.delete(this.state.currentRepair.id)
          .then(response => {
            console.log(response.data);
            this.props.history.push('/repair_order')
          })
          .catch(e => {
            console.log(e);
          });
      }

    render() {
            const { currentRepair } = this.state;
        
            return (
              <div>
                {currentRepair ? (
                  <div className="edit-form">
                    <h4>Repair order</h4>
                    <form>
                      <div className="form-group">
                        <label htmlFor="repair_order">Repair order</label>
                        <input
                          type="text"
                          className="form-control"
                          id="repair_order"
                          value={currentRepair.client}
                          onChange={this.onChangeClient}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="device_specs">Device specifications</label>
                        <input
                          type="text"
                          className="form-control"
                          id="device_specs"
                          value={currentRepair.device_specs}
                          onChange={this.onChangeDeviceSpecs}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="repair_status">Repair status</label>
                        <input
                          type="text"
                          className="form-control"
                          id="repair_status"
                          value={currentRepair.repair_status}
                          onChange={this.onChangeRepairStatus}
                        />
                      </div>
        
                      <div className="form-group">
                        <label>
                          <strong>Status:</strong>
                        </label>
                        {currentRepair.published ? "Published" : "Pending"}
                      </div>
                    </form>
        
                    {currentRepair.published ? (
                      <button
                        className="badge badge-primary mr-2"
                        onClick={() => this.updatePublished(false)}
                      >
                        UnPublish
                      </button>
                    ) : (
                      <button
                        className="badge badge-primary mr-2"
                        onClick={() => this.updatePublished(true)}
                      >
                        Publish
                      </button>
                    )}
        
                    <button
                      className="badge badge-danger mr-2"
                      onClick={this.deleteRepairOrder}
                    >
                      Delete
                    </button>
        
                    <button
                      type="submit"
                      className="badge badge-success"
                      onClick={this.updateRepairOrder}
                    >
                      Update
                    </button>
                    <p>{this.state.message}</p>
                  </div>
                ) : (
                  <div>
                    <br />
                    <p>Please click on a Tutorial...</p>
                  </div>
                )}
              </div>
            );
          }
      }
    
    



export default RepairOrder