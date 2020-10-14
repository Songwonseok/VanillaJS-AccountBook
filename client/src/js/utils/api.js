

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcmlkIjoiYXNkZiIsIm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MDI2NzM1MzAsImV4cCI6MTYwMjcxNjczMH0.Y8rx_QvAn7U986QzM7j5rd4hoQAljZoXDfkNdP_IbZY"
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
