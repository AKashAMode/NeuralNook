import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080 || process.env.PORT;

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
