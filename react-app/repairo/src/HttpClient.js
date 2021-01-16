import axios from "axios";

export default axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8090/api",
  headers: {
    "Content-type": "application/json",
    auth: {
      username : 'admin',
      password: 'admin',
    },
    // withCredentials: true,
   
  }
});

