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