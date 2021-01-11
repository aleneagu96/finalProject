import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import { Link } from "react-router-dom";

class ListRepairOrders extends Component {

    constructor(props) {
        super(props);
        //  let client = {
        //   clientId: "",
        //   clientFirstName: "",
        //   clientLastName: "",
        //   clientPhoneNumber: ""
        // }

        this.retrieveRepairOrders = this.retrieveRepairOrders.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveRepairs = this.setActiveRepairs.bind(this);
        this.removeAllRepairOrders = this.removeAllRepairOrders.bind(this);
        this.update = this.update.bind(this);

        this.state = {
            repair_orders: [],
            currentRepair: null,
            currentIndex: -1
        };
    }

    componentDidMount() {
        this.retrieveRepairOrders();
    }
// TODO: implement update method in order to work !!!!!!!!!
    update() {
      alert("hello");
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
    
      removeAllRepairOrders() {
        ApiService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
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
                      {/* {repair_order.client} */}
                      {repair_order.deviceSpecs}
                    </li>
                  ))}
              </ul>
    
              <button
                className="m-3 btn btn-sm btn-danger"
                onClick={this.removeAllRepairOrders}
              >
                Remove All
              </button>
            </div>
            <div className="col-md-6">
              {currentRepair ? (
                <div>
                  <h4>Repair order</h4>
                  <div>
                    <label>
                      <strong>Client:</strong>
                    </label>{" "}
                    {currentRepair.client.clientFirstName} {}
                    {currentRepair.client.clientLastName} {}
                    {currentRepair.client.clientPhoneNumber} 
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
                    {currentRepair.repairStatus ? "Published" : "Pending"}
                  </div>
    
                  <Link
                    to={"/repair_order/update" + currentRepair.id}
                    className="badge badge-warning"
                    onClick= {this.update}
                  >
                    Edit
                  </Link>
                </div>
              ) : (
                <div>
                  <br />
                  <p>Please click on a repair order...</p>
                </div>
              )}
            </div>
          </div>
        );
      }
    }
    


export default ListRepairOrders








    //     this.state = {
    //         repair_orders: []
    //     }       
    //     this.addRepairOrder = this.addRepairOrder.bind(this);
    //     this.updateRepairOrder = this.updateRepairOrder.bind(this);
    //     this.deleteRepairOrder = this.deleteRepairOrder.bind(this);
    // }

    
    // deleteRepairOrder(id) {
    //     ApiService.deleteRepairOrder(id).then( res => {
    //            this.setState({repair_orders: this.state.repair_orders.filter(repair_order => repair_order.id !== id)});
    //        });
    // }

    // viewRepairOrder(id){
    //     this.props.history.push(`/view-repair_order/${id}`);
    // }

    // updateRepairOrder(id) {
    //     this.props.history.push(`/update/${id}`);
    // }

    // componentDidMount(){
    //     ApiService.getRepairOrders("http://localhost:8090/api/repair_order").then((res) => {
    //         const repair_orders = res.data;
    //         this.setState({ repair_orders});
    //     });
    // }

    
    // addRepairOrder(){
    //     this.props.history.push('/newRepairOrder');
    // }

    // render() {
    //     return (
    //         <div>
    //              <h2 className="text-center">Repair Orders details</h2>
    //              <div className = "row">
    //                 <button className="btn btn-primary" onClick={this.addRepairOrder}> Add repair order</button>
    //              </div>
    //              <br></br>
    //              <div className = "row">
    //                     <table className = "table table-striped table-bordered">

    //                         <thead>
    //                             <tr>
    //                                 <th> Client's first name</th>
    //                                 <th> Client's last name</th>
    //                                 <th> Client's phone number</th>
    //                                 <th> Client's device specifications</th>
    //                                 <th> Repair status</th>
    //                                 <th> Actions</th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                             {
    //                                 this.state.repair_orders.map(
    //                                     repair_order => 
    //                                     <tr key = {repair_order.id}>
    //                                          <td> {repair_order.client_first_name} </td>   
    //                                          <td> {repair_order.client_last_name}</td>
    //                                          <td> {repair_order.client_phone_number}</td>
    //                                          <td> {repair_order.client_device_specs}</td>
    //                                          <td> {repair_order.repair_status}</td>
    //                                          <td>
    //                                              <button onClick={ () => this.updateRepairOrder(repair_order.id)} className="btn btn-info">Update </button>
    //                                              <button style={{marginLeft: "10px"}} onClick={ () => this.deleteRepairOrder(repair_order.id)} className="btn btn-danger">Delete </button>
    //                                              <button style={{marginLeft: "10px"}} onClick={ () => this.viewRepairOrder(repair_order.id)} className="btn btn-info">View </button>
    //                                          </td>
    //                                     </tr>
    //                                 )
    //                             }
    //                         </tbody>
    //                     </table>

    //              </div>

    //         </div>
    //     );
    // }

