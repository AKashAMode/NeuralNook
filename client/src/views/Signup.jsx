import React, { useState } from "react";
import {Link} from "react-router"
import axios from "axios";

function Signup(){

   const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
   });

   const signupUser = async () => {

    const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/signup`,user
    );

    console.log(response.data);
   }


    return(
        <>
        <div>
         <h1 className="text-4xl text-center my-4">Signup</h1>

         <div className=" max-w-[400px] mx-auto border-grey-200 py-10 px-15 rounded-md bg-blue-500">
            <input 
            type="name" 
            placeholder="name"
            className="border p-2 rounded w-full mb-4 bg-white"
            value={user.name}
            onChange={(e)=> {
              setUser({...user, name: e.target.value});
            }}
            />

            <input 
            type="email"
            placeholder="email"
            className="border p-2 rounded w-full mb-4 bg-white"
            value={user.email}
            onChange={(e)=> {
              setUser({...user, email:e.target.value})
            }}
            />

            <input 
            type="password"
            placeholder="password"
            className="border p-2 rounded w-full mb-4 bg-white"
            value={user.password}
            onChange={(e)=> {
               setUser({...user, password: e.target.value})
            }}
            />

            <button 
            className="bg-blue-600 px-5 py-1 rounded text-white block mx-auto cursor-pointer"
            type="button"
            onClick={signupUser}
            >
            Signup
            </button>

            <p className="mp-5 text-center p-2 text-white">
                Already have an account?{" "}
                <Link to={"/login"} className="cursor-pointer text-white underline">
                  Login
               </Link>
            </p>
         </div>
        </div>
        </>
    )
}

export default Signup;