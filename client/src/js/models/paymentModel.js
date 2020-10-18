import Observable from '@interface/observable'
import { getPayment, addPayment, deletePayment } from '@utils/api'

class PaymentModel extends Observable{
    constructor(){
        super();
        this.list = []
    }

    getData = async () => {
        this.list = await getPayment();
    }
    addData = async (payload) => {
        const newPayment = await addPayment(payload);
        this.list = [...this.list, newPayment];
        this.notify(this.list)
    }

    removeData = async (id) => {
        await deletePayment(id);
        const index = this.list.findIndex(e => e.id == id);
        const newList = [...this.list];
        newList.splice(index,1);
        this.list = newList;
        this.notify(this.list)
    }
}

export default new PaymentModel()