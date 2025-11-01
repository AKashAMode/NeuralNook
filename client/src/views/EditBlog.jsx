import MarkdownEditor from "@uiw/react-markdown-editor";
import { useEffect, useState } from "react";
import { BLOG_CATEGORIES } from './../constants';
import { getCurrentUser } from "../util";
import {ToastContainer, toast} from 'react-toastify';
import axios from 'axios';
import { useParams } from "react-router";


function EditBlog(){
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(BLOG_CATEGORIES[0]);
    const [user, setUser] = useState(null);
    const { slug } = useParams();

    const loadBlog =  async () => {
         if(!slug) return;
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/blogs/${slug}`);

        const blogData = response?.data?.data;

        setTitle(blogData?.title);
        setCategory(blogData?.category);
        setContent(blogData?.content); 
          
    };

    useEffect(()=> {
        document.documentElement.setAttribute("data-color-mode", "light");
        setUser(getCurrentUser);
        loadBlog();
    }, []);


     const updateBlog = async ()  => {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/blogs/${slug}`, {
        title,
        content,
        category,
      });

      if(response?.data?.status){
        toast.success("Blog saved successfully");
        setTimeout(()=> {
          window.location.href= "/";
        }, 2000);
      }
     };

     const publishBlog = async () => {
      const response = await axios.patch(`${import.meta.env.VITE_API_URL}/blogs/${slug}/publish`);

      if(response?.data?.status){
        toast.success("Blog published Successfully");
        setTimeout(()=> {
          window.location.href = "/";
        }, 2000);
      }
     };


    return(
        <div className="container mx-auto p-5">

          <h1>New Blog</h1>

          <input type="text"
          placeholder="Blog Title"
          className="border p-2 w-full my-4 rounded"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          /> 

          <select 
          className="border p-2  my-5 rounded cursor-pointer"
          value={category}
          onChange={(e)=> setCategory(e.target.value)}
          >
          {BLOG_CATEGORIES.map((categ)=> {
            return(
                <option key={categ} value={categ}>{categ}</option>
            )
          })}
          </select>

          <MarkdownEditor
          value={content}
          onChange={(value)=> {
            setContent(value);
          }}
          height="500px"
          />

          <button className="text-white bg-blue-700 px-5 py-2 mt-5 rounded cursor-pointer"
          onClick={updateBlog}
          >
            Update Blog
            </button>

            <button className="text-white bg-blue-700 px-5 py-2 mt-5 rounded cursor-pointer"
            onClick={publishBlog}
          >
             Publish
            </button>
            <ToastContainer/>
        </div>
    )
}

export default EditBlog;