import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
    const [username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup =  (e) => {
        e.preventDefault();
       axios.post('http://localhost:8000/signup',{username,Email,password})
       .then(result=> {console.log(result)
         toast.success(" account created successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "light",
          });
         navigate('/login')
       })
       .catch(err=>console.log(err))

    };

    return (
        <div>
            
            <form onSubmit={handleSignup}>
               <div className="h-screen flex flex-col justify-center items-center">
                  <div className="w-3/12 h-auto p-5 rounded-2xl border-2 border-indigo-500 bg-orange-100 text-center">
                  <h1 className="font-bold text-xl bg-orange-400 p-3 rounded-2xl">SIGN IN</h1>
                  <input type="text" placeholder="Username"   className="w-full p-2 mt-4 border-2 border-black rounded-2xl" value={username} onChange={(e) => setUsername(e.target.value)} />
                   <input type="email" placeholder="Email" className="w-full p-2 mt-4 border-2 border-black rounded-2xl" value={Email} onChange={(e) => setEmail(e.target.value)} />
                  <input type="password" placeholder="Password"  className="w-full p-2 mt-4 border-2 border-black rounded-2xl" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <button type="submit" className="bg-sky-500 w-full p-3 mt-4 rounded-2xl text-white font-bold">SIGN IN</button>
                  </div>
              
               </div>
               
            </form>
        </div>
    );
}

export default Signup;
