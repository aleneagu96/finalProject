import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8090//api/repair_order",
  headers: {
    "Content-type": "application/json"
  }
});