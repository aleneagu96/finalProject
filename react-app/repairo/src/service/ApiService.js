//import axios from 'axios';
import http from "../HttpCommon";

// const APIUrl = "http://localhost:8090//api/repair_order";

class ApiService {
    getAll() {
        return http.get("/");
      }
    
      get(id) {
        return http.get(`/${id}`);
      }
    
      create(data) {
        return http.post("/", data);
      }
    
      update(id, data) {
        return http.put(`/${id}`, data);
      }
    
      delete(id) {
        return http.delete(`/${id}`);
      }
    
      deleteAll() {
        return http.delete(`/`);
      }
    


    // getRepairOrders(){
    //     return axios.get(APIUrl);
    // }

    // addRepairOrder(repair_order){
    //     return axios.post(APIUrl, repair_order);
    // }

    // getRepairOrderById(repair_order){
    //     return axios.get(APIUrl + '/' + repair_order);
    // }

    // updateRepairOrder(repair_order, repairOrderId){
    //     return axios.put(APIUrl + '/' + repairOrderId, repair_order);
    // }

    // deleteRepairOrder(repairOrderId){
    //     return axios.delete(APIUrl + '/' + repairOrderId);
    // }
}

export default new ApiService()