import inputForm from '@views/main/list/inputForm'
import {$} from '@utils/common'
import transactionModel from '@models/transactionModel'

const DAY = ['일', '월', '화', '수', '목', '금', '토'];

class ListView{
    constructor(){}

    groupByDate = (list) => {
        const dateObj = {};

        list.forEach(item => {
            const date = item.createDate.slice(0,10);
            if(!dateObj[date]){
                dateObj[date] = [item];
                return;
            }
            dateObj[date].push(item);
        });
        Object.keys(dateObj).forEach(key => {
            let income = 0;
            let expenditure =0;
            dateObj[key].forEach(item => {
                if(item.Category.Classification.name==='수입'){
                    income += item.price;
                }else{
                    expenditure -= item.price;
                }
            })
            dateObj[key].income = income;
            dateObj[key].expenditure = expenditure;
        })

        return dateObj;
    }

    onEvent = () => {
        const $list = $('.accountList');
        
        inputForm.onEvent();
        $list.addEventListener('mouseover', this.onMouseOverItem)
        $list.addEventListener('mouseout', this.onMouseOutItem)
        $list.addEventListener('click', this.onClickEditBtn)
    }

    onClickEditBtn = (e) => {
        if (e.target.className == 'itemEditBtn'){
            const id = e.target.closest('.accountItem').dataset.id;
            const item = transactionModel.findOne(id);
            
            $('form').outerHTML = inputForm.render(item);
            const $btn = $('.submitBtn');
            $btn.classList.remove('disabled');
            inputForm.onEvent();
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

        let inner = inputForm.render();

        const dateList = this.groupByDate(list);
        const dates = Object.keys(dateList);

        inner += `<div class="accountList">`
        dates.forEach(date => {
            inner += `<div class="accountDate">
                        <span class="day">${Number(date.slice(5, 7))}월${String(Number(date.slice(8))).padStart(2,' ')}일 ${DAY[new Date(date).getDay()]}</span>
                        <span class="dayIncome">+${dateList[date].income}원</span> 
                        <span class="dayExpenditure">${dateList[date].expenditure}원</span>
                     </div>`
            inner += dateList[date].reduce((acc, item) =>{
                return acc += (item.Category.Classification.name === '지출')?
                        `<div class="accountItem" data-id="${item.id}">
                            <span class="itemCategory">${item.Category.name}</span> 
                            <span class="itemContent">${item.content}</span>
                            <span class="itemEditBtn"><i class="fas fa-edit"></i> 수정</span>
                            <span class="itemPayment">${item.Payment.name}</span> 
                            <span class="itemPrice">-${item.price}원</span>
                        </div>`
                    : `<div class="accountItem" data-id="${item.id}">
                                <span class="itemCategory incomeItem">${item.Category.name}</span> 
                                <span class="itemContent">${item.content}</span>
                                <span class="itemEditBtn"><i class="fas fa-edit"></i> 수정</span>
                                <span class="itemPayment">${item.Payment.name}</span> 
                                <span class="itemPrice incomeItem">+${item.price}원</span>
                            </div>`
            }, '');
        })
        inner += `</div>`
        return inner;
    }
}

export default ListView;