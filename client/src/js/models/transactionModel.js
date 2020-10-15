import Observable from '@interface/observable'
import { getTransactionList, deleteTransaction } from '@utils/api'

class TransactionModel extends Observable {
    constructor(){
        super();
        this.month = new Date().getMonth() +1;
        this.list = [];
    }

    getData = async (month) => {
        this.list = await getTransactionList(month);
    }

    changeData = async (month=this.month) => {
        this.month = month;
        this.list = await getTransactionList(month);
        this.notify(this.list)
    }

    deleteItem = async (id) => {
        await deleteTransaction(id);
        const item = this.list.find(e => e.id == id);
        const index = this.list.indexOf(item);
        const newlist = [...this.list];
        newlist.splice(index,1);
        this.list = newlist; 
        this.notify(this.list);
    }

    findOne = (id) => {
        return this.list.find(e => e.id == id);
    }

    filterData = (checkedBox) => {
        const fiterList = this.list.filter(item => checkedBox.includes(item.Category.Classification.name))
        this.notify(fiterList);
    }

}
export default new TransactionModel();