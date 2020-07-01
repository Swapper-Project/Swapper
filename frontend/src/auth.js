class auth {
  constructor() {
    this.authenticated = localStorage.getItem('userId') || false;
  }

  login(callback) {
    this.authenticated = localStorage.getItem('userId');
    callback();
  }

  logout(callback) {
    this.authenticated = false;
    localStorage.removeItem('userId');
    callback();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new auth();