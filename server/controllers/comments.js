import Comment from "../models/Comments";

const postComments = async (req, res) => {
    
    const { content } = req.body;

    if(!content){
        return res.status(404).json({
            status:false,
            message:"add comment in field"
        });
    }

    const newComment = new Comment({content});

    const saveComment = await newComment.save();

    res.status(201).json({
        status:true,
        message:"comment added successfully",
        comment:saveComment
    });
}