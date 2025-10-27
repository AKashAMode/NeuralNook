import React from "react";
import {Link} from "react-router"

function Signup(){


    return(
        <>
        <div>
         <h1 className="text-4xl text-center my-4">Signup</h1>

         <div className=" max-w-[400px] mx-auto border-grey-200 py-10 px-15 rounded-md bg-blue-500">
            <input 
            type="name" 
            placeholder="name"
            className="border p-2 rounded w-full mb-4 bg-white"
            />

            <input 
            type="email"
            placeholder="email"
            className="border p-2 rounded w-full mb-4 bg-white"
            />

            <input 
            type="password"
            placeholder="password"
            className="border p-2 rounded w-full mb-4 bg-white"
            />

            <button 
            className="bg-blue-600 px-5 py-1 rounded text-white block mx-auto cursor-pointer"
            type="button"
            >
            Signup
            </button>

            <p className="mp-5 text-center p-2 text-white">
                Already have an account?{" "}
               <span className="text-white cursor-pointer"> Login</span>
            </p>
         </div>
        </div>
        </>
    )
}

export default Signup;