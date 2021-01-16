import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import { BrowserRouter as Route, Link} from 'react-router-dom';
import UpdateRepairOrder from "../repair_order/UpdateRepairOrder"

class ListRepairOrders extends Component {

    constructor(props) {
        super(props);
        this.retrieveRepairOrders = this.retrieveRepairOrders.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveRepairs = this.setActiveRepairs.bind(this);
        this.removeRepairOrder = this.removeRepairOrder.bind(this);
       

        this.state = {
            repair_orders: [],
            currentRepair: null,
            currentIndex: -1,
            id: null,
            repair_order: {
              repairOrderId: null,
              deviceSpecs: "",
              repairStatus: "",
              clientId : null,
            }
        };
    }

    componentDidMount() {
        this.retrieveRepairOrders();
    }

    retrieveRepairOrders() {
        ApiService.getAll()
          .then(response => {
            this.setState({
              repair_orders: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

      refreshList() {
        this.retrieveRepairOrders();
        this.setState({
          currentRepair: null,
          currentIndex: -1
        });
      }
    
      setActiveRepairs(repair_order, index) {
        this.setState({
          currentRepair: repair_order,
          currentIndex: index
        });
      }
    
      removeRepairOrder(id) {
        ApiService.delete(id)
          .then(response => {
             console.log(response.data);
              this.refreshList();
          }).catch(e => { console.log(e)
        })
      }

      render() {
        const { repair_orders, currentRepair, currentIndex } = this.state;
    
        return (
          <div className="list row">
                <div className="col-md-6">
                    <h4>Repair orders</h4>
    
                         <ul className="list-group">
                             {repair_orders &&
                             repair_orders.map((repair_order, index) => (
                    <li className={ "list-group-item " +
                        (index === currentIndex ? "active" : "")
                      }
                      onClick={() => this.setActiveRepairs(repair_order, index)}
                      key={index}
                    >
                  
                     {repair_order.repairOrderId} {repair_order.deviceSpecs}  {repair_order.clientId}
                    </li>
                  ))}
              </ul>
    
              
            </div>
            <div className="col-md-6">
              {currentRepair ? (
                <div>
                  <h4>Repair order</h4>
                  <div>
                    <label>
                      <strong>Repair id:</strong>
                    </label>{" "}
                    {currentRepair.repairOrderId}
                  </div>
                  <div>
                    <label>
                      <strong>Device specs:</strong>
                    </label>{" "}
                    {currentRepair.deviceSpecs}
                  </div>
                  <div>
                    <label>
                      <strong>Repair status:</strong>
                    </label>{" "}
                    {currentRepair.repairStatus}
                  </div>
                  <div>
                    <label>
                      <strong>Client:</strong>
                    </label>{" "}
                    {currentRepair.client.clientId} {}
                    {currentRepair.client.clientFirstName} {}
                    {currentRepair.client.clientLastName} {}
                    {currentRepair.client.clientPhoneNumber} {}
                  </div>
                  <button className="btn btn-danger"
                onClick={ () => this.removeRepairOrder(currentRepair.repairOrderId)} >
                  
                Delete
              </button>
                
                    <Link to="/edit" className="btn btn-primary">Update</Link>
                    <Route path="/edit/" component={UpdateRepairOrder}/>
                  
                  
                </div>
              ) : (
                <div>
                  <br />
                  
                </div>
              )}
            </div>
          </div>
        );
      }
    }
    


export default ListRepairOrders








   