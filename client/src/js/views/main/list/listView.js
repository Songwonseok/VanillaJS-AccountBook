import InputForm from '@views/main/list/inputForm'
import filterView from '@views/filter/filterView'

import { $, numberWithCommas, groupByDate } from '@utils/common'

const DAY = ['일', '월', '화', '수', '목', '금', '토'];

class ListView{
    constructor(transactionModel, paymentModel){
        this.model = transactionModel;
        this.payment = paymentModel;
        this.inputForm = new InputForm(transactionModel, paymentModel);
    }

    onEvent = () => {
        console.log('listVIew');
        const $list = $('.accountList');
        $list.addEventListener('mouseover', this.onMouseOverItem)
        $list.addEventListener('mouseout', this.onMouseOutItem)
        $list.addEventListener('click', this.onClickEditBtn)
        filterView.onEvent();
        this.inputForm.onEvent();
    }

    onClickEditBtn = (e) => {
        if (e.target.className == 'itemEditBtn'){
            const id = e.target.closest('.accountItem').dataset.id;
            const item = this.model.findOne(id);
            
            $('.transactionForm').outerHTML = this.inputForm.render(item);
            const $btn = $('.submitBtn');
            if (this.payment.list.find(e => e.payment_id == item.payment_id)){
                $btn.classList.remove('disabled');
                $btn.disabled = false;
            }
            this.inputForm.onEvent();
        }
    }

    onMouseOverItem = (e) => {
        const $item = e.target.closest('.accountItem');
        if ($item) {
            $('.itemEditBtn', $item).style.visibility = 'visible';
        }
    }

    onMouseOutItem = (e) => {
        const $item = e.target.closest('.accountItem');
        if ($item) {
            $('.itemEditBtn', $item).style.visibility = 'hidden';
        }
    }

    render = (list) => {
        const dateList = groupByDate(list);
        const dates = Object.keys(dateList);
        let inner = this.inputForm.render();
        inner += filterView.render();
        inner += `<div class="accountList">
        ${dates.reduce((acc,date) => {
            return acc += `<div class="accountDate">
                        <span class="day">${Number(date.slice(5, 7))}월${String(Number(date.slice(8))).padStart(2, ' ')}일 ${DAY[new Date(date).getDay()]}</span>
                        <span class="dayIncome">${(dateList[date].income > 0) ? ("+" + numberWithCommas(dateList[date].income.toString()) + "원") : ''}</span> 
                        <span class="dayExpenditure">${(dateList[date].expenditure > 0) ? ("-" + numberWithCommas(dateList[date].expenditure.toString()) + "원") : ''}</span>
                     </div>
                     ${dateList[date].reduce((acc, item) => {
                        return acc += (item.Category.Classification.name === '지출') ?
                            `<div class="accountItem" data-id="${item.id}">
                                    <span class="itemCategory">${item.Category.name}</span> 
                                    <span class="itemContent">${item.content}</span>
                                    <span class="itemEditBtn"><i class="fas fa-edit"></i> 수정</span>
                                    <span class="itemPayment">${item.Payment.name}</span> 
                                    <span class="itemPrice">-${numberWithCommas(item.price.toString())}원</span>
                                </div>`
                            : `<div class="accountItem" data-id="${item.id}">
                                        <span class="itemCategory incomeItem">${item.Category.name}</span> 
                                        <span class="itemContent">${item.content}</span>
                                        <span class="itemEditBtn"><i class="fas fa-edit"></i> 수정</span>
                                        <span class="itemPayment">${item.Payment.name}</span> 
                                        <span class="itemPrice incomeItem">+${numberWithCommas(item.price.toString())}원</span>
                                    </div>`
                    }, '')}`
        },'')} </div>`
        return inner;
    }
}

export default ListView;