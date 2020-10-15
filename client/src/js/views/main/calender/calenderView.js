import filterView from '@views/filter/filterView'
import { groupByDate, numberWithCommas } from '@utils/common'

export default class CalenderView {
    constructor(model){
        this.model = model;
    }

    onEvent = () => {
        filterView.onEvent();
    }
    render = (list, currentMonth) => {
        const data = groupByDate(list);
        const currentYear = new Date().getFullYear();
        const today = (new Date().getMonth() + 1 == currentMonth) ? new Date().getDate(): undefined;
        const firstDay = new Date(currentYear, currentMonth -1, 1).getDay(); // 요일
        const lastDate = new Date(currentYear, currentMonth, 0).getDate(); // 날짜

        let inner = filterView.render();
        inner += `<div id="calender">
                    <div class="daysOfWeek">
                        <div class="calenderDay sunday">일</div>
                        <div class="calenderDay">월</div>
                        <div class="calenderDay">화</div>
                        <div class="calenderDay">수</div>
                        <div class="calenderDay">목</div>
                        <div class="calenderDay">금</div>
                        <div class="calenderDay">토</div>
                    </div>`
        let date =1;
        while(true){
            if (date > lastDate) break;

            inner += `<div class="daysOfWeek">`
            for (let j = 0; j < 7; j++) {
                const currDate = `${currentYear}-${currentMonth.toString().padStart(2,'0')}-${date.toString().padStart(2,'0')}`
                if (today && date == today){
                    inner += `<div class="calenderDate today${(j == 0) ? "sunday" : ''}"> 
                        <div class="dateHeader">${date++}</div>
                    </div>`
                    continue;
                }
                if(date == 1 && j == firstDay){
                    inner +=  `<div class="calenderDate ${(j == 0) ? "sunday" : ''}"> 
                        <div class="dateHeader">${date++}</div>
                        <div class="calenderIncome">${(data[currDate]) ? "+" +numberWithCommas(data[currDate].income.toString()) : ''}</div>
                        <div class="calenderExpenditure">${(data[currDate]) ? "-" + numberWithCommas(data[currDate].expenditure.toString()) : ''}</div>
                    </div>`
                } else if (date > 1 && date <= lastDate){
                    inner += `<div class="calenderDate ${(j == 0) ? "sunday" : ''}"> 
                        <div class="dateHeader">${date++}</div>
                        <div class="calenderIncome">${(data[currDate] && data[currDate].income > 0) ? "+" + numberWithCommas(data[currDate].income.toString()) : ''}</div>
                        <div class="calenderExpenditure">${(data[currDate] && data[currDate].expenditure > 0) ? "-" + numberWithCommas(data[currDate].expenditure.toString()) : ''}</div>
                    </div>`
                } else{
                    inner += `<div class="calenderDate ${(j == 0) ? "sunday" : ''}"> 
                        <div class="dateHeader"> </div>
                        <div class="calenderIncome"></div>
                        <div class="calenderExpenditure"></div>
                    </div>`
                }
            }
            inner += `</div>`
        }
        inner += `</div>`
        return inner
    }

    
}