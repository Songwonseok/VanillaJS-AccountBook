const { User, Transaction, Category } = require('../models');

class UserRepository {
    constructor(){}
    selectOne(id) {
        return new Promise((resolve, reject) => {
            User.findByPk(id,
                {
                include:{
                    model: Transaction,
                    include:{
                        model: Category
                    }
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

    selectByUserid(userid) {
        return new Promise((resolve, reject) => {
            User.findOne({
                where: {
                    userid: userid,
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

    insert(userDTO) {
        return new Promise((resolve, reject) => {
            User.create(userDTO)
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}

module.exports = UserRepository;