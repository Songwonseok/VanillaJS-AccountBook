const TransactionService = require('../../services/transaction.service');


class TransactionController {
    constructor() {
        this.tService = new TransactionService();
        this.findAccountBook = async (req, res, next) => {
            try {
                const id = req.user.id;
                const accountBook = await this.tService.getUserAccountBook(id);
                res.status(200).json(accountBook);
            } catch (err) {
                res.status(400).send(err.message);
            }
        }

        this.addTransaction = async (req, res, next) => {
            try {
                const transactionDTO = {
                    content: req.body.content ,
                    createDate: req.body.createDate,
                    price: req.body.price,
                    user_id: req.user.id,
                    payment_id: req.body.payment_id,
                    category_id: req.body.category_id
                }
                await this.tService.add(transactionDTO);
                res.status(200).send({message: "거래내역 생성 성공"});
            } catch (err) {
                res.status(400).send(err.message);
            }
        }
        this.editTransaction = async (req, res, next) => {
            try {
                if(req.user.id != req.body.user_id)
                    res.status(401).send({message: '수정 권한이 없습니다.'})

                const transactionDTO = {
                    id: req.body.id,
                    content: req.body.content,
                    createDate: req.body.createDate,
                    price: req.body.price,
                    payment_id: req.body.payment_id,
                    category_id: req.body.category_id
                }
                await this.tService.edit(transactionDTO);
                res.status(200).send({ message: "거래내역 수정 성공" });
            } catch (err) {
                res.status(400).send(err.message);
            }
        }

        this.removeTransaction = async (req, res, next) => {
            try {
                const transaction = await this.tService.get(req.params.id);
                if (req.user.id != transaction.user_id)
                    res.status(401).send({ message: '삭제 권한이 없습니다.' })


                await this.tService.remove(transaction.id);

                res.status(200).send({ message: "삭제 성공" });
            } catch (err) {
                res.status(400).send(err.message);
            }
        }

    }

}

module.exports = new TransactionController();
