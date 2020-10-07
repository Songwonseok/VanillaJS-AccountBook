const UserRepository = require('../repositories/user.repository');
const bcrypt = require('bcrypt');
const saltRounds = 10; // 값이 높을 수록 비용 소요가 큼

class UserService {
    constructor() {
        this.userRepo = new UserRepository();
    }

    async findUser(user_id) {
        try {
            const userDTO = await this.userRepo.selectOne(user_id);
            return userDTO;
        } catch (err) {
            throw new Error('유저 조회 실패');
        }
    }

    async createUser(userDTO) {
        try {
            userDTO.password = await getHash(userDTO.password);
            const insertUser = await this.userRepo.insert(userDTO);
            return insertUser;
        } catch (err) {
            throw err
        }
    }
}

const getHash = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) reject(err);
            bcrypt.hash(password, salt, function (err, hash) {
                if (err) reject(err)
                resolve(hash);
            });
        });
    })
}


module.exports = UserService;