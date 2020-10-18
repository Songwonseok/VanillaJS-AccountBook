import { $, numberWithCommas} from '@utils/common'
import { addTransaction, editTransaction } from '@utils/api'
import transactionModel from '@models/transactionModel'

export default class InputForm {
    constructor(model) {
        this.model = model;
    }

    render(item=undefined) {
        if (item) 
            return this.editForm(item)

        const date = new Date();
        return `<form class="transactionForm">
                    <div class="inputClassification">
                        <span>
                            <label>분류</label>
                            <label class="box-radio-input"><input type="radio" name="typeBtn" value="1" checked="checked"><span>지출</span></label>
                            <label class="box-radio-input income"><input type="radio" name="typeBtn" value="2"><span>수입</span></label>
                        </span>
                        <span class="resetBtn">내용 지우기</span>
                    </div>

                    <div class="selectContainer">
                    <span>
                        <label>날짜</label>
                        <input class="inputDate" type="date" name="createDate" value="${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}">
                    </span>
                    <span>
                        <label>카테고리</label>
                        <select name="category">
                            <option value="" selected disabled hidden>선택</option>
                            <option value="1">쇼핑/뷰티</option>
                            <option value="2">식비</option>
                            <option value="3">생활</option>
                            <option value="4">카페/간식</option>
                            <option value="5">문화/여가</option>
                            <option value="6">의료/건강</option>
                            <option value="7">교통</option>
                            <option value="8">미분류</option>
                        </select>
                    </span>
                    <span>
                        <label>결제수단</label>
                        <select name="payment">
                        <option value="" selected disabled hidden>선택</option>
                        <option value="7">현금</option>
                        <option value="3">체크카드</option>
                        <option value="8">신용카드</option>
                        <option value="1">국민카드</option>
                        <option value="2">신한카드</option>
                        <option value="9">T머니</option>
                        </select>
                    </span>
                    </div>
                    <div class="textContainer">
                    <span>
                        <label>금액</label>
                        <label><input class="inputPrice" type="text" name="price">원</label>
                    </span>
                    <span>
                        <label>내용</label>
                        <input class="inputText" type="text" name="content">
                    </span>
                    </div>
                    <button class="submitBtn disabled" disabled="true">확인</button>
                </form>`
    }

