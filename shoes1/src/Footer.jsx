import { FaYoutube, FaInstagram, FaPinterest, FaXTwitter, FaFacebook } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white text-sm pt-14 px-6 pb-10">
      {/* Top Sections */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10">
        {/* SUPPORT */}
        <div>
          <h2 className="text-base font-semibold mb-4">SUPPORT</h2>
          <ul className="space-y-2">
            <li>Contact us</li>
            <li>Promotions & Sale</li>
            <li>Track Order</li>
            <li>Shoe Care</li>
            <li>Tech Glossary</li>
            <li>Initiate Return / Exchange</li>
            <li>Sneakers</li>
            <li>Nitro</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* POLICIES */}
        <div>
          <h2 className="text-base font-semibold mb-4">POLICIES</h2>
          <ul className="space-y-2">
            <li>FAQs</li>
            <li>My Account</li>
            <li>Exchange & Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Shoes</li>
            <li>Running Shoes</li>
            <li>End of Season Sale</li>
            <li>Cookie Settings</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h2 className="text-base font-semibold mb-4">ABOUT</h2>
          <ul className="space-y-2">
            <li>GO WILD</li>
            <li>Company</li>
            <li>Corporate News</li>
            <li>Press Center</li>
            <li>Investors</li>
            <li>Sustainability</li>
            <li>Careers</li>
            <li>Store Locator</li>
            <li>PUMA Articles</li>
          </ul>
        </div>

        {/* SOCIAL + EXPLORE */}
        <div>
          <h2 className="text-base font-semibold mb-4">STAY UP TO DATE</h2>
          <div className="flex space-x-4 text-lg mb-6">
            <FaYoutube />
            <FaXTwitter />
            <FaPinterest />
            <FaInstagram />
            <FaFacebook />
          </div>

          <h2 className="text-base font-semibold mb-2">EXPLORE</h2>
          <div className="flex gap-3">
            <button className="border px-4 py-2 rounded-md font-semibold">APP</button>
            <button className="border px-4 py-2 rounded-md font-semibold">TRAC</button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-8" />

      {/* Bottom - Payment + Country + Copy */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        {/* Payment Icons */}
       <div className="flex gap-4 items-center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" className="h-6" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-6" />
  {/* <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/UPI-Logo-vector.svg" alt="UPI" className="h-6" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/RuPay_Logo.png" alt="RuPay" className="h-6" /> */}
</div>


        {/* Country Button */}
        

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © Shoes.com, 2025. ALL RIGHTS RESERVED. <a href="#" className="underline">IMPRINT AND LEGAL DATA</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
