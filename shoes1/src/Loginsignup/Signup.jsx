import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import shoes6 from "./Shoes6.png";

function Signup() {
  const [username, setUsername] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    axios.post('https://shoes-com-npq0.onrender.com/signup', {
      username,
      mobileno,
      Email,
      password
    })
    .then(() => {
      toast.success("Account created successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });
      navigate('/login');
    })
    .catch((err) => {
      console.error(err);
      toast.error("Signup failed!");
    });
  };

  return (
    <div className="flex w-screen h-screen font-sans">
      {/* Left image */}
      <div className="w-1/2 h-full">
        <img
          src={shoes6}
          alt="Shoes Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right form */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <form
          onSubmit={handleSignup}
          className="w-[400px] bg-white p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-center border-b pb-3">
            SHOES.COM SIGNUP
          </h2>

          <input
            type="text"
            placeholder="Username (optional)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-4 border border-black rounded-md"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobileno}
            onChange={(e) => setMobileno(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-black rounded-md"
          />

          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-black rounded-md"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-black rounded-md"
          />

          <button
            type="submit"
            className="w-full bg-black text-white p-3 font-semibold rounded-md hover:bg-gray-800 transition"
          >
            Sign Up
          </button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="underline hover:text-gray-700">
              Log In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
