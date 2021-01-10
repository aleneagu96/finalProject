// import React, { Component } from 'react'
// import ApiService from "../service/ApiService"

// export default class ViewRepairOrder extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             repair_order: {}
//         }
//     }

//     componentDidMount(){
//         ApiService.getRepairOrderById(this.state.id).then( res => {
//             this.setState({repair_order: res.data});
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <br></br>
//                 <div className = "card col-md-6 offset-md-3">
//                     <h3 className = "text-center"> View Repair Orders </h3>
//                     <div className = "card-body">
//                         <div className = "row">
//                             <label> Client's first name: </label>
//                             <div> { this.state.repair_order.client_first_name }</div>
//                         </div>
//                         <div className = "row">
//                             <label> Client's last name: </label>
//                             <div> { this.state.repair_order.client_last_name }</div>
//                         </div>
//                         <div className = "row">
//                             <label> Client's phone number: </label>
//                             <div> { this.state.repair_order.client_phone_number }</div>
//                         </div>
//                         <div className = "row">
//                             <label> Client's device specifications: </label>
//                             <div> { this.state.repair_order.client_device_specs }</div>
//                         </div>
//                         <div className = "row">
//                             <label> Repair status: </label>
//                             <div> { this.state.repair_order.repair_status }</div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }