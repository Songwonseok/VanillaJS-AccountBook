import '@fortawesome/fontawesome-free/js/all'

import {$} from '@utils/common'
import { checkAuth} from '@utils/api'

import authModel from '@models/authModel'
import transactionModel from '@models/transactionModel'
import paymentModel from '@models/paymentModel'

import loginView from '@views/auth/loginView'
import filterView from '@views/filter/filterView'
import headerView from '@views/header/headerView'

import ModalView from '@views/modal/modalView'
import NavView from '@views/main/navView'


class App {
    constructor() {
        this.$appNode = $('#app');
        this.currentMonth = new Date().getMonth() + 1;
        authModel.subscribe(this);
        this.init();
    }

    update =() => {
        this.$appNode.innerHTML=''
        this.init();
    }

    init = async() => {
        if(localStorage.token){
            checkAuth();
        }

        if (localStorage.token){
            await transactionModel.getData((new Date().getMonth() + 1))
            await paymentModel.getData();

            filterView.setModel(transactionModel);
            const navView = new NavView(transactionModel);
            const modalView = new ModalView(paymentModel);

            modalView.render(this.$appNode);
            headerView.render(this.$appNode);
            navView.render(this.$appNode)

            modalView.onEvent();
            headerView.onEvent();
        }else{
            loginView.render();
        }
    }
}



new App();
