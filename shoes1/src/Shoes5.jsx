import Wnike from "./Wnike.png";
import Mnike from "./Mnike.png";
import Vnike from "./Vnike.png";
function Shoes5() {
  return (
    <>
     <div className="relative">
     <div className="flex justify-between mb-5">
        <img
          src={Mnike}
          alt=""
          className="w-1/4 mt-5 ml-2 rounded-xl hover:scale-110"
        />

        <img
          src={Wnike}
          alt=""
          className="w-1/4 mt-5 rounded-xl  hover:scale-110"
        />

        <img
          src={Vnike}
          alt=""
          className="w-1/4 mt-5 mr-2  rounded-xl xl hover:scale-110"
        />
      </div>
      <div
        className=" flex justify-between"
      >
        
        <span className="">
          <button className="bg-white hover:bg-slate-800 text-black font-sm py-2 px-4 rounded mt-2 mx-2.5  absolute top-3/4 left-9">
            SHOP NOW
          </button>
        </span>
        <span className=" ">
          <button className="bg-white hover:bg-slate-800 text-black font-sm py-2 px-4 rounded mt-2 mx-2.5 absolute top-3/4 ">
            SHOP NOW
          </button>
        </span>
        <span className="  ">
          <button className="bg-white hover:bg-slate-800 text-black font-sm py-2 px-4 rounded mt-2 mx-2.5 absolute right-5 top-3/4">
            SHOP NOW
          </button>
        </span>
      </div>

      <div className="w-100% h-4 bg-black mt-5 "> </div>
     </div>
      
    </>
  );
}

export default Shoes5;
