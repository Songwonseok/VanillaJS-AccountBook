import { numberWithCommas } from '@utils/common'
import PieChartView from '@views/main/statistic/pieChartView'

export default class StatisticView {
    constructor(model) {
        this.model = model;
        this.pieChartView = new PieChartView();
        this.data;
    }

    onDraw(){
        this.pieChartView.drawChart(this.data);
    }

    render(list=this.model.list){
        this.data = this.getExpendGroupByCategory(list);
        let inner = `<div class="chartTotal">
                        <span class="chartCheckbox">카테고리별 지출</span>
                        <span class="totalText">이번 달 지출 금액</span>
                        <span class="totalPrice">${numberWithCommas(this.data.total.toString())}원</span>
                    </div>`
        inner += this.pieChartView.render(this.data);
        return inner;
    }

    getExpendGroupByCategory = (data) => {
        const list = data.filter(item => item.Category.Classification.name === '지출');
        const totalPrice = list.reduce((acc, item) => {
            return acc += item.price;
        }, 0)

        const result = {
            total: totalPrice,
            list: []
        }
        const categoryObj = {};

        list.forEach(item => {
            if (!categoryObj[item.Category.name]) {
                categoryObj[item.Category.name] = item.price;
            } else {
                categoryObj[item.Category.name] += item.price
            }
        })


        Object.keys(categoryObj).forEach(category => {
            result.list.push({ name: category, price: categoryObj[category] });
        })
        result.list.sort(function (a, b) { // 오름차순
            return b.price - a.price
        });

        return result
    }
}


// 참고 : http://www.gisdeveloper.co.kr/?p=4705