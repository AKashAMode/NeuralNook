import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import MarkdownEditor from "@uiw/react-markdown-editor";
import Navbar from "../components/Navbar";


function ReadBlog(){
    const { slug } = useParams();
    const [blog, setBlog] = useState({});
    const [comment, setComment] = useState({});

 
    const fetchBlog = async () => {

        const response = await axios.get(`${import.meta.env.VITE_API_URL}/blogs/${slug}`);
        setBlog(response.data.data);
    }


    useEffect(()=> {
        document.documentElement.setAttribute("data-color-mode", "light");
       fetchBlog();
    }, [])

    return(
         <div>

         <Navbar/>
        <div className="container p-4 mx-auto">
        <h1 className="text-2xl font-bold md-4">{blog.title}</h1>
        <p>Published On: {" "}
            {new Date(blog.publishedAt || blog.updatedAt).toLocaleDateString()},
            Read By: {blog.viewCount} people
        </p>
        
        <div className="flex items-center md-4">
            <span>
                <span className="px-2 py-1 rounded-4xl bg-blue-500 text-white">{blog.category}</span>
                </span>

                <div className="flex items-center gap-4 my-2 ml-14">
                    <div className="flex items-center justify-center font-semibold w-[50px] h-[50px] bg-orange-300 text-center text-white rounded-full text-3xl">
                        {blog?.author?.name?.substring(0,1)}
                    </div>

                    <div>
                        <p>{blog?.author?.name}</p>
                        <p>{blog?.author?.email}</p>
                    </div>
                </div>

        </div>
          <MarkdownEditor.Markdown source={blog.content}/>
         </div>
         <div className="py-4 px-4">
            <h5 className="p-1">Comment:</h5>
            <textarea name="textarea" className="p-2 w-[50%] outline-none"></textarea>
            <div>
                <button className="px-2 mx-2  rounded-xl bg-gray-400 cursor-pointer ">cancel</button>
                <button className="px-2 mx-2  rounded-xl bg-blue-400 cursor-pointer">respond</button>
            </div>
         </div>
        </div>
    );
}

export default ReadBlog;