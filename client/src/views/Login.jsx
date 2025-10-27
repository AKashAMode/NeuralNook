import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router";


function Login(){

    const [user, setUser] = useState({
        email:"",
        password:"",
    });

    const loginUser = async () => {

        const response = await axios.post("http://localhost:8080/login", user);

        if(response?.data?.success){
            localStorage.setItem("loggedUser", JSON.stringify(response.data.user));
            localStorage.setItem("token", response.data.token);
            window.location.href = "/";
        }
    };


    return(
        <div>
         <h1 className="text-4xl text-center my-4">Login</h1>

         <div className=" max-w-[400px] mx-auto border-grey-200 py-10 px-15 rounded-md bg-blue-500">

            <input 
            type="email"
            placeholder="email"
            className="border p-2 rounded w-full mb-4 bg-white"
            value={user.email}
            onChange={(e)=> setUser({...user, email:e.target.value})}
            />

            <input 
            type="password"
            placeholder="password"
            className="border p-2 rounded w-full mb-4 bg-white"
            value={user.password}
            onChange={(e)=> setUser({...user, password:e.target.value})}
            />

            <button 
            className="bg-blue-600 px-5 py-1 rounded text-white block mx-auto cursor-pointer"
            type="button"
            onClick={loginUser}
            >
            Login
            </button>

            <p className="mp-5 text-center p-2 text-white">
                Don't have an account?{" "}
                <Link to={"/signup"} className="text-white cursor-pointer uderline">
                 Signup
                </Link>
            </p>
         </div>
        </div>
    )
}

export default Login;