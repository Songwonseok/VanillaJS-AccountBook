import Observable from '@interface/observable'
import cache from '@cache/cache'
import { getTransactionList, deleteTransaction } from '@utils/api'


class TransactionModel extends Observable {
    constructor(){
        super();
        this.month = new Date().getMonth() +1;
        this.list = [];
    }

    getData = async (month) => {
        try{
            this.list = await getTransactionList(month);
            cache.set(month, [...this.list]);
        }catch(e){
            console.log(e.message);
        }
    }

    changeData = async (month=this.month) => {
        if (month != this.month && cache.has(month)){
            this.list = [...cache.get(month)];
            this.notify(this.list);
            return;
        }

        this.month = month;
        this.list = await getTransactionList(month);
        cache.set(month, [...this.list]);
        this.notify(this.list)
    }

    deleteItem = async (id) => {
        await deleteTransaction(id);
        const item = this.list.find(e => e.id == id);
        const index = this.list.indexOf(item);
        const newlist = [...this.list];
        newlist.splice(index,1);
        this.list = newlist;

        cache.delete(this.month);
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