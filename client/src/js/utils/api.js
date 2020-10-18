import authModel from '@models/authModel'

const url = "http://115.85.182.190"

export const getTransactionList = (month) => {
    return fetch(`${url}/api/transaction/${month}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    }).then((res) => res.json())
    .catch(e => {
        if (e.message === 'Unexpected token U in JSON at position 0')
            authModel.deleteToken();
    })
}

export const checkAuth = () => {
    return fetch(`${url}/api/user/auth`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    }).then((res) => res.json())
        .catch(e => {
            if (e.message === 'Unexpected token U in JSON at position 0')
                authModel.deleteToken();
        })
}

export const addTransaction = ((payload) => {
    return fetch(`${url}/api/transaction`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(payload)
    }).then((res) => res.json())
    .catch(e => {
        if (e.message === 'Unexpected token U in JSON at position 0')
            authModel.deleteToken();
    })
})

export const editTransaction = ( (payload) => {
    return fetch(`${url}/api/transaction`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(payload)
    }).then((res) => res.json())
    .catch(e => {
        if (e.message === 'Unexpected token U in JSON at position 0')
            authModel.deleteToken();
    })
})


export const deleteTransaction = ((id) => {
    return fetch(`${url}/api/transaction/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    }).then((res) => res.json())
    .catch(e => {
        if (e.message === 'Unexpected token U in JSON at position 0')
            authModel.deleteToken();
    })
})

export const login = (payload) => {
    return fetch(`${url}/api/user/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then((res) => res.json())
        .catch(e => {
            console.error(e);
            throw new Error(e.message);
        })
}

export const signup = (payload) => {
    return fetch(`${url}/api/user/signup`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then((res) => res.json())
        .catch(e => {
            console.error(e);
            throw new Error(e.message);
        })
}

export const getPayment = () => {
    return fetch(`${url}/api/payment/`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    }).then((res) => res.json())
        .catch(e => {
            if (e.message === 'Unexpected token U in JSON at position 0')
                authModel.deleteToken();
        })
}

export const addPayment = ((payload) => {
    return fetch(`${url}/api/payment`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(payload)
    }).then((res) => res.json())
        .catch(e => {
            if (e.message === 'Unexpected token U in JSON at position 0')
                authModel.deleteToken();
        })
})


export const deletePayment = ((id) => {
    return fetch(`${url}/api/payment/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    }).then((res) => res.json())
        .catch(e => {
            if (e.message === 'Unexpected token U in JSON at position 0')
                authModel.deleteToken();
        })
})

