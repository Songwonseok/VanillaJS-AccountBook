const PaymentRepository = require('../repositories/payment.repository');

class PaymentService {
    constructor() {
        this.paymentRepo = new PaymentRepository();
    }

    async get(id) {
        try {
            const userTopaymentList = await this.paymentRepo.selectAllByUserid(id);
            return userTopaymentList;
        } catch (err) {
            throw new Error('결제수단 조회 실패');
        }
    }

    async add(paymentDTO) {
        try {
            let payment = await this.paymentRepo.selectByName(paymentDTO.name)
            if(!payment){
                payment = await this.paymentRepo.newPayment(paymentDTO.name)
            }
            const userToPaymentDTO = {
                user_id : paymentDTO.user_id,
                payment_id: payment.id
            }
            await this.paymentRepo.insert(userToPaymentDTO);

        } catch (err) {
            throw err
        }
    }


    async remove(id) {
        try {
            await this.paymentRepo.delete(id);
        } catch (err) {
            throw err
        }
    }
}

module.exports = PaymentService;