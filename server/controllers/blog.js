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
        slug: `temp-slug-${Date.now()}-${Math.random().toString()}`
    });



    const savedBlog = await newBlog.save();

    savedBlog.slug = `${title.toLowerCase().replace(/ /g, "-")}-${savedBlog._id}`.replace(/[^\w-]+/g, "");

    await savedBlog.save();

    res.status(201).json({
        status:true,
        message: "Blog created successfully",
        blog:savedBlog,
    });

    
};


const getBlogs = async (req, res) => {
    
   const blogs = await Blog.find().populate("author", "_id name email");

   res.status(201).json({
    status:true,
    data:blogs,
    message:"All Blogs Fetched Successfully"
   });
}


const getBlogForSlug = async (req, res) => {

    const { slug } = req.params;

    const blog = await Blog.findOne({slug: slug }).populate(
        "author",
        "_id name email"
    );

    if(!blog){
        return res.status(404).json({
            status:false,
            message:"Blog not found"
        });
    }

    res.status(200).json({
        status:true,
        data:blog,
        message:"blog fetched successfully"
    })

}






export {postBlogs, getBlogs, getBlogForSlug};