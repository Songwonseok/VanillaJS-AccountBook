const { Transaction, Payment, Category, Classification } = require('../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

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

    selectAllByUserid(user_id, month) {
        return new Promise((resolve, reject) => {
            const currntYears = new Date().getFullYear();
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
                        createDate: {
                            [Op.and]: [
                                { [Op.gte]: `${currntYears}-${Number(month)}-01` }, 
                                { [Op.lt]: `${(Number(month) == 12) ? (currntYears + 1) + '-01-01' : currntYears+'-'+String(Number(month)+1)+'-01'}` }
                            ]
                        }
                        
                    },
                    order: [
                        ['createDate', 'DESC']
                    ],
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