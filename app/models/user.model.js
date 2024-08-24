const {DataTypes} = require("sequelize");
const {Db} = require("../database/index");

const User = Db.define("User",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fullname:{
      type:DataTypes.STRING,
      allowNull:false,   
    },
    bio:{
        type:DataTypes.TEXT,
        allowNull:false,   
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true   
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false, 
    }
},{
   tableName: 'users',
   timestamps:true
});
  

module.exports = User;