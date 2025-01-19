import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Header from "./Header"
import Shoes2 from "./Shoes2"
import Shoes3 from "./Shoes3"
import Shoes4 from "./Shoes4"
import Shoes5 from "./Shoes5"
import Footer from "./Footer"
import Shoes from "./Shoes"
import Layout from "./Layout";
import Shopping from "./Shopping";
import Nikeshoes from "./Navbar1/Nikeshoe";
import Addiasshoe from "./Navbar1/Addiasshoe";
import Brands from "./Navbar1/Brands";
import Cart1 from "./Navbar1/Cart1";
import Pumashoes from "./Navbar1/Pumashoes";
import Crocs from "./Navbar1/Crocs";
import CartTab from "./Navbar1/CartTab";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Login from "./Loginsignup/Login";
import Signup from "./Loginsignup/Signup";
import { useState } from "react";
import { useEffect } from "react";



function App() {
  const isLoggedIn = !!localStorage.getItem('token');

  const [data , setdata]= useState()

  useEffect(()=>{
    axios.get('http://localhost:8000/login')
    .then((response)=>{
      setdata(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  })


  return (
    <>
     
    <BrowserRouter>
    <Routes>

     
        
    {/* <Route path="/" element={<Navigate to="/login" />} /> */}
    <Route>
    <Route path="/" element={isLoggedIn ? <Navigate to="/Layout" /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Layout" element={isLoggedIn ? <Layout /> : <Navigate to="/" />} />
    </Route>
       
  
     <Route path="/Layout" element={<Layout/>}>
     <Route index element={<Header/>}/>
     <Route index element={<Shoes/>}/>
     <Route index element={<Shoes2/>}/>
     <Route index element={<Shoes3/>}/>
     <Route index element={<Shoes4/>}/>
     <Route index element={<Shoes5/>}/>
     <Route index element={<Footer/>}/>
     </Route>
     
   </Routes>
   <Routes>
   <Route path="/Shopping" element={<Shopping/>}></Route>
   </Routes>
   <Routes>
   <Route path="/Cart1" element={<Cart1/>}></Route>
   </Routes>
   <Routes>
   <Route path="/Brands" element={<Brands/>}></Route>
   </Routes>

   
    <Routes>
    <Route path="/Nikeshoes" element={<Nikeshoes/>}>
     <Route index element={<Footer/>}/></Route>
    </Routes>
    <Routes>
    <Route path="/Addias" element={<Addiasshoe/>}>
    <Route index element={<Footer/>}/></Route>
    </Routes>
    <Routes>
    <Route path="/Puma" element={<Pumashoes/>}>
    <Route index element={<Footer/>}/></Route>
    </Routes>

    <Routes>
    <Route path="/Crocs" element={<Crocs/>}>
    <Route index element={<Footer/>}/></Route>
    
   
   </Routes>
   
   
   

    </BrowserRouter>
    
    </>
    
  )
}

export default App
