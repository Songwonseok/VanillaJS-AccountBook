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
};
// 출처 : https://loy124.tistory.com/294