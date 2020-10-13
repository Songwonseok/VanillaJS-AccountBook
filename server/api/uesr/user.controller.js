const UserService = require('../../services/user.service');

const jwt = require("jsonwebtoken");
const jwtConfig = require("../../config/jwt");

class UserController {
    constructor() {
        this.uService = new UserService();

        this.findUser = async (req, res, next) => {
            try {
                const id = req.user.id;
                const userDTO = await this.uService.findUser(id);
                res.status(200).json(userDTO);
            } catch (err) {
                res.status(400).send(err.message);
            }
        }
        
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
                const token = generateToken(req.user);
                res.status(201).send({ token: token });
            });
        }
    }
    
}

const generateToken = (user) => {
    return jwt.sign({
        id: user.id,
        userid: user.userid,
        name: user.name 
    },
    jwtConfig.secret,
    {
        expiresIn: '1h'
    })
}
module.exports = new UserController();
