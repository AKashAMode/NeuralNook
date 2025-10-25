import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';

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

app.get("/request-count", (req, res)=> {
   res.json({viewCount});
});

app.use((req, res, next)=> {
viewCount++;
next();
});


app.get('/api/test1', (req, res)=> {
console.log("Actual Controller test1 called");
   res.json({
     message:"Test1 route reached"
   })
})



app.get("/", (req, res)=> {
 res.json({
   status:true,
   message:" API Is UP !!!!"
 });

});

app.listen(PORT, ()=> {
console.log(`server is running on port ${PORT}`);
connectDB();
});
