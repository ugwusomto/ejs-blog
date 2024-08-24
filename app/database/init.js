const User = require("../models/user.model");
const Post = require("../models/post.model")

const InitializeDB = async () => {


    await Promise.all([
        User.sync({alter:true}),
        Post.sync({alter:true}),
    ])
}

 module.exports  = {InitializeDB}