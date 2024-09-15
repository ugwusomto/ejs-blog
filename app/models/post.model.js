const {DataTypes } = require("sequelize");
const {Db} = require("../database/index");


const Post = Db.define("Post", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    // userId: {
    //     type:DataTypes.INTEGER,
    //     allowNull: false,
    // },
    title: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    views: {
        type: DataTypes.INTEGER,
    },
    comments: {
        type: DataTypes.INTEGER,
    },
    readTime: {
        type:DataTypes.STRING,
    },
    shares: {
        type: DataTypes.INTEGER,
    },
    bannerImage: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    tags: {
        type:DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName: "posts",
    timestamps: true,
});


module.exports = Post