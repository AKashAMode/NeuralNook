import User from './../models/User.js';
import jwt from 'jsonwebtoken';


const postSign = async (req, res) => {

    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            status:false,
            message:"name, email and password are required",
        });
    }

    const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+4/;
    const nameValidationRegex = /^[a-zA-Z ]+$/;
    const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%?&]{8,}$/;

    if(nameValidationRegex.test(name) === false){
        return res.status(400).json({
            status:false,
            message:"Name should contain only alphabets and spaces",
        });
    }

    if(emailValidationRegex.test(email) == false){
        return res.status(400).json({
            status:false,
            message:"Email is not valid",
        });
    }

    if(passwordValidationRegex.test(password) == false){
        return res.status(400).json({
            status:false,
            message:"Password be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number and one special character",
        });
    }

    const existingUser = await User.findOne({email});
     if(existingUser){
        res.status(400).json({
            status:false,
            message:` User with email ${email} already exists`,
        });
     }

     




}


const postLogin = async (req, res) => {
  const {email, password}  = req.body;

  if(!email || !password){
    return res.status(400).json({
        status:false,
        message: "email and password are required",
    });
  }


}


export {postSign, postLogin};