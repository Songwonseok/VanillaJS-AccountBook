const { User } = require('../models');

class UserRepository {
    constructor(){}
    SELECT(id) {
        return new Promise((resolve, reject) => {
            User.find({
                where: {
                    id: id,
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

    SELECT_BY_USERID(userid) {
        return new Promise((resolve, reject) => {
            User.find({
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

    INSERT(userDTO) {
        return new Promise((resolve, reject) => {
            User.create({userid: userDTO.userid, password: userDTO.password, name: userDTO.name})
                .then(result => {
                    console.log(result);
                    resolve(result);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}

module.exports = UserRepository;