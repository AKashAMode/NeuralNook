import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";


function ReadBlog(){
    const { slug } = useParams();
    const [blog, setBlog] = useState({});

 
    const fetchBlog = async () => {

        const response = await axios.get(`${import.meta.env.VITE_API_URL}/blogs/${slug}`);
        setBlog(response.data.data);
    }


    useEffect(()=> {
       fetchBlog();
    }, [])

    return(

        <div>
        <h1>read blog</h1>
        <h1>{blog.title}</h1>
        </div>
    )
}

export default ReadBlog;