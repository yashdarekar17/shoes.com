import Pageicons from "./Pageicon";
import Pageicon1 from "./Pageicon1";
import Pageicon2 from "./Pageicon2";
import Pageicon3 from "./Pageicon3";
import Pageicon4 from "./pageicon4";

function Footer(){
    return(
        <>
           <div className="  bg-black text-white ">
            <div className=" max-w-7xl m-auto  flex gap5 justify-between line leading-8 ">
            <div className="mt-6">
                <h1 className="ml-2 text-xl">SUPPORT</h1>
                <ul className="ml-2" >
                    <li><a href="#">contact us</a></li>                                       
                    <li><a href="#">promotiond & sales</a></li>
                    <li><a href="#">track order</a></li>
                    <li><a href="#">shoe care</a></li>
                    <li><a href="#">tech glossary</a></li>
                    <li><a href="#">intiate return</a></li>
                    <li><a href="#">cookie settings</a></li>
                </ul>
            </div>
            <div className="mt-6 ">
                <ul>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">mty account</a></li>
                    <li><a href="#">exchange & return policy</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">terms & conditions</a></li>
                    <li><a href="#">sneakers</a></li>
                </ul>
            </div>
            <div className="mt-6">
                <h1 className="text-xl">ABOUT</h1>
                <ul>
                    <li><a href="#">company</a></li>
                    <li><a href="#">corporate news</a></li>
                    <li><a href="#">press center</a></li>
                    <li><a href="#">investrers</a></li>
                    <li><a href="#">careers</a></li>
                    <li><a href="#">store</a></li>
                    <li><a href="#">Puma articles</a></li>
                </ul>
            </div>
            <div className="mt-6 ">
                <h1 className="mr-5 text-xl">STAY UP TO DATE</h1>
                <ul className="mr-2 flex">
                    <li className="m-4 "><a href=""><Pageicons /></a></li>
                    <li className="m-4"><a href=""><Pageicon1/></a></li>
                    <li className="m-4"><a href=""><Pageicon2/></a></li>
                    <li className="m-4"><a href=""><Pageicon3/></a></li>
                    <li className="m-4"><a href=""><Pageicon4/></a></li>
                </ul>
            </div>
            </div>
           </div>
           
        </>
    )
}

export default Footer;