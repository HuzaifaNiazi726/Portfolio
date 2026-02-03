import Navigation from "./Navigation";
import doctor from "./download.jpeg";
import { FaHeart } from "react-icons/fa6";
import img from "./team1.jpg";   
import Cardslide from "./Cardslide";
import Home from './Home.jpeg';
import cleaner from './cleaner.jpeg';
import {motion} from 'framer-motion';
import { FaLocationDot } from "react-icons/fa6";
import { FaServicestack } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBolt } from "react-icons/fa6";
import {FaDumbbell} from "react-icons/fa6";
import{FaWrench} from "react-icons/fa6";
import { FaBroom } from "react-icons/fa6";
import electriction from "./electriction.jpeg";
import clean from "./clean.jpeg";
import discount from "./discount.jpeg";
function Home1() {
    return (
        <div>
          
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="  h-screen bg-cover bg-center   "
        style={{ backgroundImage: `url(${Home})` }}>
       <div>
            <Navigation/>
            </div>
<div>
            <h1 className="pt-48  font-bold"> Booking Any Services <br /> Within Few Time</h1>
            <p className="pt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis beatae odit nesciunt ipsa? Unde debitis earum optio. Eos quaerat nobis, suscipit cum architecto enim iure minima delectus repellendus? Nostrum, minima.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, odio ipsam esse iure ut voluptatum totam delectus porro nisi, voluptate ratione, repellat earum commodi cupiditate nostrum ipsum provident unde ullam.</p>
               </div>

<div className="bg-amber-50  rounded-4xl flex  space-x-20 w-170 h-20 ml-65 mt-15 ">
                <p className=" flex pt-4"> <span className="pt-1 text-blue-600"><FaLocationDot/></span> Search Location</p>
                <p className="flex space-x-6 pt-4"> <span className="pt-1 text-blue-600"><FaLocationDot/></span> Search Location</p>
                <button className=" bg-gradient-to-r from-blue-600 to-blue-800 w-35 h-12  mt-3   text-amber-50  cursor-pointer hover:from-black hover:to-black"> Find Now</button>
                </div> 

                </div>

               

            </div>
          </div>

          <div className="row pt-20 mb-20 ">
            <div className="col-lg-12 col-md-12 col-sm-12 " 
             > 
            <h1>Most Tranding Catagories</h1>
            </div>
            
          
            <div className="col-lg-12 col-sd-12 col-sm-12 flex space-x-10 pt-13  overflow-auto w-120 "
            // A card slider usinh motion frame work
             >

            <motion.div className="" initial={{  }}
  animate={{ x: [0, 250, -450, 10] }}   
  transition={{
    duration: 9,         
    delay: 2,          
    repeat: Infinity,    // repeat forever
    repeatType: "reverse", // move back and forth
    ease: "easeInOut",   // smooth motion
  }} >

                <div className=" shadow-black shadow-sm border-amber-200 w-70">
               
                    <div className="bg-amber-600 rounded-4xl w-20 h-20 flex justify-center items-center ml-11">
              <a href="#" className="text-amber-600 bg-amber-600"><FaUserDoctor size={50} /></a>
              </div>
                <h3>Doctor</h3>
                <p>80+ Doctors Available</p>
             </div>
              </motion.div>

             <motion.div className="" initial={{  }}
  animate={{ x: [0, 250, -450, 10]}}   // move 100px to the right
  transition={{
    duration: 9,         // how long one move takes
    delay: 10,            // start after 2 seconds
    repeat: Infinity,    // repeat forever
    repeatType: "reverse", // move back and forth
    ease: "easeInOut",   // smooth motion
  }}>
             <div className="shadow-black shadow-sm border-amber-200 w-70      ">
                <div className=" bg-fuchsia-500 rounded-4xl w-20 h-20 flex justify-center items-center ml-11"  >
                    
              <a href="#" className="text-amber-600 "><FaBolt size={50} /></a> 
              </div> 
                <h3>Engineer</h3>
                <p>40+ Doctors Available</p>
             </div>
              </motion.div>
              


             <motion.div className="" initial={{  }}
  animate={{ x: [0, 250, -450, 10] }}  
  transition={{
    duration: 9,         // how long one move takes
    delay: 10,            // start after 2 seconds
    repeat: Infinity,    // repeat forever
    repeatType: "reverse", // move back and forth
    ease: "easeInOut",   // smooth motion
  }}>
            
             <div className="shadow-black shadow-sm border-amber-200 w-70">  
                <div className="bg-emerald-400 rounded-4xl w-20 h-20 flex justify-center items-center ml-11 ">
              <a href="#" className="text-amber-600 "><FaDumbbell size={50} /></a>
              </div> 
                <h3>Gym Center</h3>
                <p>80+ Doctors Available</p>
             </div>
              </motion.div>
              


              <motion.div className="" initial={{  }}
  animate={{ x: [0, 250, -450, 10]}}   // move 100px to the right
  transition={{
    duration: 9,         // how long one move takes
    delay: 10,            // start after 2 seconds
    repeat: Infinity,    // repeat forever
    repeatType: "reverse", // move back and forth
    ease: "easeInOut",   // smooth motion
  }}>
            
             <div className=" shadow-black shadow-sm border-amber-200 w-70">
                <div className="bg-sky-400 rounded-4xl w-20 h-20 flex justify-center items-center ml-11"> 
              <a href="#" className="text-amber-600 "><FaUserDoctor size={50} /></a>
              </div>
                <h3>Doctor</h3>
                <p>80+ Doctors Available</p>
             </div>
              </motion.div>
              


            <motion.div className="" initial={{ }}
  animate={{ x: [0, 250, -450, 10] }}   // move 100px to the right
  transition={{
    duration: 9,         // how long one move takes
    delay: 10,            // start after 2 seconds
    repeat: Infinity,    // repeat forever
    repeatType: "reverse", // move back and forth
    ease: "easeInOut",   // smooth motion
  }}>
             
             <div className=" shadow-black shadow-sm border-amber-200 w-70 "> 

                <div className=" bg-pink-400 rounded-4xl w-20 h-20 flex  justify-center items-center ml-11 ">
              <a href="#" className="text-amber-600 "><FaWrench size={50} /></a>
              </div>
                <h3>Doctor</h3>
                <p>80+ Doctors Available</p>
             </div>

              </motion.div>
             

             <motion.div className="" initial={{  }}
  animate={{ x: [0, 250, -450, 10]}}   // move 100px to the right
  transition={{
    duration: 9,         // how long one move takes
    delay: 10,            // start after 2 seconds
    repeat: Infinity,    // repeat forever
    repeatType: "reverse", // move back and forth
    ease: "easeInOut",   // smooth motion
  }}>
            

             <div className=" shadow-black shadow-sm border-amber-200 w-70"> 
                <div className=" bg-amber-600 rounded-4xl w-20 h-20 flex justify-center items-center ml-11 ">
              <a href="#" className="text-amber-600 "><FaBroom size={50} /></a>
              </div>
                <h3>Doctor</h3>
                <p>80+ Doctors Available</p>
             </div>
             </motion.div>
             

            </div>
            
        

          </div>

          <div className="row bg-blue-100 mt-12"
          // a row and have four coloum in it display how to book
          >
<h1 className="pt-23 pb-10">How to Booking Services <br /> step by step</h1>
  
  <div className=" col-lg-3 col-md-3 col-sm-3 mb-18">
  
  <img src={cleaner} alt=""  className=" rounded-3xl  border-black shadow-2xl "/>
  <div className="pl-6" ></div>
  <h4 className="mt-2"> Choose your staff</h4>
</div>

<div className=" col-lg-3 col-md-3 col-sm-3">

  <img src={cleaner} alt=""  className=" rounded-3xl  border-black shadow-2xl "/>
  <div className="pl-6 ">
  <h4 className=" mt-2 "> Set Perfect time</h4>
  </div>
  
</div>


<div className=" col-lg-3 col-md-3 col-sm-3">

  
  <img src={cleaner} alt=""  className=" rounded-3xl  border-black shadow-2xl "/>
  <div className="pl-6">
  <h4 className="mt-2"> Fill Information</h4>
  </div>


</div>


<div className=" col-lg-3 col-md-3 col-sm-3">     

  <img src={cleaner} alt=""  className=" rounded-3xl  border-black shadow-2xl "/>
  <div className="pl-6">
  <h4 className="mt-2"> Send your Payment</h4>
  </div>
</div>


  

          </div>




          <div className="row bg-white mt-20"
          // row and we have coloum coloum in it and show over top future services 
          >
            <p1 className="pt-20 font-bold text-5xl -pl-20">Our Top Featured Services</p1>

            
            <div className="col-lg-12  flex space-x-8 overflow-auto"
            // mai card and have 4 card in it 
            >
            <div className="col-lg-3 col-sm-3 col-md-3">
              <motion.div className="" initial={{x:0}}
animate={{x:250}}
        transition={{
    duration: 7,         // how long one move takes
    delay: 2,            // start after 2 seconds
    repeat: Infinity,    // repeat forever
    repeatType: "reverse", // move back and forth
    ease: "easeInOut",   // smooth motion
  }}> 

              <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                                  <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
                          <div> 
                            <p className="flex gap-40 mt-2 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
                  </div>
                  <div className=" mt-3">
                    <h4 className=" text-2xl font-semibold   "> City Tower Barber Shop</h4>
                  
                   </div>
                  
                   <div className=" flex gap-7 mt-3">
                    <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
                    <div>
                      <p> BY <span > <a href="#">  jhon de  </a></span></p>
                      </div>
                   </div>
                   <div className=" flex gap-2">
                    <p><FaLocationDot className=" mt-2 text-2xl text-red-700"/> </p>
                    <p className=" mt-2 "> City tower road:2485, usa</p>
                  </div>
                  <div className=" flex gap-10 mt-2 mb-3">
                    <p> $350.00 <span> <del> $400 </del></span></p>
                    <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
                  </div>
                   </div>
                   </motion.div>
              
            </div>


            <div className="col-lg-3 col-sm-3 col-md-3">

              <motion.div className="" initial={{x:0}}
animate={{x:250}}
        transition={{
    duration: 7,         // how long one move takes
    delay: 2,            // start after 2 seconds
    repeat: Infinity,    // repeat forever
    repeatType: "reverse", // move back and forth
    ease: "easeInOut",   // smooth motion
  }}>
              <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                                  <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
                          <div> 
                            <p className="flex gap-40 mt-2">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
                  </div>
                  <div className=" mt-3">
                    <h4 className=" text-2xl font-semibold   "> City Tower Barber Shop</h4>
                  
                   </div>
                  
                   <div className=" flex gap-7 mt-3">
                    <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
                    <div>
                      <p> BY <span > <a href="#">  jhon de  </a></span></p>
                      </div>
                   </div>
                   <div className=" flex gap-2">
                    <p><FaLocationDot className=" mt-2 text-2xl text-red-700"/> </p>
                    <p className=" mt-2 "> City tower road:2485, usa</p>
                  </div>
                  <div className=" flex gap-10 mt-2 mb-3">
                    <p> $350.00 <span> <del> $400 </del></span></p>
                    <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
                  </div>
                   </div>
                   </motion.div>
              

            </div>



            <div className=" col-lg-3 col-sm-3 col-md-3 ">
              <motion.div className="" initial={{x:0}}
animate={{x:250}}
        transition={{
    duration: 7,         // how long one move takes
    delay: 2,            // start after 2 seconds
    repeat: Infinity,    // repeat forever
    repeatType: "reverse", // move back and forth
    ease: "easeInOut",   // smooth motion
  }}>
               <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                                  <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
                          <div> 
                            <p className="flex gap-40 mt-2 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
                  </div>
                  <div className=" mt-3">
                    <h4 className=" text-2xl font-semibold   "> City Tower Barber Shop</h4>
                  
                   </div>
                  
                   <div className=" flex gap-7 mt-3">
                    <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
                    <div>
                      <p> BY <span > <a href="#">  jhon de  </a></span></p>
                      </div>
                   </div>
                   <div className=" flex gap-2">
                    <p><FaLocationDot className=" mt-2 text-2xl text-red-700"/> </p>
                    <p className=" mt-2 "> City tower road:2485, usa</p>
                  </div>
                  <div className=" flex gap-10 mt-2 mb-3">
                    <p> $350.00 <span> <del> $400 </del></span></p>
                    <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
                  </div>
                   </div>
                   </motion.div>


              
            </div>




            <div className=" col-lg-3 col-md-3 col-sm-3">
              <motion.div className="" initial={{x:0}}
animate={{x:250}}
        transition={{
    duration: 7,         // how long one move takes
    delay: 2,            // start after 2 seconds
    repeat: Infinity,    // repeat forever
    repeatType: "reverse", // move back and forth
    ease: "easeInOut",   // smooth motion
  }}>

               <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                                  <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
                          <div> 
                            <p className="flex gap-40 mt-2 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
                  </div>
                  <div className=" mt-3">
                    <h4 className=" text-2xl font-semibold   "> City Tower Barber Shop</h4>
                  
                   </div>
                  
                   <div className=" flex gap-7 mt-3">
                    <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
                    <div>
                      <p> BY <span > <a href="#">  jhon de  </a></span></p>
                      </div>
                   </div>
                   <div className=" flex gap-2">
                    <p><FaLocationDot className=" mt-2 text-2xl text-red-700"/> </p>
                    <p className=" mt-2 "> City tower road:2485, usa</p>
                  </div>
                  <div className=" flex gap-10 mt-2 mb-3">
                    <p> $350.00 <span> <del> $400 </del></span></p>
                    <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
                  </div>
                   </div>
                   </motion.div>
</div>


<div className="col-lg-3-= col-md-3 col-sm-3">
  <motion.div className="" initial={{x:0}}
animate={{x:250}}
        transition={{
    duration: 7,         // how long one move takes
    delay: 2,            // start after 2 seconds
    repeat: Infinity,    // repeat forever
    repeatType: "reverse", // move back and forth
    ease: "easeInOut",   // smooth motion
  }}>
  <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                                  <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
                          <div> 
                            <p className="flex gap-40 mt-2 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
                  </div>
                  <div className=" mt-3">
                    <h4 className=" text-2xl font-semibold   "> City Tower Barber Shop</h4>
                  
                   </div>
                  
                   <div className=" flex gap-7 mt-3">
                    <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
                    <div>
                      <p> BY <span > <a href="#">  jhon de  </a></span></p>
                      </div>
                   </div>
                   <div className=" flex gap-2">
                    <p><FaLocationDot className=" mt-2 text-2xl text-red-700"/> </p>
                    <p className=" mt-2 "> City tower road:2485, usa</p>
                  </div>
                  <div className=" flex gap-10 mt-2 mb-3">
                    <p> $350.00 <span> <del> $400 </del></span></p>
                    <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
                  </div>
                   </div>
                   </motion.div>

  

</div>





            </div>


          </div>


          <div className="row pt-20 pb-20">
<div className="col-lg-6 col-md-6 col-sm-6">
 <img src={electriction} alt=""  className="w-230 h-80 rounded-3xl "/>
   <div className="-mt-70 absolute"><p className=" text-3xl font-bold  ">Are You Looking For <br /> Cleaner?</p> 
  <button className="text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 rounded-full shadow-md hover:from-black to-black  hover:scale-105 transition">
  Book Now
</button>

  </div>
  


</div>
<div className="col-lg-6 col-md-6 col-sm-6">
  <img src={clean} alt="" className=" w-230 h-80 rounded-3xl" />
  <div className="-mt-70 absolute"><p className=" text-3xl font-bold  ">Are You Looking For <br /> Cleaner?</p> 
  <button className="text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 rounded-full shadow-md hover:from-black to-black  hover:scale-105 transition">
  Book Now
</button>

  </div>

</div>

          </div>

 
      <div className="row mb-18"
      // this is main row and w have 4 colum in it we also have a row in it and we have a four colum in it
      >
      <h1>Popular Booking Services</h1>
      <div className="flex space-x-3 justify-center content-center pt-4">
        <button className=" px-2 py-3 border border-black hover:bg-gradient-to-r  from-blue-600 to-blue-400  hover:text-amber-50">All Services</button>
        <button className=" px-2 py-3 border border-black  hover:bg-gradient-to-r from-blue-600 to-blue-400 hovertext-amber-50" >All Services</button>
        <button className="px-2 py-3 border border-black hover:bg-gradient-to-r from-blue-600 to-blue-400 hover:text-amber-50 " >All Services</button>
        <button className=" px-2 py-3 border border-black hover:bg-gradient-to-r from-blue-600 to-blue-400 hover:text-amber-50"  >All Services</button>
        <button className=" px-2 py-3 border border-black hover:bg-gradient-to-r from-blue-600 to-blue-400 hover:text-amber-50">All Services</button>
        </div>

<div className=" col-lg-3 col-md-3 col-sm-3">
  <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                                  <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
                          <div> 
                            <p className="flex gap-40 mt-2 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
                  </div>
                  <div className=" mt-3">
                    <h4 className=" text-2xl font-semibold   "> City Tower Barber Shop</h4>
                  
                   </div>
                  
                   <div className=" flex gap-7 mt-3">
                    <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
                    <div>
                      <p> BY <span > <a href="#">  jhon de  </a></span></p>
                      </div>
                   </div>
                   <div className=" flex gap-2">
                    <p><FaLocationDot className=" mt-2 text-2xl text-red-700"/> </p>
                    <p className=" mt-2 "> City tower road:2485, usa</p>
                  </div>
                  <div className=" flex gap-10 mt-2 mb-3">
                    <p> $350.00 <span> <del> $400 </del></span></p>
                    <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
                  </div>
                   </div>
</div>



<div className="col-lg-3 col-md-3 col-sm-3">
  <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                                  <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
                          <div> 
                            <p className="flex gap-40 mt-2 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
                  </div>
                  <div className=" mt-3">
                    <h4 className=" text-2xl font-semibold   "> City Tower Barber Shop</h4>
                  
                   </div>
                  
                   <div className=" flex gap-7 mt-3">
                    <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
                    <div>
                      <p> BY <span > <a href="#">  jhon de  </a></span></p>
                      </div>
                   </div>
                   <div className=" flex gap-2">
                    <p><FaLocationDot className=" mt-2 text-2xl text-red-700"/> </p>
                    <p className=" mt-2 "> City tower road:2485, usa</p>
                  </div>
                  <div className=" flex gap-10 mt-2 mb-3">
                    <p> $350.00 <span> <del> $400 </del></span></p>
                    <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
                  </div>
                   </div>
</div>



<div className="col-lg-3 col-md-3 col-sm-3">
  <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                                  <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
                          <div> 
                            <p className="flex gap-40 mt-2 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
                  </div>
                  <div className=" mt-3">
                    <h4 className=" text-2xl font-semibold   "> City Tower Barber Shop</h4>
                  
                   </div>
                  
                   <div className=" flex gap-7 mt-3">
                    <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
                    <div>
                      <p> BY <span > <a href="#">  jhon de  </a></span></p>
                      </div>
                   </div>
                   <div className=" flex gap-2">
                    <p><FaLocationDot className=" mt-2 text-2xl text-red-700"/> </p>
                    <p className=" mt-2 "> City tower road:2485, usa</p>
                  </div>
                  <div className=" flex gap-10 mt-2 mb-3">
                    <p> $350.00 <span> <del> $400 </del></span></p>
                    <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
                  </div>
                   </div>
</div>



<div className="col-lg-3 col-md-3 col-sm-3">
  <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                                  <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
                          <div> 
                            <p className="flex gap-40 mt-2 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
                  </div>
                  <div className=" mt-3">
                    <h4 className=" text-2xl font-semibold   "> City Tower Barber Shop</h4>
                  
                   </div>
                  
                   <div className=" flex gap-7 mt-3">
                    <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
                    <div>
                      <p> BY <span > <a href="#">  jhon de  </a></span></p>
                      </div>
                   </div>
                   <div className=" flex gap-2">
                    <p><FaLocationDot className=" mt-2 text-2xl text-red-700"/> </p>
                    <p className=" mt-2 "> City tower road:2485, usa</p>
                  </div>
                  <div className=" flex gap-10 mt-2 mb-3">
                    <p> $350.00 <span> <del> $400 </del></span></p>
                    <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
                  </div>
                   </div>
</div>


<div className="row -mt-20"
//this is the childeren row of mian row
>

  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                                  <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
                          <div> 
                            <p className="flex gap-40 mt-2 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
                  </div>
                  <div className=" mt-3">
                    <h4 className=" text-2xl font-semibold   "> City Tower Barber Shop</h4>
                  
                   </div>
                  
                   <div className=" flex gap-7 mt-3">
                    <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
                    <div>
                      <p> BY <span > <a href="#">  jhon de  </a></span></p>
                      </div>
                   </div>
                   <div className=" flex gap-2">
                    <p><FaLocationDot className=" mt-2 text-2xl text-red-700"/> </p>
                    <p className=" mt-2 "> City tower road:2485, usa</p>
                  </div>
                  <div className=" flex gap-10 mt-2 mb-3">
                    <p> $350.00 <span> <del> $400 </del></span></p>
                    <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
                  </div>
                   </div>
  </div>



  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                                  <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
                          <div> 
                            <p className="flex gap-40 mt-2 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
                  </div>
                  <div className=" mt-3">
                    <h4 className=" text-2xl font-semibold   "> City Tower Barber Shop</h4>
                  
                   </div>
                  
                   <div className=" flex gap-7 mt-3">
                    <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
                    <div>
                      <p> BY <span > <a href="#">  jhon de  </a></span></p>
                      </div>
                   </div>
                   <div className=" flex gap-2">
                    <p><FaLocationDot className=" mt-2 text-2xl text-red-700"/> </p>
                    <p className=" mt-2 "> City tower road:2485, usa</p>
                  </div>
                  <div className=" flex gap-10 mt-2 mb-3">
                    <p> $350.00 <span> <del> $400 </del></span></p>
                    <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
                  </div>
                   </div>
  </div>


  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                                  <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
                          <div> 
                            <p className="flex gap-40 mt-2 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
                  </div>
                  <div className=" mt-3">
                    <h4 className=" text-2xl font-semibold   "> City Tower Barber Shop</h4>
                  
                   </div>
                  
                   <div className=" flex gap-7 mt-3">
                    <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
                    <div>
                      <p> BY <span > <a href="#">  jhon de  </a></span></p>
                      </div>
                   </div>
                   <div className=" flex gap-2">
                    <p><FaLocationDot className=" mt-2 text-2xl text-red-700"/> </p>
                    <p className=" mt-2 "> City tower road:2485, usa</p>
                  </div>
                  <div className=" flex gap-10 mt-2 mb-3">
                    <p> $350.00 <span> <del> $400 </del></span></p>
                    <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
                  </div>
                   </div>
  </div>


  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  border-amber-200 border rounded-lg mt-25   shadow-black shadow-sm shadow-black/50 ">
                                  <img src={doctor} alt=""  className=" w-70 h-50 border rounded-lg" />
                          <div> 
                            <p className="flex gap-40 mt-2 ">barber Shop <span > <FaHeart className="  hover:text-red-700 cursor-pointer"/> </span></p>
                  </div>
                  <div className=" mt-3">
                    <h4 className=" text-2xl font-semibold   "> City Tower Barber Shop</h4>
                  
                   </div>
                  
                   <div className=" flex gap-7 mt-3">
                    <img src={img} alt="" className=" w-9 h-9  border rounded-full " />
                    <div>
                      <p> BY <span > <a href="#">  jhon de  </a></span></p>
                      </div>
                   </div>
                   <div className=" flex gap-2">
                    <p><FaLocationDot className=" mt-2 text-2xl text-red-700"/> </p>
                    <p className=" mt-2 "> City tower road:2485, usa</p>
                  </div>
                  <div className=" flex gap-10 mt-2 mb-3">
                    <p> $350.00 <span> <del> $400 </del></span></p>
                    <button className=" bg-red-600  lg:w-26 lg:h-8 md:w-24 md:h-7 sm:w-20 sm-5  text-white  border rounded-sm cursor-pointer "> Book Now</button>
                  </div>
                   </div>
  </div>
  <div className="pt-10">
    <button className=" bg-gradient-to-r from-blue-600 to-blue-400 px-9 py-2 text-black  hover:from-black hover:to-black"> <a href="/">view more </a>   </button>
  </div>
</div>


      
        </div>  


        <div className="row mt-20">
          <img src={discount} alt=""  className=" h-97 rounded-3xl"/>
          <div className="absolute -ml-130 pt-13">
            <p className=" text-4xl font-semibold text-amber-50"> Get Up to 50% Discount <br /> Barber Serves
            </p>
            <p className="text-amber-50 font-bold"> lorem  c djcd ofdncwou wjf ddhuf ffcd ouhf <br/> ncdlceoin ieodcbh  cwlncwoncc 
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-400 px-9 py-2 shadow-blue-500 shadow-2xl shadow-blue/100 mr-200 hover:from-black hover:to-black hover:text-amber-50"> Book Now</button>
          </div>
          </div>  

<Cardslide/>
    
            
        </div>
    )
}
export default Home1;