import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

import {postLogin, postSign } from "./controllers/user.js";
import Blog from "./models/Blog.js";
import {postBlogs, getBlogs, getBlogForSlug, patchPublishBlog, updateBlogs} from "./controllers/blog.js";
import {postComments, getComments} from "./controllers/comments.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080 || process.env.PORT;

let viewCount = 0;

//database connection
const connectDB = async () => {

   try{

      const conn = await mongoose.connect(process.env.MONGODB_URL);
      if(conn){
         console.log('MongoDB Connected');
      }
   }catch(error){
     console.log("MongoDB connection error:", error)
   }

}


const jwtChecks = (req, res, next) => {
  req.user = null;

  const { authorization } = req.headers;

  if(!authorization){
   return res.status(400).json({
      status:false,
      message:"authorization tokens are missing",
   });
  }

  try{
   const token = authorization.split(" ")[1];
   const decoded = jwt.verify(token, process.env.JWT_SECRET);
   req.user = decoded;
   next();
  }catch(err){
   return res.status(401).json({message: "Invalid Jwt Token"});
  }
}


const increaseViewCount = async (req, res, next) => {

   const {slug} = req.params;
  
   try{
      const blog = await Blog.findOne({slug});
      if(blog){
         blog.viewCount += 1;
         await blog.save();
      }

   }catch(err){
      console.log("error increasing view count", err);
   }
   next();


}



app.get("/", (req, res)=> {
 res.json({
   status:true,
   message:" API Is UP !!!!"
 });

});




app.post("/signup", postSign);
app.post("/login", postLogin);
app.post("/blogs",jwtChecks, postBlogs);
app.get("/blogs", getBlogs);
app.get("/blogs/:slug", increaseViewCount, getBlogForSlug);
app.patch("/blogs/:slug/publish",jwtChecks, patchPublishBlog);
app.put("/blogs/:slug",jwtChecks, updateBlogs);
app.post("/blogs/:blogId/comments", jwtChecks , postComments);
app.get("/blogs/:blogId/comments", getComments)


app.listen(PORT, ()=> {
console.log(`server is running on port ${PORT}`);
connectDB();

});
