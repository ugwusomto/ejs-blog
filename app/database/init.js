const User = require("../models/user.model");
const Post = require("../models/post.model")

const InitializeDB = async () => {

    User.hasMany(Post,{});
    Post.belongsTo(User);


    //category-post-relationship

    await Promise.all([
        User.sync({alter:false}),
        Post.sync({alter:false}),
    ])
}

 module.exports  = {InitializeDB}