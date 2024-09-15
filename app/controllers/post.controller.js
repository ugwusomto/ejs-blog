const {getAllPost} = require("../services/post.service")

const homePageController = async (req, res) => {
    try {
        const blogPosts = await getAllPost() ;
        console.log(blogPosts)
        return res.render("pages/home", { blogPosts });
    } catch (e) {
        return res.render("pages/404", { message: e.message });
    }
}

module.exports = {homePageController}