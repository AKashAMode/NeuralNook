import { useEffect, useState } from "react";
import { getCurrentUser } from "../util";
import { Link } from "react-router";
import { MdOutlineLogin } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { TfiWrite } from "react-icons/tfi";


function Navbar(){
const [user, setUser] = useState(null);

useEffect(()=> {
    setUser(getCurrentUser);
}, []);

    return(
        <div className="bg-blue-800 p-5 flex  justify-between ">
            <h2 className=" text-white">NEURALNOOK..</h2>
           <p className="text-white font-bold text-xl">{user ? `Hello ${user.name}! ` : `Welcome Guest`}</p>
           <p className="cursor-pointer">
            <Link to="/newblog">
            <TfiWrite color="white" size={30}/>
            </Link>
            </p>
           <div>

           {user ? ( <p className="cursor-pointer text-red-500 font-bold" onClick={()=> {
             localStorage.clear();
            window.location.href = '/login';
           }}>
            <FiLogOut color="red" size={30}/>
           </p>
          ) :
          ( <Link to="/login">
            <MdOutlineLogin size={30} color="white"/>
            </Link> )}
         </div>
         
        </div>
    )
}

export default Navbar;