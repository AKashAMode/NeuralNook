import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router'
import './index.css'
import Login from './views/Login';
import Signup from './views/Signup';
import AllBlogs  from './views/AllBlogs';
import EditBlog from './views/EditBlog';
import NewBlog from './views/NewBlog';
import ReadBlog from './views/ReadBlog';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>} />
    <Route path='/' element={<AllBlogs/>}/>
    <Route path='/editblog' element={<EditBlog/>}/>
    <Route path='/newblog' element={<NewBlog/>}/>
    <Route path='/blog/:slug' element={<ReadBlog/>}/>
    <Route path='*' element={<h1 className='text-center mt-10'>🫣❗❗❗❗❗❗404 NOT FOUND ❗❗❗❗❗❗🫣</h1>}/>
  </Routes>
  </BrowserRouter>
)
