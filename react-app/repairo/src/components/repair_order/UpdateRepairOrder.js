import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class UpdateRepairOrder extends Component {

    constructor(props){
        super(props);

        this.state ={
            id: this.props.match.params.id,
            first_name: '',
            last_name: '',
            phone_number: '',
            device_specs: '',
            repair_status: '',
        }
        this.changeFirstNameHandler= this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changePhoneNumberHandler= this.changePhoneNumberHandler.bind(this);
        this.changeDeviceSpecsHandler= this.changeDeviceSpecsHandler.bind(this);
        this.changeRepairStatusHandler=this.changeRepairStatusHandler.bind(this);
        this.updateRepairOrder= this.updateRepairOrder.bind(this);
    }

    componentDidMount() {
        ApiService.getRepairOrderById(this.state.id).then( (res) =>{
            let repair_order = res.data;
            this.setState({first_name: repair_order.first_name,
                        last_name: repair_order.last_name,
                        phone_number: repair_order.phone_number,
                        device_specs:repair_order.device_specs,
                        repair_status: repair_order.repair_status
                    });
        });
    }

   updateRepairOrder = (e) => {
       e.preventDefault();
       let repair_order = {first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        phone_number: this.state.phone_number,
                        device_specs:this.state.device_specs,
                        repair_status: this.state.repair_status};

        console.log('repair_order => ' + JSON.stringify(repair_order));
        console.log('id =>' + JSON.stringify(this.state.id));
        ApiService.updateRepairOrder(repair_order, this.state.id).then( res => {
            this.props.history.push('/repair_orders');
        });
   }

   changeFirstNameHandler= (event) => {
       this.setState({first_name: event.target.value});
   }

   changeLastNameHandler= (event) => {
       this.setState({last_name: event.target.value});
   }

   changePhoneNumberHandler= (event) => {
       this.setState({phone_number: event.target.value});
   }

   changeDeviceSpecsHandler= (event) => {
       this.setState({device_specs: event.target.value});
   }

   changeRepairStatusHandler= (event) => {
       this.setState({repair_status: event.target.value});
   }

   cancel(){
       this.props.history.push('/repair-orders');
   }

    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Repair Order</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Client's first name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" 
                                            value={this.state.first_name} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Client's last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" 
                                            value={this.state.last_name} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Client's phone number </label>
                                        <input placeholder="Phone number" name="phoneNumber" className="form-control" 
                                            value={this.state.phone_number} onChange={this.changePhoneNumberHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Client's device specifications </label>
                                        <input placeholder="Device specs" name="deviceSpecs" className="form-control" 
                                            value={this.state.device_specs} onChange={this.changeDeviceSpecsHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Repair status </label>
                                        <input placeholder="Repair status" name="repairStatus" className="form-control" 
                                            value={this.state.repair_status} onChange={this.changeRepairStatusHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateRepairOrder}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
    );
    }
}

export default UpdateRepairOrder 