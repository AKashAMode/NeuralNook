import MarkdownEditor from "@uiw/react-markdown-editor";
import { useState } from "react";
import { BLOG_CATEGORIES } from './../constants';
import { getCurrentUser } from "../util";
import {ToastContainer, toast} from 'react-toastify';


function NewBlog(){
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(BLOG_CATEGORIES[0]);


    return(
        <div className="container mx-auto p-5">

          <h1>New Blog</h1>

          <input type="text"
          placeholder="Blog Title"
          className="border p-2 w-full my-4 rounded"

          /> 

          <select 
          className="border p-2  my-5 rounded cursor-pointer"

          >
          {BLOG_CATEGORIES.map((categ)=> {
            return(
                <option key={categ} value={categ}>{categ}</option>
            )
          })}
          </select>

          <MarkdownEditor
          value={""}
          onChange={(value)=> {
            console.log("value:", value);
          }}
          height="500px"
          />

          <button className="text-white bg-blue-700 px-5 py-2 mt-5 rounded cursor-pointer">
            Save Blog
            </button>
        </div>
    )
}

export default NewBlog;