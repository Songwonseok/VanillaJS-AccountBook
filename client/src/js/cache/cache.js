class Cache {
    constructor(){
        this.data = new Map();
    }

    has(key) {
        return this.data.has(key);
    }

    get(key) {
        return this.data.get(key);
    }
    set(key, value) {
        this.data.set(key,value);
    }
    delete(key){
        this.data.delete(key);
    }
}

export default new Cache();