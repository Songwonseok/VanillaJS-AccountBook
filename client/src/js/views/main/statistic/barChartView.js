import { color, numberWithCommas } from '@utils/common'

export default class BarChartView {
    constructor(){}

    render = (data) => {
        let inner = `<div class="barChartContainer">`
        for(let i=0; i<data.list.length;i++){
            console.log(data.list[i]);
            inner += `<div class="barChartItem">
                        <div class="categoryName">${data.list[i].name}</div>
                        <div class="categoryRate">${Math.round(data.list[i].price / data.total * 100)}%</div>
                        <div class="rateBarChart">
                            <svg width="100%" height="100%">
                                <rect y="12" width="${Math.round(data.list[i].price / data.total * 100)}%" height="26px" stroke="none" fill="${color[i]}" />
                            </svg>
                        </div>
                        <div class="categoryTotal">${numberWithCommas(data.list[i].price.toString())}원</div>
                    </div>`
        }
        inner += `</div>`;
        return inner;
    }
}

