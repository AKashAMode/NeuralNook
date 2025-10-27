import React from "react";
import {Link} from "react-router"

function Signup(){


    return(
        <>
        <div>
         <h1 className="text-4xl my-4">Signup</h1>

         <div className="border-2 border-grey-200 py-10 px-15 rounded-md">
            <input 
            type="name" 
            placeholder="name"
            className="border p-2 rounded w-full"
            />

            <input 
            type="email"
            placeholder="email"
            className="border p-2 rounded w-full"
            />

            <input 
            type="password"
            placeholder="password"
            className="border p-2 rounded w-full"
            />

            <button 
            className="bg-blue-800"
            type="button"
            >
            Signup
            </button>

            <p className="mp-5">
                Already have an account?{" "}
               <span>Login</span>
            </p>
         </div>
        </div>
        </>
    )
}

export default Signup;