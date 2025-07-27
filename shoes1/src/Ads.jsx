import Puma from "./Pumaimg.png"
import crocs from "./Crocs5.png"
import Nike from "./Nike.png"
import Addidas from "./AD.avif"
import { Link } from "react-router-dom"
function Ads(){
    return(
        <>
        <div  className="mt-10 mb-10 ml-10 max-w-[97vw] text-3xl font-bold "><p>
            TAKE LOOK ON  STYLISH SHOES
            </p></div>
          <div className="mt-10 mb-10 w-full relative  flex gap-10  ">
          
                <img src={Addidas} alt="" className="  " />
                <div className="absolute  left-10 bottom-20 ">
                    <p className="font-bold text-4xl bg-white">LOOK ON EXACTING SHOES</p>
                    <Link to={"/Addias"}><button className="bg-white hover:bg-gray-400 text-black font-sm py-2 px-4 rounded mt-2">SHOP NOW</button></Link>
                </div>
          </div>
        </>
    )
}


export default Ads;