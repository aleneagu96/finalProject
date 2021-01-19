import axios from 'axios'

const API_URL = 'http://localhost:8090/api'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'admin'

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`,
            { headers: { auth: this.createBasicAuthToken(username, password)}})
           
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password) {
        localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }


    logout() {
        localStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        alert("Loged out");
    }

    isUserLoggedIn() {
        
        let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)

        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token) {
        alert(token);
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.auth = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()