class Auth {

    static authenticateUser(token) {
        localStorage.setItem('token', token);
    };

    static isUserAuthenticated() {
        return sessionStorage.getItem('token') !== null;
    };

    static deAuthenticateUser() {
        sessionStorage.removeItem('token');
    };

};

export default Auth