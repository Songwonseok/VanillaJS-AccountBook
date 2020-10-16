import Observable from '@interface/observable'
import { getPayment } from '@utils/api'

class PaymentModel extends Observable{
    constructor(){
        super();
        this.list = []
    }

    getData = async() => {
        this.list = await getPayment();
    }
}

export default new PaymentModel()