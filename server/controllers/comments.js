import Comment from "../models/Comments.js";
import Blog from "../models/Blog.js";

const postComments = async (req, res) => {
    
    const { content } = req.body;
    const {user} = req;
    const { blogId } = req.params;

    if(!content){
        return res.status(404).json({
            status:false,
            message:"add comment in field"
        });
    }

    try{

    const blog = await Blog.findById(blogId);

    if(!blog){
        return res.status(404).json({
            status:false,
            message:'blog not found'
        });
    }

    const newComments = new Comment({
        content,
        user:user.id,
        blog:blog
    });

    const savedComment = await newComments.save();

    res.status(201).json({
        status:true,
        message:"comment added successfully",
        comment:savedComment
    });

}catch(err){
    res.status(401).json({
        status:false,
        message:"facing error in adding comment",
        error:err.message
    });
}

}

export {postComments};