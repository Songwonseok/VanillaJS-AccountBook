import transactionModel from './models/transactionModel'

import NavView  from './views/main/navView'
import HeaderView from './views/header/headerView'

import {$} from './utils/common'




class App {
    constructor() {
        this.$appNode = $('#app');
        this.currentMonth = new Date().getMonth() + 1;
        this.init();
    }

    init = async() => {
        await transactionModel.getData((new Date().getMonth() + 1))
        const navView = new NavView(transactionModel);
        HeaderView.render(this.$appNode);
        navView.render(this.$appNode)
    }
}



const app = new App();
