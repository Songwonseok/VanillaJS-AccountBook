const Sequelize = require("sequelize");

module.exports = class UserToPayment extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                
            },
            {
                sequelize,
                timestamps: false,
                underscored: false,
                modelName: "UserToPayment",
                tableName: "user_to_payment",
                paranoid: false
            }
        );
    }
    static associate(db) {
        db.UserToPayment.belongsTo(db.Payment, { foreignKey: "payment_id", targetKey: "id"});
        db.UserToPayment.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
    }
};
// 참고 : https://loy124.tistory.com/294