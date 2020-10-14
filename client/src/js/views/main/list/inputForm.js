import {$} from '../../../utils/common'

class InputForm {
    constructor() {}

    render() {
        const date = new Date();
        return `<form>
                            <div class="inputClassification">
                            <label>분류</label>
                            <label class="box-radio-input"><input type="radio" name="typeBtn" value="1" checked="checked"><span>지출</span></label>
                            <label class="box-radio-input"><input type="radio" name="typeBtn" value="2"><span>수입</span></label>
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
                                <option value="card">카카오카드</option>
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
    onEvent = () => {
        const $btn = $('.submitBtn');
        const $form = $('form');
        const $inputPirce = $('.inputPrice');

        $btn.addEventListener('click', this.onSubmit)
        $form.addEventListener('change', this.onChange)
        $inputPirce.addEventListener('keyup', this.onKeyUp)
    }

    onKeyUp = (e) => {
        e.target.value = e.target.value.replace(/(^0+)/, "")
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        e.target.value = this.numberWithCommas(e.target.value);
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
        const $form = e.target.closest('form')

        if (e.target.getAttribute('type') == 'radio'){
            this.changeCategory(e.target.value);
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
        console.log('제출');
    }

    numberWithCommas = (number) => {
        return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

}

export default new InputForm();