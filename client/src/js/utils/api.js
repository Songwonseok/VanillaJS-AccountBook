

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcmlkIjoiYXNkZiIsIm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MDI3MjM1NDQsImV4cCI6MTYwMjc2Njc0NH0.NIEIQJkfESaYhslEFHxt0cFPcHCKTP0gmdiLWwRORJM"
const url = "http://localhost:3000"

export const getTransactionList = (month) => {
    return fetch(`${url}/api/transaction/${month}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    }).then((res) => res.json())
}

export const addTransaction = ((payload) => {
    return fetch(`${url}/api/transaction`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
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
