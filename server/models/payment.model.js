const Sequelize = require("sequelize");

module.exports = class Payment extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                name: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                    unique: true
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
// 참고 : https://loy124.tistory.com/294
