

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcmlkIjoiYXNkZiIsIm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MDI3ODMxNzYsImV4cCI6MTYwMjgyNjM3Nn0.2vxwtRf_Q0fiNayBsgnSyzQrx1LSsWI7t68rzkmkSOs"
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

export const editTransaction = ( (payload) => {
    return fetch(`${url}/api/transaction`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    }).then((res) => res.json())
})


export const deleteTransaction = ((id) => {
    return fetch(`${url}/api/transaction/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
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
