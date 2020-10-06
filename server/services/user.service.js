const UserRepository = require('../repositories/user.repository');
const bcrypt = require('bcrypt');
const saltRounds = 10; // 값이 높을 수록 비용 소요가 큼
const jwt = require('jsonwebtoken');

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

    async checkValid(loginForm) {
        try {
            const user = await this.userRepo.selectByUserid(loginForm.email);
            // 1. ID 체크
            if (!user) {
                throw new Error('존재하지 않는 email입니다.')
            } else {
                // 2. Password 체크
                bcrypt.compare(loginForm.password, user.password, (err, isMatch) => {
                    if (!isMatch)
                        throw new Error('비밀번호가 틀렸습니다.')
                });
                // 3. ID와 Password가 맞다면 세션에 추가하고 Cookie 생성
                return user;
            }
        } catch (err) {
            throw err;
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