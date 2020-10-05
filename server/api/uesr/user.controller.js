const UserService = require('../../services/user.service');

class UserController {
    constructor() {
        this.uService = new UserService();
        this.findUser = async(req, res, next) => {
            try {
                // const user_id = 토큰;
                const userDTO = await this.uService.findOne(user_id);
                res.status(200).json(userDTO);
            } catch (err) {
                res.status(400).send(err.message);
            }
        }
        this.insertUser = async (req, res, next) => {
            try {
                const userDTO = {
                    userid: req.body.userid,
                    password: req.body.password,
                    name: req.body.name
                }
                const insertUser = await this.uService.create(userDTO);
                res.status(200).json(insertUser);
            } catch (err) {
                res.status(400).send(err.message);
            }
        }
    }
    
}


module.exports = new UserController();
