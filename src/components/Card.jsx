import doctor from './download.jpeg'; 
import { FaHeart  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import React from 'react';

import img from "./team1.jpg";   

function Card()
{
    return(
   <div>
    <div className='row'>
      <div className=' col-lg-3 col-md-3 col-sm-3'>

      
      
      
        <div className=" overflow-auto h-60 w-60 border border-black rounded-lg mt-20 ">
          <h1 className=" text-black text-2xl font-bold">Categories</h1>
          <ul className=" space-y-3 p-3  float-left ">
            <li>All <span className=" float-right pl-20 ">(99)</span></li>
            <li>Barber <span className="float-right pl-20 ">(99)</span></li>
            <li>Gym <span className=" float-right pl-20">(99)</span></li>
            <li>Cooking <span className="float-right pl-20">(99)</span></li>
            <li>Development <span className=" float-right pl-20 ">(99)</span></li>
            <li>Finance  <span className="float-right  pl-20">(99)</span></li>
            <li>Health  <span className=" float-right pl-20">(99)</span></li>
          </ul>
        </div>
    
    
        <div className=" background-white-50 border border-black rounded-lg mt-10 p-4 w-60 h-60 overflow-auto ">
          <h1 className="text-2xl font-bold"> categories </h1>
          <label htmlFor="looking for"> I am looking for</label>
          <br />
          <select name="select" id=" select" className=" border-whte border rounded-sm   w-47 h-10  ">
            <option value="option-1">Barder Services</option>
            <option value="option-2" > Doctor Services</option>
            <option value="option-2"> Cleaner Services</option>
          </select>
          <br />
          <div className=" flex -space-x-44 " >
            <div>
          <label htmlFor="provider-level"  className=" mr-40"> Provider level</label>
          <br />
          <select name="provider" id="provider" className=" border-whte border rounded-sm   w-24 h-6  mr-40">
            <option value="expert"> Expert</option>                                   
            <option value="average"> Average</option>
            <option value="medium">Medium</option>
          </select>
          </div>
         
         <div className=" ml-10 ">
          <label htmlFor="duration" className="  "> Duration</label>
          <br />
          <select name="Duration" id="Duration"  className=" border-whte border rounded-sm   w-24 h-6 ">
        <option value="1-hour">1 Hour</option>
        <option value="2-hour">2-hour</option>
        <option value="3-hour">3-hour</option>
    
          </select>
          </div>
    
          <br />
          <div className=" mt-15 -ml-10">
          <label htmlFor="Near">Your Nearest Location </label>
          <br />
          <select name="location" id="location" className=" border-whte border rounded-sm   w-47 h-10  ">
            <option value="new-york"> New York, USA</option>
            <option value="san-francisco"> San Francisco, USA</option>
            <option value="los-angeles"> Los Angeles, USA</option>
          </select>
          </div>
    
          <div className=" mt-30 -ml-3">
            <label htmlFor="Booking-date"> Booking Date</label>
            <br />
            <input type="date"  className=" border-whte border rounded-sm   w-47 h-10  "/>
            <br />
            <label htmlFor="Booking-time"> Booking Time</label>
            <br />
            <input type="time" className=" border-whte border rounded-sm   w-47 h-10  "/>
          </div>
          
    
          
          </div>
                    
          
        </div>
        </div>
        
           <div className='col-lg-3 col-md-3 col-sm-3 '>
        
    
          <div className=" border-amber-200 border rounded-lg mt-25  shadow-black shadow-sm shadow-black/50   ">
            <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
            <div> 
              <p className="flex gap-40 mt-5 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
     </div>
     <div className=" mt-3">
      <h1 className=" text-2xl font-semibold   "> City Tower Barber Shop</h1>
    
     </div>
     <div className=" flex gap-7 mt-6">
      <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
      <div>
        <p> BY <span > <a href="#">  jhon de  </a></span></p>
        </div>
     </div>
    
     <div className=" flex gap-2">
      <p><FaLocationDot className=" mt-5 text-2xl text-red-700"/> </p>
      <p className=" mt-4 "> City tower road:2485, usa</p>
    </div>
    <div className=" flex gap-10 mt-5 mb-5">
      <p> $350.00 <span> <del> $400 </del></span></p>
      <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white border rounded-sm cursor-pointer "> Book Now</button>
    </div>
           </div>
           </div>
    
    
         
         
         
         <div className=' col-lg-3 col-md-3 col-sm-3 '>
           <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                    <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
            <div> 
              <p className="flex gap-40 mt-5 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
    </div>
    <div className=" mt-3">
      <h1 className=" text-2xl font-semibold   "> City Tower Barber Shop</h1>
    
     </div>
    
     <div className=" flex gap-7 mt-6">
      <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
      <div>
        <p> BY <span > <a href="#">  jhon de  </a></span></p>
        </div>
     </div>
     <div className=" flex gap-2">
      <p><FaLocationDot className=" mt-5 text-2xl text-red-700"/> </p>
      <p className=" mt-4 "> City tower road:2485, usa</p>
    </div>
    <div className=" flex gap-10 mt-5 mb-5">
      <p> $350.00 <span> <del> $400 </del></span></p>
      <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
    </div>
     </div>
     </div>
    
    
    <div className=' col-lg-3 col-md-3 col-sm-3 '>
    
        <div className="  border-amber-200 border rounded-lg  mt-25  shadow-black shadow-sm shadow-black/50  ">
                  <img src={doctor} alt="" className=" w-70 h-50 border rounded-lg" />
            <div> 
              <p className="flex gap-40 mt-5 ">Barber shop<span  > <FaHeart className=" hover:text-red-700 cursor-pointer  "/> </span></p>
        </div>
        <div className=" mt-3">
      <h1 className=" text-2xl font-semibold   "> City Tower Barber Shop</h1>
     </div>
    
    
     <div className=" flex gap-7 mt-6">
      <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
      <div>
        <p> BY <span > <a href="#">  jhon de  </a></span></p>
        </div>
      </div>
     
    <div className=" flex gap-2">
      <p><FaLocationDot className=" mt-5 text-2xl text-red-700"/> </p>
      <p className=" mt-4 "> City tower road:2485, usa</p>
    </div>
    
    <div className=" flex gap-10 mt-5 mb-5">
      <p> $350.00 <span> <del> $400 </del></span></p>
      <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white border rounded-sm  cursor-pointer"> Book Now</button>
    </div>
      
    
        </div>
        
        </div>
        
        
      
    
    
    

      </div>


      <div className=' row  mt-10'>
      <div className=' col-lg-3 col-md-3 col-sm-3 '>
        <div className=" overflow-auto h-60 w-60 border border-black rounded-lg mt-20 ">
          <h1 className=" text-black text-2xl font-bold">Categories</h1>
          <ul className=" space-y-3 p-3  float-left ">
            <li>All <span className=" float-right pl-20 ">(99)</span></li>
            <li>Barber <span className="float-right pl-20 ">(99)</span></li>
            <li>Gym <span className=" float-right pl-20">(99)</span></li>
            <li>Cooking <span className="float-right pl-20">(99)</span></li>
            <li>Development <span className=" float-right pl-20 ">(99)</span></li>
            <li>Finance  <span className="float-right  pl-20">(99)</span></li>
            <li>Health  <span className=" float-right pl-20">(99)</span></li>
          </ul>
        </div>
    
        </div>
        <div className=' col-lg-3 col-md-3 col-sm-3 '>
          <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                    <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
            <div> 
              <p className="flex gap-40 mt-5 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
    </div>
    <div className=" mt-3">
      <h1 className=" text-2xl font-semibold   "> City Tower Barber Shop</h1>
    
     </div>
    
     <div className=" flex gap-7 mt-6">
      <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
      <div>
        <p> BY <span > <a href="#">  jhon de  </a></span></p>
        </div>
     </div>
     <div className=" flex gap-2">
      <p><FaLocationDot className=" mt-5 text-2xl text-red-700"/> </p>
      <p className=" mt-4 "> City tower road:2485, usa</p>
    </div>
    <div className=" flex gap-10 mt-5 mb-5">
      <p> $350.00 <span> <del> $400 </del></span></p>
      <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
    </div>
     </div>

        </div>




        <div className=' col-lg-3 col-md-3 col-sm-3 '>
          <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                    <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
            <div> 
              <p className="flex gap-40 mt-5 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
    </div>
    <div className=" mt-3">
      <h1 className=" text-2xl font-semibold   "> City Tower Barber Shop</h1>
    
     </div>
    
     <div className=" flex gap-7 mt-6">
      <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
      <div>
        <p> BY <span > <a href="#">  jhon de  </a></span></p>
        </div>
     </div>
     <div className=" flex gap-2">
      <p><FaLocationDot className=" mt-5 text-2xl text-red-700"/> </p>
      <p className=" mt-4 "> City tower road:2485, usa</p>
    </div>
    <div className=" flex gap-10 mt-5 mb-5">
      <p> $350.00 <span> <del> $400 </del></span></p>
      <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
    </div>
     </div>

        </div>



        <div className=' col-lg-3 col-md-3 col-sm-3 '>
          <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                    <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
            <div> 
              <p className="flex gap-40 mt-5 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
    </div>
    <div className=" mt-3">
      <h1 className=" text-2xl font-semibold   "> City Tower Barber Shop</h1>
    
     </div>
    
     <div className=" flex gap-7 mt-6">
      <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
      <div>
        <p> BY <span > <a href="#">  jhon de  </a></span></p>
        </div>
     </div>
     <div className=" flex gap-2">
      <p><FaLocationDot className=" mt-5 text-2xl text-red-700"/> </p>
      <p className=" mt-4 "> City tower road:2485, usa</p>
    </div>
    <div className=" flex gap-10 mt-5 mb-5">
      <p> $350.00 <span> <del> $400 </del></span></p>
      <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
    </div>
     </div>
          </div>

      </div>
            <div className=' row  mt-10'>
      <div className=' col-lg-3 col-md-3 col-sm-3 '>
        <div className=" overflow-auto h-60 w-60 border border-black rounded-lg mt-20 ">
          <h1 className=" text-black text-2xl font-bold">Categories</h1>
          <ul className=" space-y-3 p-3  float-left ">
            <li>All <span className=" float-right pl-20 ">(99)</span></li>
            <li>Barber <span className="float-right pl-20 ">(99)</span></li>
            <li>Gym <span className=" float-right pl-20">(99)</span></li>
            <li>Cooking <span className="float-right pl-20">(99)</span></li>
            <li>Development <span className=" float-right pl-20 ">(99)</span></li>
            <li>Finance  <span className="float-right  pl-20">(99)</span></li>
            <li>Health  <span className=" float-right pl-20">(99)</span></li>
          </ul>
        </div>
    
        </div>
        <div className=' col-lg-3 col-md-3 col-sm-3 '>
          <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                    <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
            <div> 
              <p className="flex gap-40 mt-5 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
    </div>
    <div className=" mt-3">
      <h1 className=" text-2xl font-semibold   "> City Tower Barber Shop</h1>
    
     </div>
    
     <div className=" flex gap-7 mt-6">
      <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
      <div>
        <p> BY <span > <a href="#">  jhon de  </a></span></p>
        </div>
     </div>
     <div className=" flex gap-2">
      <p><FaLocationDot className=" mt-5 text-2xl text-red-700"/> </p>
      <p className=" mt-4 "> City tower road:2485, usa</p>
    </div>
    <div className=" flex gap-10 mt-5 mb-5">
      <p> $350.00 <span> <del> $400 </del></span></p>
      <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
    </div>
     </div>

        </div>




        <div className=' col-lg-3 col-md-3 col-sm-3 '>
          <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                    <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
            <div> 
              <p className="flex gap-40 mt-5 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
    </div>
    <div className=" mt-3">
      <h1 className=" text-2xl font-semibold   "> City Tower Barber Shop</h1>
    
     </div>
    
     <div className=" flex gap-7 mt-6">
      <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
      <div>
        <p> BY <span > <a href="#">  jhon de  </a></span></p>
        </div>
     </div>
     <div className=" flex gap-2">
      <p><FaLocationDot className=" mt-5 text-2xl text-red-700"/> </p>
      <p className=" mt-4 "> City tower road:2485, usa</p>
    </div>
    <div className=" flex gap-10 mt-5 mb-5">
      <p> $350.00 <span> <del> $400 </del></span></p>
      <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
    </div>
     </div>

        </div>



        <div className=' col-lg-3 col-md-3 col-sm-3 '>
          <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                    <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
            <div> 
              <p className="flex gap-40 mt-5 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
    </div>
    <div className=" mt-3">
      <h1 className=" text-2xl font-semibold   "> City Tower Barber Shop</h1>
    
     </div>
    
     <div className=" flex gap-7 mt-6">
      <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
      <div>
        <p> BY <span > <a href="#">  jhon de  </a></span></p>
        </div>
     </div>
     <div className=" flex gap-2">
      <p><FaLocationDot className=" mt-5 text-2xl text-red-700"/> </p>
      <p className=" mt-4 "> City tower road:2485, usa</p>
    </div>
    <div className=" flex gap-10 mt-5 mb-5">
      <p> $350.00 <span> <del> $400 </del></span></p>
      <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
    </div>
     </div>
          </div>

      </div>
      
    </div>

    )
}
export default Card;
