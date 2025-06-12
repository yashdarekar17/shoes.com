import { Link, useNavigate } from "react-router-dom";
import jorden from "./jorden.png";
import P4 from "./crocs4.webp";
import { useEffect, useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const toggleLogoutBox = () => {
    setShowLogout((prev) => !prev);
  };

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setShowLogout(false);
    window.dispatchEvent(new Event("loginStatusChanged"));
    navigate("/login");
  };

  useEffect(() => {
    const updateLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    updateLoginStatus();
    window.addEventListener("loginStatusChanged", updateLoginStatus);

    return () => {
      window.removeEventListener("loginStatusChanged", updateLoginStatus);
    };
  }, []);

  const userInitial = localStorage.getItem("userEmail")
    ? localStorage.getItem("userEmail")[0].toUpperCase()
    : "U";

  return (
    <div className="h-3/5 relative mt-0">
      <div className="w-full relative">
        <img src={P4} alt="Banner" className="w-screen max-h-svh mt-0" />
      </div>
      <div className="mt-0">
        <div className="absolute top-0 right-0 left-0 mt-0">
          <div className="flex justify-between bg-white shadow-lg absolute top-0 right-0 left-0">
            {/* Brand */}
            <div className="flex justify-center items-center">
              <img src={jorden} className="mt-2 ml-6 w-20" alt="Logo" />
              <h2 className="ml-2 text-4xl">Shoes.com</h2>
            </div>

            {/* Navigation */}
            <ul className="flex items-center mt-6 gap-7 text-xl">
              <li className="hover:text-gray-500">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-gray-500">
                <Link to="/Shopping">Shopping</Link>
              </li>
              <li className="hover:text-gray-500">
                <Link to="/Brands">Brands</Link>
              </li>
              <li className="hover:text-gray-500">
                <Link to="/Cart1">Cart</Link>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">Your Delivery</a>
              </li>
            </ul>

            {/* Login/Profile */}
            <div className="flex items-center mr-6 mt-6 relative">
              {!isLoggedIn ? (
                <Link to="/login">
                  <button className="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">
                    LOGIN
                  </button>
                </Link>
              ) : (
                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold cursor-pointer"
                    onClick={toggleLogoutBox}
                  >
                    {userInitial}
                  </div>
                  {showLogout && (
                    <div className="absolute top-12 right-0 bg-black text-white p-2 rounded-xl shadow-md z-10">
                      <button
                        className="text-black bg-white px-3 py-1 rounded hover:bg-orange-200 font-semibold"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-4 bg-black"></div>
    </div>
  );
}

export default Header;
