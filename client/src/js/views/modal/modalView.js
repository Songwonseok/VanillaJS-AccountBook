import { $ } from '@utils/common'

class ModalView {
    constructor(paymenModel) {
        this.model = paymenModel;
        this.model.subscribe(this);
    }

    update =(data) => {
        $('.paymentList').innerHTML = `${data.reduce((acc, item) => {
            return acc += `<div class="paymentItem" data-id="${item.id}">
                                <span class="paymentName">${item.Payment.name}</span>
                                <button class="deletePaymentBtn">&times</button>
                            </div>`
        }, '')}`
        this.onEvent();
    } 

    render = ($div) => {
        $div.innerHTML = `<div class="paymentModal modal hidden">
                                <div class="modalOverlay"></div>
                                <div class="modalContent">
                                    <div class="modalHeader">
                                        <button class="modalCloseBtn">&times</button>
                                        <div class="modalTitle">결제 수단 관리</div>
                                    </div>
                                    <form class="addModalForm">
                                        <label class="inputLabel">결제 수단</label>
                                        <input class="inputModal" type="text" name="name"></input>
                                        <button class="modalAddBtn">추가</button>
                                    </form>
                                    <div class="paymentList">
                                        ${this.model.list.reduce((acc,item) => {
                                            return acc += `<div class="paymentItem" data-id="${item.id}">
                                                <span class="paymentName">${item.Payment.name}</span>
                                                <button class="deletePaymentBtn">&times</button>
                                            </div>`
                                        }, '')}
                                    </div> 
                                </div>
                            </div>`
    }

    onEvent = () => {
        $('.modalOverlay').addEventListener('click', this.onModal)
        $('.modalCloseBtn').addEventListener('click', this.onModal)
        $('.paymentList').addEventListener('click', this.onDelete)
        $('.modalAddBtn').addEventListener('click', this.onAdd)
    }

    onModal = (e) => {
        const $modal = $('.paymentModal');
        $modal.classList.toggle('hidden');
    }
    onDelete = (e) => {
        if (e.target.className === 'deletePaymentBtn'){
            if (confirm("결제 수단을 삭제하시겠습니까?")) {
                const id = e.target.closest('.paymentItem').dataset.id;
                this.model.removeData(id);
            }
        }
    }

    onAdd = async (e) => {
        e.preventDefault();
        const $form = $('.addModalForm');
        const name = $form.name.value;
        if (name.replace(/ /gi, "").length ==0){
            alert("이름을 입력해주세요")
            $form.name.value ='';
            return;
        }
        const payload = {
            name: name
        }
        this.model.addData(payload);
        $form.name.value = '';
    }

}

export default ModalView;