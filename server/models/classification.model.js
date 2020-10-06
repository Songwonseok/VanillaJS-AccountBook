const Sequelize = require("sequelize");

module.exports = class Classification extends Sequelize.Model {
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
                modelName: "Classification",
                tableName: "classification", 
                paranoid: false 
            }
        );
    }
};
// 출처 : https://loy124.tistory.com/294

