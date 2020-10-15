import transactionModel from '@models/transactionModel'
import NavView  from '@views/main/navView'
import HeaderView from '@views/header/headerView'
import '@fortawesome/fontawesome-free/js/all'
import {$} from '@utils/common'
import filterView from '@views/filter/filterView'
import authModel from '@models/authModel'

import loginView from '@views/auth/loginView'

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
            await transactionModel.getData((new Date().getMonth() + 1))
            filterView.setModel(transactionModel);
            const navView = new NavView(transactionModel);
            HeaderView.render(this.$appNode);
            navView.render(this.$appNode)
            HeaderView.onEvent();
        }else{
            loginView.render();
        }
    }
}



new App();
