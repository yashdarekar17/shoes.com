import Virat1 from "./Virat1.jpg"
function Shoes4(){
    return(
        <>
        <div className="relative flex justify-center ">
            <img src={Virat1} alt="" className=" h-full" />
            <div className="absolute top-1/3 left-5 ml-5  leading-10 text-white">
            <p className="mx-2.5 text-5xl font-medium ">FANTY x PVMA</p>
             <p className="mx-2.5 text-xl leading-10">THE AVANTI DROPS OCT 17</p>
             <div className="flex">
             <span><button className="bg-white hover:bg-slate-800 text-black font-sm py-2 px-4 rounded mt-2 mx-2.5 flex justify-center items-center">SIGN UP NOW</button></span>
             <span><button className="bg-white hover:bg-slate-800 text-black font-sm py-2 px-4 rounded mt-2 mx-2.5 flex justify-center items-cente">EXPLORE COLLECTION</button></span>
             </div>
            </div>
             
             
        </div>
        <div className="w-100% h-4 bg-black mt-0 ">

             </div>
        
        </>
    )
}

export default Shoes4