import Blog from "../models/Blog.js";


const postBlogs  = async (req, res) => {

    const {title, category, content, author} = req.body;


    if(!title || !category ||  !content || !author){
        return res.status(400).json({
            status:false,
            message: "All fields are required",
        });
    }

    const newBlog = new Blog({
        title,
        category,
        content,
        author,
    });

    const savedBlog = await newBlog.save();

    res.status(201).json({
        status:true,
        message: "Blog created successfully",
        blog:savedBlog,
    });

    
}

export {postBlogs};