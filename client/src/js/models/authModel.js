import Observable from '@interface/observable'

class AuthModel extends Observable{
    constructor(){
        super();
    }

    setToken(token) {
        localStorage.token = token;
        this.notify(localStorage.token);
    }

    deleteToken() {
        delete localStorage.token;
        this.notify(null);
    }
}

export default new AuthModel();