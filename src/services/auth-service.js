export const TOKEN_KEY = "Token";

export const AuthService = {
  setUserAuth(token) {
    localStorage.setItem(TOKEN_KEY, token)
  },

  getUserToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  isAuthenticated() {
    return !!this.getUserToken();
  }
}