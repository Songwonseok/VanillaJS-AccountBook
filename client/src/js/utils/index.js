export const $ = (selector, base = document) => base.querySelector(selector)
export const $All = (selector, base = document) => base.querySelectorAll(selector)

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcmlkIjoiYXNkZiIsIm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MDI1OTgyODAsImV4cCI6MTYwMjYwMTg4MH0.Lbk4xYf3Bn_GPVDbN-lGcApQFRsBD__5Q8uCeYoQkeA"

export const getFetch = ((url) => {
    return fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    }).then((res) => res.json())
})

export const postFetch = ((url, body) => {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then((res) => res.json())
})

export const putFetch = ((url, body) => {
    return fetch(url, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then((res) => res.json())
})

export const deleteFetch = ((url) => {
    return fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json())
})
