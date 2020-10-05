const Sequelize = require("sequelize");

module.exports = class Payment extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                name: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                }
            },
            {
                sequelize, 
                timestamps: false, 
                underscored: false, 
                modelName: "Payment", 
                tableName: "payment", 
                paranoid: false 
            }
        );
    }
    static associate(db) {
        db.Payment.hasMany(db.UserToPayment, { foreignKey: "payment_id", sourceKey: "id" });
        db.Payment.hasMany(db.Transaction, { foreignKey: "user_id", sourceKey: "id" });
    }
};
// 출처 : https://loy124.tistory.com/294