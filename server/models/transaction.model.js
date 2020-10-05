const Sequelize = require("sequelize");

module.exports = class Transaction extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                name: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                },
                createDate: {
                    type: DataTypes.DATE,
                    allowNull: false,
                },
                price: {
                    type: DataTypes.INTEGER.UNSIGNED,
                    allowNull: false, 
                },
                content: {
                    type: DataTypes.STRING(45),
                }
            },
            {
                sequelize,
                timestamps: false,
                underscored: true,
                modelName: "Transaction",
                tableName: "transaction_history",
                paranoid: false
            }
        );
    }
    static associate(db) {
        db.Transaction.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
        db.Transaction.belongsTo(db.Payment, { foreignKey: "payment_id", targetKey: "id" });
        db.Transaction.belongsTo(db.Category, { foreignKey: "category_id", targetKey: "id" });
    }
};
// 출처 : https://loy124.tistory.com/294