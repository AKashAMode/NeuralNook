import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080 || process.env.PORT;


app.get('/getdata',(req, res)=> {
 res.json({
    status:true,
    message:"data fetched successfully"
 })
});

app.listen(PORT, ()=> {
console.log(`server is running on port ${PORT}`);
});
