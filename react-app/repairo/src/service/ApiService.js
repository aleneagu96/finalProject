import http from "../HttpCommon";


class ApiService {
    getAll() {
        return http.get("/repair_order");
      }
    
      get(id) {
        return http.get(`repair_order/${id}`);
      }
    
      create(data) {
        return http.post("/repair_order/newRepairOrder", data);
      }
    
      update(id, data) {
        return http.put(`/repair_order/edit/${id}` , data);
      }
    
      delete(id) {
        return http.delete(`/repair_order/delete/${id}`);
      }
    
      deleteAll() {
        return http.delete(`/repair_order/delteAll`);
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