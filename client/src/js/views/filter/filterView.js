import { $,$All, numberWithCommas } from '@utils/common'

class FilterView {
    constructor() {
        this.model;
        this.checked = ["수입", "지출"];
    }

    reset() {
        this.checked = ["수입", "지출"];
    }

    setModel(model) {
        this.model = model;
    }

    onEvent() {
        const $filter = $('#filter');
        $filter.addEventListener('change', (e) => {
            const changedChecked = [];
            $All('input[type=checkbox]', $filter).forEach(box => { 
                if (box.checked == true) changedChecked.push(box.value);
            });
            this.checked = [...changedChecked];
            this.model.filterData(this.checked);
        })
    }

    render() {
        const totalPrice = this.getTotalPrice();
        return `
            <form id="filter">
                <div class="incomeContainer">
                    <label><input type="checkbox" name="income" value="수입" ${this.checked.find(e => e == "수입")?"checked":''}></input> 수입</label>
                    <span class="filterTotalPrice">+${numberWithCommas(totalPrice.income.toString())}원</span>
                </div>
                <div class="expenditureContainer">
                    <label><input type="checkbox" name="expenditure" value="지출" ${this.checked.find(e => e == "지출") ? "checked" : ''}></input> 지출</label>
                    <span class="filterTotalPrice">-${numberWithCommas(totalPrice.expenditure.toString())}원</span>
                </div>
            </form>
        `
    }

    getTotalPrice() {
        let incomeTotal = 0;
        let expenditureTotal = 0;
        this.model.list.forEach(item => {
            if (item.Category.Classification.name === '수입') incomeTotal += item.price;
            else expenditureTotal += item.price;
        });

        return { income: incomeTotal, expenditure: expenditureTotal}
    }
}

export default new FilterView();

