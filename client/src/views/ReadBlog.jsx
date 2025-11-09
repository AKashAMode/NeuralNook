import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import MarkdownEditor from "@uiw/react-markdown-editor";
import Navbar from "../components/Navbar";
import { RxCross1 } from "react-icons/rx";

function ReadBlog(){
    const { slug } = useParams();
    const [blog, setBlog] = useState({});
   const [comment, setComment] = useState("");
   const [comments, setComments] = useState([]);
   const [showPopUp, setShowPopUp] = useState(false);


   const fetchComments = async (blogId) => {
       const response = await axios.get(`${import.meta.env.VITE_API_URL}/blogs/${blogId}/comments`);
       setComments(response.data.data);
   }
    
 
    const fetchBlog = async () => {

        const response = await axios.get(`${import.meta.env.VITE_API_URL}/blogs/${slug}`);
        setBlog(response.data.data);

        fetchComments(response.data.data._id);
    }

    const addComment = async () => {
        if(!comment){
          setShowPopUp(true);
        }

        const token = localStorage.getItem("token");

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/blogs/${blog._id}/comments`, {content: comment}, 
            {
                headers: {
                    Authorization:`Bearer ${token}`,
                },
            });

            setComment("");

            fetchBlog(blog._id);
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
         <div>
            <div className="py-4 px-4">
            <h5 className="p-1">Comment:</h5>
            <input type="text" className="border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2 w-full mb-4"
            value={comment}
            onChange={(e)=> 
                setComment(e.target.value)}
            ></input>
            <div>
                <button className="px-2 mx-2  rounded-xl bg-gray-400 cursor-pointer "
                onClick={(e)=> setComment("")}
                >cancel</button>
                <button className="px-2 mx-2  rounded-xl bg-blue-400 cursor-pointer"
                onClick={addComment}
                >send</button>
            </div>
         </div>

         <div className="p-4">
            <h2 className="p-4">Comments:</h2>
            {comments.length == 0 && <p>No comment yet</p>}

              {comments.map((cmt)=> (
                  
                <div key={cmt._id} className="flex items-start gap-3 mb-4 border-b pb-2">
                 
                 <div className="flex items-center justify-center font-semibold w-[40px] h-[40px] bg-orange-300 text-center text-white rounded-full text-xl">
                   {cmt?.user?.name?.substring(0,1)}
                 </div>
                 <div>
                    <p className="font-semibold">{cmt?.user?.name}</p>
                    <p>{cmt.content}</p>
                    <p className="text-sm text-gray-500">{new Date(cmt.createdAt).toLocaleString()}</p>
                 </div>
                </div>


              ))}
                
    
           </div>
           {showPopUp && (
              <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-50">
                     <div className="bg-black/50 border-none rounded p-5 bg-white flex justify-center items-center flex-col relative">
                        <h4 className="mt-4">Create a Account to Comment on Post</h4>
                        <p className="px-2 m-4 bg-blue-700 text-white cursor-pointer text-center inline border rounded-4xl ">Login</p> 
                         <RxCross1 className="cursor-pointer absolute top-2 right-2" size={25} 
                         onClick={setShowPopUp(false)}
                         /> 
                </div>
            </div>
           )}

         </div>
        </div>
    );
}

export default ReadBlog;