export const $ = (selector, base = document) => base.querySelector(selector)
export const $All = (selector, base = document) => base.querySelectorAll(selector)
export const numberWithCommas = (number) =>  number.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export const color = [
    'rgb(90,228,184)'
    , 'rgb(147, 218, 214)'
    , 'rgb(41, 182, 174)'
    , 'rgb(41, 171, 182)'
    , 'rgb(41, 144, 182)'
    , 'rgb(67, 219, 207)'
    , 'rgb(41, 117, 182)'
    , 'rgb(52, 88, 163)'
    , 'rgb(45, 75, 140)'
]

export const groupByDate = (list) => {
    const dateObj = {};

    list.forEach(item => {
        const date = item.createDate.slice(0, 10);
        if (!dateObj[date]) {
            dateObj[date] = [item];
            return;
        }
        dateObj[date].push(item);
    });
    Object.keys(dateObj).forEach(key => {
        let income = 0;
        let expenditure = 0;
        dateObj[key].forEach(item => {
            if (item.Category.Classification.name === '수입') {
                income += item.price;
            } else {
                expenditure += item.price;
            }
        })
        dateObj[key].income = income;
        dateObj[key].expenditure = expenditure;
    })

    return dateObj;
}
