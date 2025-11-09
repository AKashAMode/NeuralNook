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

    <div className="bg-blue-800 px-8 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md mb-5">
    <h2 className="text-white text-2xl font-black tracking-wide font-sans">
    <span className="font-bold">NEURAL</span>NOOK<span className="text-blue-300">.</span>
  </h2>

  <div className="flex items-center gap-9">
    <p className="text-white font-semibold text-lg">
      {user ? `Hello, ${user.name}!` : `Welcome Guest`}
    </p>
    <Link
      to="/newblog"
      className="hover:scale-110 transition-transform duration-200"
    >
      <TfiWrite color="white" size={26} />
    </Link>
    <div>
      {user ?  (


        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}

          className="flex items-center gap-2 text-red-400 font-semibold hover:text-red-500 transition-colors"
        > <span className="flex border rounded p-1">
          <FiLogOut size={24} />
          <span>LogOut</span>
          </span>
        </button>
      ) : (
        <Link

          to="/login"
          className="flex items-center gap-2 text-white font-semibold hover:text-blue-300 transition-colors"
        >
         <span className="border flex p-1 rounded">
         <span className="text-white">Login</span>
          <MdOutlineLogin size={26} color="white" />
          </span>
        </Link>
)}

    </div>
  </div>
</div>

    )
}

export default Navbar;