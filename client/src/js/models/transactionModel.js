import Observable from '../interface/observable'
import { getTransactionList } from '../utils/api'

class TransactionModel extends Observable {
    constructor(){
        super();
        this.list = [];
    }

    getData = async (month) => {
        this.list = await getTransactionList(month);
    }

    changeData = async (month) => {
        this.list = await getTransactionList(month);
        this.notify(this.list)
    }
}
export default new TransactionModel();