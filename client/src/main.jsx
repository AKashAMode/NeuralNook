import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router'
import './index.css'
import Login from './views/Login';
import Signup from './views/Signup'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>} />
  </Routes>
  </BrowserRouter>
)
