const Post = require("../models/post.model")

const createPost = async (postData) => {
  if(typeof postData != 'object'){
    return null;
  }
  console.log(postData)
  const newPost = await Post.create(postData);
  return newPost;

}


const getAllPost = async () => {
  const allPost = await Post.findAll({order:["createdAt","desc"]});
  return allPost
}


module.exports = {createPost,getAllPost}