import User from './../models/User.js';

const postSign = (req, res) => {

    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            status:false,
            message:"name, email and password are required",
        });
    }

}