    editForm = (item) => {
        let render = `<form class="transactionForm">
                    <div class="inputClassification">
                        <span>
                            <label>분류</label>
                            <label class="box-radio-input"><input type="radio" name="typeBtn" value="1" ${(item.Category.Classification.name === '지출')?'checked="checked"':''}><span>지출</span></label>
                            <label class="box-radio-input income"><input type="radio" name="typeBtn" value="2" ${(item.Category.Classification.name === '수입') ? 'checked="checked"' : ''}><span>수입</span></label>
                        </span>
                        <span class="deleteBtn"  data-id="${item.id}">삭제</span>
                    </div>

                    <div class="selectContainer">
                    <span>
                        <label>날짜</label>
                        <input class="inputDate" type="date" name="createDate" value="${item.createDate.slice(0,10)}">
                    </span>
                    <span>
                        <label>카테고리</label>
                        <select name="category">
                            <option value="" disabled hidden>선택</option>`
        render += ((item.Category.Classification.name === '지출')?
            `<option value="1" ${(item.category_id == 1) ? 'selected' : ''}>쇼핑/뷰티</option>
                            <option value="2" ${(item.category_id == 2) ? 'selected' : ''}>식비</option>
                            <option value="3" ${(item.category_id == 3) ? 'selected' : ''}>생활</option>
                            <option value="4" ${(item.category_id == 4) ? 'selected' : ''}>카페/간식</option>
                            <option value="5" ${(item.category_id == 5) ? 'selected' : ''}>문화/여가</option>
                            <option value="6" ${(item.category_id == 6) ? 'selected' : ''}>의료/건강</option>
                            <option value="7" ${(item.category_id == 7) ? 'selected' : ''}>교통</option>
                            <option value="8" ${(item.category_id == 8) ? 'selected' : ''}>미분류</option>
                            `
                    : `<option value="9"  ${(item.category_id == 9) ? 'selected' : ''}>월급</option>
                        <option value="10"  ${(item.category_id == 10) ? 'selected' : ''}>용돈</option>
                        <option value="11" ${(item.category_id == 11) ? 'selected' : ''}>기타수입</option>`)
        render += `</select> </span>
                       <span>
                        <label>결제수단</label>
                        <select name="payment">
                        <option value=""  disabled hidden>선택</option>
                        <option value="7" ${(item.payment_id == 7) ? "selected='true'" : ""}>현금</option>
                        <option value="3" ${(item.payment_id == 3) ?"selected='true'":""}>체크카드</option>
                        <option value="8" ${(item.payment_id == 8) ? "selected='true'" : ""}>신용카드</option>
                        <option value="1" ${(item.payment_id == 1) ? "selected='true'" : ""}>국민카드</option>
                        <option value="2" ${(item.payment_id == 2) ? "selected='true'" : ""}>신한카드</option>
                        <option value="9" ${(item.payment_id == 9) ? "selected='true'" : ""}>T머니</option>
                        </select>
                    </span>
                    </div>
                    <div class="textContainer">
                    <span>
                        <label>금액</label>
                        <label><input class="inputPrice" type="text" name="price" value="${numberWithCommas(item.price.toString())}">원</label>
                    </span>
                    <span>
                        <label>내용</label>
                        <input class="inputText" type="text" name="content" value="${item.content}">
                    </span>
                    </div>
                    <button class="submitBtn disabled" disabled="true">확인</button>
                </form>`
        return render;
    }
    onEvent = () => {
        const $submitBtn = $('.submitBtn');
        const $form = $('.transactionForm');
        const $inputPirce = $('.inputPrice');
        const $resetBtn = $('.resetBtn');
        const $deleteBtn = $('.deleteBtn');

        $submitBtn.addEventListener('click', this.onSubmit)
        if ($resetBtn) $resetBtn.addEventListener('click', this.onReset);
        if ($deleteBtn)$deleteBtn.addEventListener('click', this.onDelete);
        $form.addEventListener('change', this.onChange)
        $inputPirce.addEventListener('keyup', this.onKeyUp)
    }
    onReset = (e) => {
        e.preventDefault();
        const date = new Date();
        const $form = $('.transactionForm');
        $form.content.value = "",
        $form.price.value = "",
        $form.createDate.value = `${date.getFullYear() }-${date.getMonth() + 1 }-${ date.getDate()}`,
        $form.payment.value = ""
        $form.category.value = ""
    }

    onDelete = async (e) => {
        e.preventDefault();
        if(confirm('정말 삭제하시겠습니까?')){
            const id = e.target.dataset.id;
            await this.model.deleteItem(id);
        }
    }

    onKeyUp = (e) => {
        e.target.value = e.target.value.replace(/(^0+)/, "")
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        e.target.value = numberWithCommas(e.target.value);
    }

    changeCategory = (classfication) => {
        const $select = $('select');
        if (classfication === '1'){
            $select.innerHTML = `<option value="" selected disabled hidden>선택</option>
                                    <option value="1">쇼핑/뷰티</option>
                                    <option value="2">식비</option>
                                    <option value="3">생활</option>
                                    <option value="4">카페/간식</option>
                                    <option value="5">문화/여가</option>
                                    <option value="6">의료/건강</option>
                                    <option value="7">교통</option>
                                    <option value="8">미분류</option>`
        }
        else {
            $select.innerHTML = `<option value="" selected disabled hidden>선택</option>
                                <option value="9">월급</option>
                                <option value="10">용돈</option>
                                <option value="11">기타수입</option>`
        }
    }

    onChange = (e) => {
        const $btn = $('.submitBtn');
        const $form = e.target.closest('.transactionForm')

        if (e.target.getAttribute('type') == 'radio'){
            this.changeCategory(e.target.value);
            return;
        }

        if ($form.category.value && $form.price.value && $form.payment.value && $form.content.value) {
            $btn.classList.remove('disabled');
            $btn.disabled = false;
        }else {
            $btn.classList.add('disabled');
            $btn.disabled = true;
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();

        
        const $form = e.target.closest('.transactionForm');

        const payload = {
            content: $form.content.value,
            price: parseInt($form.price.value.replace(/,/g, "")),
            createDate: $form.createDate.value,
            payment_id: $form.payment.value,
            category_id: $form.category.value
        }
        const $deleteBtn = $('.deleteBtn');
        if ($deleteBtn) {
            payload.id = $deleteBtn.dataset.id;
            await editTransaction(payload);
        }else {
            await addTransaction(payload);
        }
        await this.model.changeData();
    }

    
    

}
