import {useState} from "react";
 import { useNavigate } from "react-router-dom";
 import axios from "axios";
function Signup(){
    const[username,setusername]=useState('');
    const[Email,setEmail]=useState('');
    const[password,setpassword]=useState('');
    const navigate = useNavigate();

    const handlesignup= async ()=>{
       try{
          await axios.post('http://localhost:8000/signup',{username,Email,password})
          alert('signup successful! please login')
          useNavigate('/')
       }catch(err){
        alert('signup fail');
       }
    }
    return(
        <>
        <form onSubmit={handlesignup}>
        <div className="h-100% w-100% flex flex-col justify-center items-center  ">
            <div className="w-3/12 h-98 ml-10 mb-10  mt-10 rounded-2xl border-2 border-indigo-500 border-solid leading-10 font-sans text-center bg-orange-100">
               <form action="" className="pb-12 rounded-2xl">
               <h1 className="  font-bold text-xl m-2 bg-orange-400 h-12 text-center rounded-2xl">SIGN UP</h1>
               <br/>
               <input type="text" name="username" placeholder="Username" value={username} onChange={(e)=>setusername(e.target.value)} class=" flex justify-center items-center ml-10 w-4/5 h-12 rounded-2xl border-2 border-black border-solid"></input>
               <br />
               <input type="email" name="Email" placeholder="Email" value={Email}  onChange={(e)=>setEmail(e.target.value)} class=" flex justify-center items-center ml-10 w-4/5 h-12 rounded-2xl border-2 border-black border-solid"></input>
               <br />
              <input type="password" name="password" placeholder="Password" value={password}  onChange={(e)=>setpassword(e.target.value)} className=" flex justify-center items-center ml-10 w-4/5 h-12 rounded-2xl border-2 border-black border-solid"></input>
               <br />
               <button class="bg-sky-500/100  w-4/5 mt-10 rounded-2xl " type="submit">SIGN UP</button>
               </form>
            </div>

         </div>
        </form>
         
        </>
    )
}

export default Signup