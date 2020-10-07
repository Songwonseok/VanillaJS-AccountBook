const { Transaction, Payment, Category, Classification } = require('../models');

class TransactionRepository {
    constructor() { }

    selectOne(id) {
        return new Promise((resolve, reject) => {
            Transaction.findByPk(id)
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    selectAllByUserid(user_id) {
        return new Promise((resolve, reject) => {
            Transaction.findAll({
                include: [{
                    model: Payment,
                    attributes: ['name']
                },
                {
                    model: Category,
                    include:{
                        model: Classification,
                        attributes: ['name']
                    },
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

    insert(transactionDTO) {
        return new Promise((resolve, reject) => {
            Transaction.create(transactionDTO)
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    update(transactionDTO) {
        return new Promise((resolve, reject) => {
            Transaction.update(transactionDTO,{
                where: {
                    id: transactionDTO.id
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

    delete(id) {
        return new Promise((resolve, reject) => {
            Transaction.destroy({
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

module.exports = TransactionRepository;