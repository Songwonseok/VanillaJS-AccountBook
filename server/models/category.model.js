const Sequelize = require("sequelize");

module.exports = class Category extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                name: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                },
            },
            {
                sequelize, 
                timestamps: false, 
                underscored: false, 
                modelName: "Category",
                tableName: "category", 
                paranoid: false 
            }
        );
    }
    static associate(db) {
        db.Category.belongsTo(db.Classification, { foreignKey: "classification_id", targetKey: "id" });
    }
};
// 참고 : https://loy124.tistory.com/294

