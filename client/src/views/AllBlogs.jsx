import { useEffect, useState } from "react";
import {getCurrentUser} from './../util';
import axios from 'axios';
import BlogCard from './../components/BlogCard'
import Navbar from './../components/Navbar';


function AllBlogs(){
    
    const [user, setUser] = useState(null);
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {

        const response = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`);

        setBlogs(response.data.data);
    }

    useEffect(()=> {
        setUser(getCurrentUser);
        fetchBlogs();
    }, [])

    return(
        <div>
         <Navbar/>
         <div>
            {blogs.map((blog)=> {
                const {_id, title, content, author, publishedAt, createdAt, updatedAt, status, category, slug, viewCount} = blog;
                return <BlogCard 
                key={_id} 
                title={title} 
                content={content}
                author={author}
                createdAt={createdAt}
                updatedAt={updatedAt}
                publishedAt={publishedAt}
                status={status}
                category={category}
                slug={slug}
                viewCount={viewCount}
                />
            })}
         </div>
        </div>
        

       )
}

export default AllBlogs;