class TransactionModel {
    constructor(){
        this.list = [];
        this._observers = [];
    }
    subscribe(observer) {
        this._observers.push(observer);
    }
    unsubscribe(observer) {
        this._observers = [...this._observers].filter(subscriber => subscriber !== observer);
    }
    notify(data) {
        this._observers.forEach(observer => observer.update(data));
    }
}

export default TransactionModel;