import React, {Component} from "react";
import ClientService from "../../service/ClientService";


// class Client extends Component {
//     constructor(props) {
//         super(props);
//         this.onChangeFirstName = this.onChangeFirstName.bind(this);
//         this.onChangeLastName= this.onChangeLastName.bind(this);
//         this.onChangePhoneNumber= this.onChangePhoneNumber.bind(this);
//         this.getClient = this.getClient.bind(this);
//         this.updateClient = this.updateClient.bind(this);
//         this.deleteClient = this.deleteClient.bind(this);

//         this.state = {
//             currentClient : {
//                 id: null,
//                 fistName: "",
//                 lastName: "",
//                 phoneNumber: "",
//             }
//         };
//     }

//     componentDidMount() {
//         this.getClient(this.props.match.params.id);
//     }

//     onChangeFirstName(e) {
//         const firstName = e.target.value;
    
//         this.setState(function(prevState) {
//           return {
//             currentClient: {
//               ...prevState.currentClient,
//               firstName: firstName
//             }
//           };
//         });
//       }

//       onChangeLastName(e) {
//         const lastName = e.target.value;
        
//         this.setState(prevState => ({
//           currentClient: {
//             ...prevState.currentClient,
//             lastName: lastName
//           }
//         }));
//       }

//       onChangePhoneNumber(e) {
//         const phoneNumber = e.target.value;
        
//         this.setState(prevState => ({
//           currentClient: {
//             ...prevState.currentClient,
//             phoneNumber: phoneNumber
//           }
//         }));
//       }

//       getClient(id) {
//         ClientService.get(id)
//           .then(response => {
//             this.setState({
//               currentClient: response.data
//             });
//             console.log(response.data);
//           })
//           .catch(e => {
//             console.log(e);
//           });
//       }

//       updateClient() {
//         ClientService.update(
//           this.state.currentClient.id,
//           this.state.currentClient
//         )
//           .then(response => {
//             console.log(response.data);
//             this.setState({
//               message: "The client details were updated successfully!"
//             });
//           })
//           .catch(e => {
//             console.log(e);
//           });
//       }

//       deleteClient() {    
//         ClientService.delete(this.state.currentClient.id)
//           .then(response => {
//             console.log(response.data);
//             this.props.history.push('/clients')
//           })
//           .catch(e => {
//             console.log(e);
//           });
//       }

//     render() {
//             const { currentClient } = this.state;
        
//             return (
//               <div>
//                 {currentClient ? (
//                   <div className="edit-form">
//                     <h4>Clients</h4>
//                     <form>
//                       <div className="form-group">
//                         <label htmlFor="firstName">First name</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="firstName"
//                           value={currentClient.fistName}
//                           onChange={this.onChangeFirstName}
//                         />
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="lastName">Last name</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="lastName"
//                           value={currentClient.lastName}
//                           onChange={this.onChangeLastName}
//                         />
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="phoneNumber">Phone number</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="phoneNumber"
//                           value={currentClient.phoneNumber}
//                           onChange={this.onChangePhoneNumber}
//                         />
//                       </div>
//                     </form>
//                     )
        
//                     <button
//                       className="badge badge-danger mr-2"
//                       onClick={this.deleteClient}
//                     >
//                       Delete
//                     </button>
        
//                     <button
//                       type="submit"
//                       className="badge badge-success"
//                       onClick={this.updateClient}
//                     >
//                       Update
//                     </button>
                    
//                   </div>
//                 ) : (
//                   <div>
//                     <br />
                    
//                   </div>
//                 )}
//               </div>
//             );
//           }
//       }
    
    



// export default Client

 class Client extends Component {
   constructor(props) {
     super(props)

    this.state = {
      clientId: this.props.match.params.id,
      clientFirstName: '',
      clientLastName: '',
      clientPhoneNumber: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.validate = this.validate.bind(this)
   }

   componentDidMount() {
     //eslint-disable-next-line
     if(this.state.clientId == -1) {
       return
     }

     ClientService.get(this.state.clientId)
          .then(response => this.setState({
            clientFirstName: response.data.clientFirstName,
            clientLastName: response.data.clientLastName,
            clientPhoneNumber: response.data.clientPhoneNumber
          }))

   }

   validate(values) {
     let errors = {}
     if(!values.clientFirstName || !values.clientLastName || !values.clientPhoneNumber) {
       errors.clientFirstName = 'Enter a first name'
       errors.clientLastName = 'Enter a last name'
       errors.clientPhoneNumber = 'Enter a phone number'
     } else if ((values.clientPhoneNumber.length < 5) || (values.clientLastName.length < 5) || (values.clientPhoneNumber.length < 10)) {
      
     }
   }

   onSubmit(values) {
     let client = {
       clientId: this.state.clientId,
       clientFirstName: values.clientFirstName,
       clientLastName: values.clientLastName,
       clientPhoneNumber: values.clientPhoneNumber
     }

     if(this.state.clientId === -1){
       ClientService.create(client)
            .then(() => this.props.history.push('/clients'))
     }else  {
       ClientService.update(this.state.clientId, client)
            .then(() => this.props.history.push('/clients'))
     }

   }

   render() {
     let {clientId, clientFirstName, clientLastName, clientPhoneNumber} = this.state

     return (
       <div>
         <h3>Client</h3>
         <div className="container">
           <div>
              initialValues={{clientId, clientFirstName, clientLastName, clientPhoneNumber}}
              onSubmit={this.onSubmit}
              validateOnChange={false}
              validateOnBlur={false}
              validate={this.validate}
              enableReinitialize={true}
                {
                  (props) => (
                    
                    <form>
                        <div className="form-group">
                        <label>Id</label>
                        <input
                          type="text"
                          className="form-control"
                          name="id"
                        />
                      </div>
                      <div className="form-group">
                        <label>First name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                        />
                      </div>
                      <div className="form-group">
                        <label>Last name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="phoneNumber"
                        />
                      </div>
                      <button className="btn btn-success" type="sumbit">Save</button>
                    </form>
                  )
                }
            </div>
         </div>
       </div>
     )
    }

 }
 export default Client