const User = require("../models/user.model")

const createUser = async (userData) => {
  if(typeof userData != 'object'){
    return null;
  }
  const newUser = await User.create(userData);
  return newUser;

}



module.exports = {createUser}