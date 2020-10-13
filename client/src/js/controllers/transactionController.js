import { getFetch } from '../utils'

class TransactionController {
    constructor(transactionModel){
        this.model = transactionModel;
        
    }

    getModel() {
        return this.model.list;
    }

    addTransaction = async (item) => {
        this.model.list = [...this.model.list, item];
    }

    getInitialData = async() =>{
        const list = await getFetch(`http://localhost:3000/api/transaction`);
        this.model.list = list;
        this.model.notify(list);
    }

}
export default TransactionController;