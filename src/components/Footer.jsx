
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer()
{
    return(
        <div>
<div className="bg-black mt-28 h-100">
    <h1 className=" text-amber-50 text-4xl font-bold pt-21">BookApp</h1>
    <p className="text-amber-50 pt-5">bkjdsc n skh n .d mndj v m .zd  </p>

 <div className="flex justify-center space-x-6 mb-4 mt-8">
          <a href="#" className="hover:text-blue-500 text-amber-50"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-blue-400 text-amber-50"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-blue-500 text-amber-50"><FaInstagram size={24} /></a>
        </div>

        <input type="email" id="Email" name="Email" placeholder="Enter your Email" className="bg-amber-50 h-9" />
        <button className=" bg-amber-50 cursor-pointer hover:  text-2xl border rounded-lg">SUBSCRIBE </button>
        <div className="mt-10">
            <ul className="text-amber-50 flex  justify-center space-x-10">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
                <li className="cursor-pointer">Services</li>
            </ul>
        </div>

        </div>



        </div>
    )
}
export default Footer;