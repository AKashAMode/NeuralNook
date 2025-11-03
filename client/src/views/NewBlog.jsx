import MarkdownEditor from "@uiw/react-markdown-editor";
import { useEffect, useState } from "react";
import { BLOG_CATEGORIES } from './../constants';
import { getCurrentUser } from "../util";
import {ToastContainer, toast} from 'react-toastify';
import axios from 'axios';
import Navbar from './../components/Navbar'

function NewBlog(){
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(BLOG_CATEGORIES[0]);
    const [user, setUser] = useState(null);

    useEffect(()=> {
        document.documentElement.setAttribute("data-color-mode", "light");
        setUser(getCurrentUser);
    }, [])


     const saveBlog = async ()  => {
      try{
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/blogs`, {
        title,
        content,
        category,
        author:user?._id
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if(response?.data?.status){
        toast.success("Blog saved successfully");
        setTimeout(()=> {
          window.location.href= "/";
        }, 2000);
      }
    }catch(err){
      toast.error(err?.response?.data?.message || 'facing error in blog creation')
     }

     };


    return(
        <div className="container mx-auto p-5">
          <Navbar/>
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
          onClick={saveBlog}
          >
            Save Blog
            </button>
            <ToastContainer/>
        </div>
    )
}

export default NewBlog;