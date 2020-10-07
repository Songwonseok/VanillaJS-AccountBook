const UserService = require('../../services/user.service');

const jwt = require("jsonwebtoken");
const jwtConfig = require("../../config/jwt");

class UserController {
    constructor() {
        this.uService = new UserService();
        
        this.signup = async (req, res, next) => {
            try {
                const userDTO = {
                    userid: req.body.userid,
                    password: req.body.password,
                    name: req.body.name
                }
                const insertUser = await this.uService.createUser(userDTO);
                res.status(200).json(insertUser);
            } catch (err) {
                res.status(400).send(err.message);
            }
        }

        this.signin = (req, res, next) => {
            req.login(req.user, { session: false }, (loginError) => {
                if (loginError) {
                    res.send(loginError);
                    return;
                }
                const jwt = generateToken(req.user);
                res.cookie('jwt', jwt);
                res.status(201).send({ message: '로그인 success' });
            });
        }

        this.logout = async (req, res, next) => {
            res.clearCookie('jwt');
            res.status(200).send({message: '로그아웃 success'})
        }
    }
    
}

const generateToken = (user) => {
    return jwt.sign({
        id: user.id,
        userid: user.userid,
        name: user.name 
    },
    jwtConfig.secret,{
        expiresIn: '30m'
    })
}
module.exports = new UserController();
