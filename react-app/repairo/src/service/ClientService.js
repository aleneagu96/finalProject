
import http from "../HttpClient";

class ClientService {
    getAll() {
         return http.get("/clients");
      }
    
      get(id) {
        return http.get(`/clients/${id}`);
      }
    
      create(data) {
        return http.post("/clients/newClient", data);
      }
    
      update(id, data) {
        return http.put(`/clients/update/${id}`, data);
      }
    
      delete(id) {
        return http.delete(`/clients/delete/${id}` );
      }
    
      deleteAll() {
        return http.delete(`/clients/deleteAll`);
      }
}
export default new ClientService();