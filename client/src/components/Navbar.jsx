import { useEffect, useState } from "react";
import { getCurrentUser } from "../util";
import { Link } from "react-router";

function Navbar(){
const [user, setUser] = useState(null);

useEffect(()=> {
    setUser(getCurrentUser);
}, []);

    return(
        <div className="bg-blue-300 p-5 rounded flex  justify-between ">
           <p>{user ? `Hello ${user.name}! ` : `Welcome Guest`}</p>

           <div>

           {user ? ( <p className="cursor-pointer text-red-500 font-bold" onClick={()=> {
             localStorage.clear();
            window.location.href = '/login';
           }}>
            LogOut
           </p>
          ) :
          ( <Link to="/login">Login</Link> )}
         </div>
         
        </div>
    )
}

export default Navbar;