import { useEffect, useState } from "react";
import {getCurrentUser} from './../util';



function AllBlogs(){
    const [user, setUser] = useState(null);

    useEffect(()=> {
        setUser(getCurrentUser);
    }, [])

    return(
        <div>all blog section</div>

       )
}

export default AllBlogs;