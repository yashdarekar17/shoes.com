import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // ✅ Prevents page refresh
    axios.post('http://localhost:8000/login',{Email,password})
    .then(result=> {console.log(result)
      toast.success("login successfully!", {
         position: "top-right",
         autoClose: 3000,
         theme: "light",
       });
      navigate("/Layout");
    })
    .catch(err=>console.log(err));
    
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="w-3/12 h-auto p-5 rounded-2xl border-2 border-indigo-500 bg-orange-100 text-center">
            <h1 className="font-bold text-xl bg-orange-400 p-3 rounded-2xl">LOG IN</h1>
            <input 
              type="Email" name="Email" placeholder="Email" 
              value={Email} onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-4 border-2 border-black rounded-2xl"
            />
            <input 
              type="password" name="password" placeholder="Password" 
              value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-4 border-2 border-black rounded-2xl"
            />
            <button type="submit" className="bg-sky-500 w-full p-3 mt-4 rounded-2xl text-white font-bold">LOG IN</button> 
            <a href="/signup"><p className="mt-4 text-blue-500">OR, SIGN UP</p></a>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
