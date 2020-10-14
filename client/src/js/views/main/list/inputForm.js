class InputForm {
    constructor() {}

    render() {
        return `<form method='post'>
                            <div class="inputClassification">
                            <label>분류</label>
                            <label class="box-radio-input"><input type="radio" name="typeBtn" value="income" checked="checked"><span>수입</span></label>
                            <label class="box-radio-input"><input type="radio" name="typeBtn" value="outcome"><span>지출</span></label>
                            </div>
                            <div class="selectContainer">
                            <span>
                                <label>날짜</label>
                                <input class="inputDate" type="date">
                            </span>
                            <span>
                                <label>카테고리</label>
                                <select id="cars" name="cars">
                                <option value="" selected disabled hidden>선택</option>
                                <option value="shopping">쇼핑</option>
                                </select>
                            </span>
                            <span>
                                <label>결제수단</label>
                                <select id="cars" name="cars">
                                <option value="" selected disabled hidden>선택</option>
                                <option value="card">카카오카드</option>
                                </select>
                            </span>
                            </div>
                            <div class="textContainer">
                            <span>
                                <label>금액</label>
                                <input class="inputText" type="text" name="price">
                            </span>
                            <span>
                                <label>내용</label>
                                <input class="inputText" type="text" name="price">
                            </span>
                            </div>
                            <button class="submitBtn">확인</button>
                        </form>`
    }
    onEvent = () => {

    }
}

export default new InputForm();