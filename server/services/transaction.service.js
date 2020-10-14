const TransactionRepository = require('../repositories/transaction.repository');

class TransactionService {
    constructor() {
        this.transactionRepo = new TransactionRepository();
    }

    async get(id) {
        try {
            const transactionDTO = await this.transactionRepo.selectOne(id);
            return transactionDTO;
        } catch (err) {
            throw new Error('가계부 조회 실패');
        }
    }

    async getUserAccountBook(user_id, month) {
        try {
            const accountBook = await this.transactionRepo.selectAllByUserid(user_id, month);
            return accountBook;
        } catch (err) {
            throw new Error('가계부 조회 실패');
        }
    }

    async add(transactionDTO) {
        try {
            await this.transactionRepo.insert(transactionDTO);
        } catch (err) {
            throw err
        }
    }

    async edit(transactionDTO) {
        try {
            await this.transactionRepo.update(transactionDTO);
        } catch (err) {
            throw err
        }
    }

    async remove(id) {
        try {
            await this.transactionRepo.delete(id);
        } catch (err) {
            throw err
        }
    }
}

module.exports = TransactionService;