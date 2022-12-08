import axios from "axios";
import jwtDecode from "jwt-decode";

import CONSTANTS from "../Constants.json";

export const TOKEN_KEY = "Token";

export const AuthService = {
  setUserAuth(token) {
    localStorage.setItem(TOKEN_KEY, token)
  },

  getUserToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  getTokenData(propName) {
    const token = this.getUserToken();
    const decoded = jwtDecode(token)
    return decoded[propName];
  },

  isAuthenticated() {
    return !!this.getUserToken();
  },

  login(loginData) {
    return axios.post(`${CONSTANTS.REQUEST_URL}/auth/login`, {username: loginData.email, password: loginData.password}, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },

  logout(){
    localStorage.removeItem(TOKEN_KEY);
  }
}