import React, { Component } from 'react'
import ClientService from "../../service/ClientService";
import UpdateClient from './UpdateClient';
// import UpdateClient from './UpdateClient';

class ListClient extends Component {

    constructor(props) {
        super(props);
        this.retrieveClients = this.retrieveClients.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveClients = this.setActiveClients.bind(this);
        this.removeAllClients = this.removeAllClients.bind(this);
        this.removeClient = this.removeClient.bind(this);
        this.updateClient = this.updateClient.bind(this);

        this.state = {
            clients: [],
            currentClient: null,
            currentIndex: -1,
            id: null,
            client: {
              clientId: null,
              clientFirstName: "",
              clientLastName: "",
              clientPhoneNumber: ""
            }
        };
    }

    componentDidMount() {
        this.retrieveClients();
    }

// TODO: REPAIR UPDATE METHOD !!!

      updateClient(client) {
         this.setState(UpdateClient.updateClient(client))
        
        // window.localStorage.setItem("clientId", id);
        //  ClientService.update(id)
        //   .then(response => {
        //      console.log(response.data);
        //       this.refreshList();
        //   }).catch(e => { console.log(e)
        // })
        // alert(JSON.stringify(data));
        // this.props.history.push(`/update/${id}`);
        }

    retrieveClients() {
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

      refreshList() {
        this.retrieveClients();
        this.setState({
          currentClient: null,
          currentIndex: -1
        });
      }
    
      setActiveClients(client, index) {
        this.setState({
          currentClient: client,
          currentIndex: index
        });
      }
    
      removeAllClients() {
        ClientService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      }

      removeClient(id) {
        ClientService.delete(id)
          .then(response => {
             console.log(response.data);
              this.refreshList();
          }).catch(e => { console.log(e)
        })
      }

      render() {
        const { clients, currentClient, currentIndex} = this.state;
    
        return (
          <div className="list row">

                <div className="col-md-6">
                    <h4>Clients</h4>
                         <ul className="list-group">
                             {clients && clients.map((client, index) => 
                (
                    <li className={ "list-group-item " +
                        (index === currentIndex ? "active" : "")}
                      onClick={() => this.setActiveClients(client, index)}
                      key={index}>
                      {client.clientFirstName} {client.clientLastName}
                    </li>
                )
                  )}
              </ul>
    
              <button
                className=" btn btn-sm btn-danger"
                onClick={() => this.removeAllClients()}>
                Remove All
              </button>


            </div>


            <div className="col-md-6">
              {currentClient ? (
                <div>
                  <h4>Client information:</h4>
                  <div>
                    <label>
                      <strong>Client id:</strong>
                    </label>{" "}
                    {currentClient.clientId}
                  </div>
                  <div>
                    <label>
                      <strong>First name:</strong>
                    </label>{" "}
                    {currentClient.clientFirstName}
                  </div>
                  <div>
                    <label>
                      <strong>Last name:</strong>
                    </label>{" "}
                    {currentClient.clientLastName}
                  </div>
                  <div>
                    <label>
                      <strong>Phone number:</strong>
                    </label>{" "}
                    {currentClient.clientPhoneNumber}
                  </div>
              
                  <button className="btn btn-danger"
                onClick={ () => this.removeClient(currentClient.clientId)} >
                  
                Delete
              </button>
                
              <button className="btn btn-success" 
              onClick={ () => this.props.updateClient(currentClient.clientId)}>
                Edit
              </button> 
              
               
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
    


export default ListClient

