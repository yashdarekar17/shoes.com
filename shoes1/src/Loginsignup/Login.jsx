import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import shoes6 from "./Shoes6.png"

function Login() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:8000/login", { Email, password });

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", Email);
      window.dispatchEvent(new Event("loginStatusChanged"));

      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });

      navigate("/Layout");
    } catch (err) {
      console.error(err);
      toast.error("Invalid login credentials!");
    }
  };

  return (
    <div className="w-full h-screen flex bg-white text-black">
      {/* LEFT IMAGE */}
      <div className="w-1/2 h-full hidden md:block">
        <img
          src={shoes6} // ✅ update path if needed
          alt="Shoes.com"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT LOGIN FORM */}
      <form
        onSubmit={handleLogin}
        className="w-full md:w-1/2 h-full flex items-center justify-center p-8"
      >
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6 border-b-2 pb-2">
            SHOES.COM LOGIN
          </h2>

          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border-2 border-black rounded-md focus:outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 px-4 py-2 border-2 border-black rounded-md focus:outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Log In
          </button>

          <p className="mt-4 text-center">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="underline text-black font-medium hover:text-gray-700"
            >
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
