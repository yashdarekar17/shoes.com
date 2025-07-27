import Wnike from "./Wnike.png";
import Mnike from "./Mnike.png";
import Vnike from "./Vnike.png";
import { Link } from "react-router-dom";
function Shoes5() {
  return (
    <>
    <div className="max-w-[97vw] mt-10 mb-10 ml-10 text-3xl font-bold">STEP INTO STYLE</div>
     <div className="relative max-w-[97vw] m-auto">
     <div className="flex justify-between mb-5">
        <img
          src={Mnike}
          alt=""
          className="w-1/4 mt-5 ml-2 rounded-xl"
        />

        <img
          src={Wnike}
          alt=""
          className="w-1/4 mt-5 rounded-xl  "
        />

        <img
          src={Vnike}
          alt=""
          className="w-1/4 mt-5 mr-2  rounded-xl  "
        />
      </div>
      <div
        className=" flex justify-between"
      >
        
        <span className="">
          <Link to="/Addias" ><button className="bg-white hover:bg-gray-400 text-black font-sm py-2 px-4 rounded mt-2 mx-2.5  absolute top-3/4 left-9">
            SHOP NOW
          </button></Link>
        </span>
        <span className=" ">
          <Link to="/Nikeshoes">
          <button className="bg-white hover:bg-gray-400 text-black font-sm py-2 px-4 rounded mt-2 mx-2.5 absolute top-3/4 ">
            SHOP NOW
          </button>
          </Link>
        </span>
        <span className="  ">
          <Link to="/puma">
          <button className="bg-white hover:bg-gray-400 text-black font-sm py-2 px-4 rounded mt-2 mx-2.5 absolute right-5 top-3/4">
            SHOP NOW
          </button>
          </Link>
        </span>
      </div>

      {/* <div className="w-100% h-4 bg-black mt-5 "> </div> */}
     </div>
      
    </>
  );
}

export default Shoes5;
