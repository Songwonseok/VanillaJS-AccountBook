import authModel from '@models/authModel'
import { $ } from '@utils/common'

class HeaderView {
    constructor(){}
    render($div) {
        $div.innerHTML += `<header>
                                <span class="appTitle">가계부</span>
                                <button class="modalBtn">결제수단</button>
                                <button class="logoutBtn">로그아웃</button>
                            </header>`
    }
    onEvent = () => {
        $('.logoutBtn').addEventListener('click', this.onLogout)
        $('.modalBtn').addEventListener('click', this.onModal)
    }

    onLogout = (e) => {
        authModel.deleteToken();
    }

    onModal = (e) => {
        const $modal = $('.paymentModal');
        $modal.classList.toggle('hidden');
    }
}

export default new HeaderView();