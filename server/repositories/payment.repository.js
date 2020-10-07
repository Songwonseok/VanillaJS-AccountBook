const { Payment, UserToPayment } = require('../models');

class PaymentRepository {
    constructor() { }

    selectAllByUserid(user_id) {
        return new Promise((resolve, reject) => {
            UserToPayment.findAll({
                include: [{
                    model: Payment,
                    attributes: ['name']
                }],
                where: {
                    user_id: user_id,
                }
            })
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                reject(err);
            })
        })
    }

    selectByName(name) {
        return new Promise((resolve, reject) => {
            Payment.findOne({
                where: {
                    name: name
                }
            })
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                reject(err);
            })
        })
    }

    newPayment(name){
        return new Promise((resolve, reject) => {
            Payment.create({
                name: name
            })
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    insert(userToPaymentDTO) {
        return new Promise((resolve, reject) => {
            UserToPayment.create(userToPaymentDTO)
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                reject(err);
            })
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            UserToPayment.destroy({
                where: {
                    id: id
                }
            })
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                reject(err);
            })
        })
    }
}

module.exports = PaymentRepository;