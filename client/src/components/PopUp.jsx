
import { RxCross1 } from "react-icons/rx";


function PopUp(){


    return(
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-50">
         <div className="bg-black/50 border-none rounded p-5 bg-white flex justify-center items-center flex-col relative">
            <h4 className="mt-4">Create a Account to Comment on Post</h4>
            <p className="px-2 m-4 bg-blue-700 text-white cursor-pointer text-center inline border rounded-4xl ">Login</p> 
             <RxCross1 className="cursor-pointer absolute top-2 right-2" size={25}
             /> 
         </div>
        
        </div>
    );
}

export default PopUp;