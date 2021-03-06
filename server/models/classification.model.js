const Sequelize = require("sequelize");

module.exports = class Classification extends Sequelize.Model {
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
                modelName: "Classification",
                tableName: "classification", 
                paranoid: false 
            }
        );
    }
    static associate(db) {
        db.Classification.hasMany(db.Category, { foreignKey: "classification_id", sourceKey: "id" });
    }
};

// 참고 : https://loy124.tistory.com/294

