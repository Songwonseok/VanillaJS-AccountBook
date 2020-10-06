const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                userid: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                    unique: true,
                },
                password: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                name: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                }
            }, 
            {
                sequelize, 
                timestamps: false, 
                underscored: false, 
                modelName: "User", 
                tableName: "user", 
                paranoid: false 
            }
        );
    }
};
// 출처 : https://loy124.tistory.com/294