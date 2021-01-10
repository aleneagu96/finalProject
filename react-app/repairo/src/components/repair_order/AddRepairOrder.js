import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddRepairOrder extends Component{

    constructor(props){
        super(props);
        this.onChangeClient= this.onChangeClient.bind(this);
        this.onChangeDeviceSpecs = this.onChangeDeviceSpecs.bind(this);
        this.onChangeRepairStatus= this.onChangeRepairStatus.bind(this);
        this.saveRepairOrder= this.saveRepairOrder.bind(this);
        this.newRepairOrder= this.newRepairOrder.bind(this);

        this.state = {
            id: null,
            client: [],
            device_specs: "",
            repair_status: "",
            published: false,
            submitted: false
        };
    }

    onChangeClient(e) {
        this.setState({
            client: e.target.value
        });
    }

    onChangeDeviceSpecs(e) {
        this.setState({
            device_specs: e.target.value
        });
    }

    onChangeRepairStatus(e) {
        this.setState({
            repair_status: e.target.value
        });
    }

    saveRepairOrder() {
        var data = {
            client: this.state.client,
            device_specs: this.state.device_specs,
            repair_status: this.state.repair_status
        };

    ApiService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    client: response.data.client,
                    device_specs: response.data.device_specs,
                    repair_status: response.data.repair_status,
                    published: response.data.published,

                    submitted: true
                });
            console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newRepairOrder() {
        this.setState({
            id: null,
            client: [],
            device_specs: "",
            repair_status: "",
            published: false,

            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newRepairOrder}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="client">Client</label>
              <input
                type="text"
                className="form-control"
                id="client"
                required value={this.state.client}
                onChange={this.onChangeClient}
                name="client"
              />
            </div>

            <div className="form-group">
              <label htmlFor="device_specs">Device specifications</label>
              <input
                type="text"
                className="form-control"
                id="device_specs"
                required
                value={this.state.device_specs}
                onChange={this.onChangeDeviceSpecs}
                name="device_specs"
              />
            </div>

            <div className="form-group">
              <label htmlFor="repair_status">Repair status</label>
              <input
                type="text"
                className="form-control"
                id="repair_status"
                required
                value={this.state.repair_status}
                onChange={this.onChangeRepairStatus}
                name="repair_status"
              />
            </div>

            <button onClick={this.saveRepairOrder} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
        );
    }
}
 export default AddRepairOrder



















//         this.state ={
//             id: this.props.match.params.id,
//             first_name: '',
//             last_name: '',
//             phone_number: '',
//             device_specs:'',
//             repair_status:''
//         }
//     this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
//     this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
//     this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
//     this.changeDeviceSpecsHandler = this.changeDeviceSpecsHandler.bind(this);
//     this.changeRepairStatusHandler = this.changeRepairStatusHandler.bind(this);
//     this.saveOrUpdateRepairOrder = this.saveOrUpdateRepairOrder.bind(this);
        
// }
//     componentDidMount() {
//         if(this.state.id === 'newRepairOrder') {
//             return
//         } else {
//             ApiService.getRepairOrderById(this.state.id).then( (res) =>{
//                 let repair_order = res.data;
//                 this.setState({first_name: repair_order.first_name,
//                                 last_name: repair_order.last_name,
//                                 phone_number: repair_order.phone_number,
//                                 device_specs: repair_order.device_specs,
//                                 repair_status: repair_order.repair_status
//                             });
//             });
//         }
//     }

//     saveOrUpdateRepairOrder = (e) => {
//         e.preventDefault();
//         let repair_order = {first_name: this.state.first_name,
//                             last_name: this.state.last_name,
//                             phone_number: this.state.phone_number,
//                             device_specs: this.state.device_specs,
//                             repair_status: this.state.repair_status};

//         console.log('repair_order => ' + JSON.stringify(repair_order));

//         if(this.state.id === '_add'){ 
//             ApiService.addRepairOrder(repair_order).then( res =>{
//                 this.props.history.push('/repair_orders');
//             });
//         }else{
//             ApiService.updateRepairOrder(repair_order, this.state.id).then( res => {
//                 this.props.history.push('/repair_orders');
//             });
//         }
//     }

//         changeFirstNameHandler = (event) => {
//             this.setState({first_name: event.target.value})
//         }

//         changeLastNameHandler = (event) => {
//             this.setState({last_name: event.target.value})
//         }

//         changePhoneNumberHandler = (event) => {
//             this.setState({phone_number: event.target.value})
//         }
//         changeDeviceSpecsHandler = (event) => {
//             this.setState({device_specs: event.target.value})
//         }
//         changeRepairStatusHandler = (event) => {
//             this.setState({repair_status: event.target.value})
//         }

//         cancel() {
//             this.props.history.push('/repair_orders');
//         }

//         getTitle() {
//             if(this.state.id === '_add'){
//                 return <h3 className="text-center">Add Repair Order</h3>
//             }else {
//                 return <h3 className="text-center">Update Repair Order</h3>
//             }
//         }

//         render(){
//             return (
//                 <div>
//                 <br></br>
//                    <div className = "container">
//                         <div className = "row">
//                             <div className = "card col-md-6 offset-md-3 offset-md-3">
//                                 {
//                                     this.getTitle()
//                                 }
//                                 <div className = "card-body">
//                                     <form>
//                                         <div className = "form-group">
//                                             <label> Client's first name: </label>
//                                             <input placeholder="First Name" name="firstName" className="form-control" 
//                                                 value={this.state.first_name} onChange={this.changeFirstNameHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Client's last name: </label>
//                                             <input placeholder="Last Name" name="lastName" className="form-control" 
//                                                 value={this.state.last_name} onChange={this.changeLastNameHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Client's phone number </label>
//                                             <input placeholder="Phone number" name="phoneNumber" className="form-control" 
//                                                 value={this.state.phone_number} onChange={this.changePhoneNumberHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Client's device specifications </label>
//                                             <input placeholder="Device specifications" name="deviceSpecs" className="form-control" 
//                                                 value={this.state.device_specs} onChange={this.changeDeviceSpecsHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Repair Status </label>
//                                             <input placeholder="Repair status" name="repairStatus" className="form-control" 
//                                                 value={this.state.repair_status} onChange={this.changeRepairStatusHandler}/>
//                                         </div>

//                                         <button className="btn btn-success" onClick={this.saveOrUpdateRepairOrder}>Save</button>
//                                         <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>

//                    </div>
//             </div>
//             )
//         }