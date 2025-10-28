import Blog from "../models/Blog";


const postBlogs  = async (req, res) => {

    const {title, category, content, author} = req.body;
    const {user} = req;


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
        author:user?.id
    });

    const savedBlog = await newBlog.save();

    await savedBlog.save();

    res.status(201).json({
        status:true,
        message: "Blog created successfully",
        blog:savedBlog,
    });

    
}

export {postBlogs};