import Puma from "./Pumaimg.png"
import crocs from "./Crocs5.png"
import Nike from "./Nike.png"
import Addidas from "./Addidas2.png"
import { Link } from "react-router-dom"

function Ad2(){
    return(
        <>
        <div className="text-center mt-20 mb-20">
            <p className="text-4xl font-bold">BUILT TO STAND OUT</p>
            <p className="text-4xl font-bold">SHOP OUR NEW COLLECTIONS</p>
        </div>
        <div className="flex justify-between gap-4 flex-wrap max-w-[97vw] m-auto mt-10 mb-10">
  {/* Puma */}
  <Link to={"/puma"}>
  <div className="relative w-[300px] h-[400px]">
    <img src={Puma} alt="Puma" className="w-full h-full object-cover" />
    <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-xl font-semibold">
      RUNNING SPOT
    </p>
  </div>
  </Link>
  

  {/* Adidas */}
  <Link to={"/Addias"}>
  <div className="relative w-[300px] h-[400px]">
    <img src={Addidas} alt="Adidas" className="w-full h-full object-cover" />
    <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-xl font-semibold">
      CYCLING AREA
    </p>
  </div>
  </Link>
  

  {/* Nike */}
  <Link to={"/Nikeshoes"}>
  <div className="relative w-[300px] h-[400px]">
    <img src={Nike} alt="Nike" className="w-full h-full object-cover" />
    <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-xl text-center font-semibold">
      SPORTS AREA
    </p>
  </div>
  </Link>
  

  {/* Crocs */}
  <Link to={"/Crocs"}>
  <div className="relative w-[300px] h-[400px]">
    <img src={crocs} alt="Crocs" className="w-full h-full object-cover" />
    <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-xl font-semibold">
      KIDS SPOT
    </p>
  </div>
  </Link>
  
</div>

        </>
    )
}

export default Ad2;