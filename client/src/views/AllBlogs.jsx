import { useEffect, useState } from "react";
import {getCurrentUser} from './../util';



function AllBlogs(){
    const [user, setUser] = useState(null);

    useEffect(()=> {
        setUser(getCurrentUser);
    }, [])

    return(
        <div>
         <h2>all blogs </h2>
         {user ? `Hello ${user.name}!` : 'welcome Guest!'}
        </div>
        

       )
}

export default AllBlogs;