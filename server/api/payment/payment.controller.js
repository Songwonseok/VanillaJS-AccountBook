const PaymentService = require('../../services/payment.service');


class PaymentController {
    constructor() {
        this.pService = new PaymentService();
        
        this.findAllPayment = async (req, res, next) => {
            try {
                const id = req.user.id;
                const paymentList = await this.pService.get(id);
                res.status(200).json(paymentList);
            } catch (err) {
                res.status(400).send(err.message);
            }
        }

        this.addPayment = async (req, res, next) => {
            try {
                const paymentDTO = {
                    user_id: req.user.id,
                    name: req.body.name,
                }
                await this.pService.add(paymentDTO);
                res.status(200).send({ message: "결제수단 추가 성공" });
            } catch (err) {
                res.status(400).send(err.message);
            }
        }

        this.removePayment = async (req, res, next) => {
            try {

                await this.pService.remove(req.params.id);

                res.status(200).send({ message: "삭제 성공" });
            } catch (err) {
                res.status(400).send(err.message);
            }
        }

    }

}

module.exports = new PaymentController();
