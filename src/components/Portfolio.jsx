
import cleaner from './cleaner.jpeg';
import { useState } from 'react';
import ecom from './ecom.jfif';
import task from './task.jfif';
import huzaifa from'./huzaifa.jpeg'
import { FaDownload, FaG, FaPerson } from "react-icons/fa6";
import { FaReact } from 'react-icons/fa6';
import { FaJava } from 'react-icons/fa6';
import { FaCss3 } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaCartPlus } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa6';
import { FaUser, FaCalendarAlt, FaCheck,FaInstagram,FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaMailBulk,FaGlobeAsia,FaJs,FaBootstrap,  } from "react-icons/fa";
import { FaCircle, FaMobile,FaPaintRoller, } from 'react-icons/fa6';



function Port ()
{

const [Activity, setActivity] = useState("Frontend");
const [activetab, setactivetab] = useState("")
const [info, setinfo] = useState("Personal");
const [projects, setprojects] = useState(" ");
const [showVerifyBtn, setShowVerifyBtn] = useState(false);
const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    title: "",
    discription:"",
    Type:"",
  });

  const emailChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value
  });

  // simple email validation
  if (name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setShowVerifyBtn(emailRegex.test(value));
  }
};



    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value

      
      
     

      
       
    });
  };

  




    return (
        
        <>
            <div className="row bg-black " id='Home' >


                <div className=" col-lg-6 col-md-6 col-sm-6 " >
                    <p className="text-4xl text-amber-50 "> Muhammad Huzaifa</p>
                    <p className=" " > <span className=" text-4xl  bg-gradient-to-r from-blue-500 to-purple-900 bg-clip-text text-transparent">Front-End Developer </span> </p>
                    <p className=" text-amber-50"> Front-end developer.  I craft digital <br /> experiences with 2-3 years of professional expertise in <br /> building scalable, high-performance web applications.</p>
                    <p className=' text-amber-50 '> TECH EXPERTISE</p>
                    <div className=' flex justify-center gap-3'>
                        
                        <button className="text-amber-50 w-24 h-7 
hover:shadow-lg hover:shadow-blue-900 transition duration-300">
  Javascript
</button>

                        <button className=' text-amber-50  w-24 h-7 hover:shadow-lg hover:shadow-blue-900 transition duration-300'>React js</button>
                        <button className=' text-amber-50  w-24 h-7 hover:shadow-lg hover:shadow-blue-900 transition duration-300'>Tailwind CSS</button>
                        </div>
   
   
                    <div className='pt-9 flex justify-center gap-15 '>
                        <button className=' text-amber-50 w-24 h-7 hover:shadow-lg hover:shadow-blue-900 transition duration-300'>Bootstrap</button>
                        
                        <button className=' text-amber-50 hover:shadow-lg hover:shadow-blue-900 transition duration-300 '>HTML5</button>
                        <button className=' text-amber-50 hover:shadow-lg hover:shadow-blue-900 transition duration-300'>CSS3</button>
                    </div>


<hr class=" h-1 bg-gradient-to-r from-blue-500 to-purple-600 border-0"></hr>


                    <div className='flex justify-center gap-3 pt-9  pb-9'>
                        <div className='   border rounded-lg   w-30 h-14 cursor-pointer bg-gradient-to-r from-blue-1000 to-purple-900  '>
                            <p className='text-blue-400 font-bold    '>1+ <br /> <span className='text-amber-50'> Years</span>  </p>
                            
                        </div>
                        <div className='   border rounded-lg   w-30 h-14 cursor-pointer bg-gradient-to-r from-blue-1000 to-purple-900 '>
                            <p className='text-blue-400 font-bold'>3+ <br /> <span className='text-amber-50'> Projects</span>  </p>
                            
                        </div>
                        <div className='   border rounded-lg   w-30 h-14 cursor-pointer bg-gradient-to-r from-blue-1000 to-purple-900 '>
                            <p className='text-blue-400 font-bold'>100%  <br /> <span className='text-amber-50'> Satisfaction</span>  </p>
                            
                        </div>
                        

                    </div>

                    <hr className=" h-1 bg-gradient-to-r from-blue-500 to-purple-600 border-0"></hr>

                    <div className=' pb-9  flex gap-6 justify-center '>
                        <button onClick={()=>document.getElementById("Contactinfo").scrollIntoView({ behavior:'smooth',}) } className='text-amber-50 w-40 h-12 font-bold text-3xl  bg-gradient-to-r from-blue-600 to-blue-400  cursor-pointer hover:shadow-lg hover:shadow-blue-900 transition duration-300'>Hire ME</button>
                        <button className=' text-blue-900  text-lg  font-bold flex gap-4  hover:shadow-lg  border w-60 h-12 pt-3 pl-3 hover:shadow-blue-900 transition duration-300 '> <FaDownload className=' text-blue-800  ' size={20} />  Download Resuma  </button>

                    </div>

                    <div className=' flex gap-6  pb-9 ml-21 '>  
                        <div className=' cursor-pointer text-blue-950'>
                        <FaGithub className=' text-blue-300 hover:shadow-lg hover:shadow-blue-900 transition duration-300 cursor-pointer ' size={40} />
                        </div>
                        <FaMailBulk className=' text-blue-800  hover:shadow-lg hover:shadow-blue-900 transition duration-300 cursor-pointer ' size={40} />
                        <FaLinkedin className=' text-blue-800  hover:shadow-lg hover:shadow-blue-900 transition duration-300 cursor-pointer ' size={40} />
                        

 
                    </div>


</div>

                <div className=' col-lg-6 col-md-6 col-sm-6'>
<img src={huzaifa} alt=""  className=' h-100' />
                </div>
                
            </div>

<div className=' row bg-black' // About Me Section three coloum 1 is full and 2 is  6 by 6
>


    <div className=' col-lg-12 col-md-12 col-sm-12'>
        <div className='flex justify-center gap-3'>
              <span className="h-10 w-[5px] bg-gradient-to-b from-blue-400 to-blue-600 rounded-full animate-pulse">|</span>

<p className=' text-blue-500 font-semibold text-2xl '> About Me</p>
      <span className=" h-10 w-[5px] bg-gradient-to-b from-blue-400 to-blue-600 rounded-full animate-pulse"> ! </span>
</div>

<div>
    <p className=' text-6xl  text-amber-50 font-semibold'> How i <span className=' bg-gradient-to-r from-blue-600 to-purple-600  bg-clip-text text-transparent'> am </span> </p>
    <p className='text-amber-50 text-2xl'> I'm a passionate Front-End Developer with 1 yearof professional experience in building <br /> scalable web applications using modern technologies </p>
</div>
</div>
</div>
<div className=' row  bg-gradient-to-r from-blue-900 to-purple-900 ' // about me section 2 coloum
>


<div className='col-lg-6 col-md-6 col-sm-6 mt-5' > 
    <h1 className='text-amber-50'>  <span className=' text-amber-50'> My Journey </span> </h1>
    <p className='text-amber-50 pt-3 pl-13'>I began my development journey with a strong curiosity for building meaningful and impactful digital experiences. <br /> Over time, this curiosity evolved into a deep passion for front-end development where I focus on creating  scalable, performant applications.  <br />I primarily work with the front-end and enjoy transforming complex ideas into clean, efficient solutions.
</p>

<p className='text-amber-50'> <span className=' text-blue-700 text-6xl'>.</span> Hands-on experience in developing full-stack applications using <br /> <span className=' font-semibold'>JavaScript, React, Tailwind. </span></p>
<p className='text-amber-50'> <span className=' text-blue-700 text-6xl'>.</span>  Successfully delivered multiple projects including <br /> <span className=' font-semibold'> e-commerce platforms, dashboards, and real-time applications. </span></p>
<p className='text-amber-50'> <span className=' text-blue-700 text-6xl'>.</span> Strong focus on writing clean, maintainable code with attention to  <br /> <span className=' font-semibold'> performance, accessibility, and responsiveness.</span></p>
</div  >


<div className='col-lg-6 col-md-6 col-sm-12 mt-5 justify-center   '>

    
        <p className=' text-blue-400 text-4xl font-semibold'>Front-End Development</p>
        
        <p className='w-50 h-12 pt-2  cursor-pointer   text-2xl text-blue-400 bg-gradient-to-r from-blue-950 to-purple-950 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300 '> React  </p>
        <p className=' w-50 h-12 pt-2  cursor-pointer  text-2xl text-blue-400 bg-gradient-to-r from-blue-950 to-purple-950 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300 '> JavaScript  </p>
        
        
        <p className=' w-50 h-12 pt-2 cursor-pointer text-2xl text-blue-400 bg-gradient-to-r from-blue-950 to-purple-950 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300 '> Tailwind CSS  </p>
        <p className=' w-50 h-12 pt-2 cursor-pointer text-2xl text-blue-400 bg-gradient-to-r from-blue-950 to-purple-950 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300 '> Bootstrap  </p>
    
         
        <p className=' w-50 h-12 pt-2 cursor-pointer text-2xl text-blue-400 bg-gradient-to-r from-blue-950 to-purple-950 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300 '> HTML  </p>
        <p className=' w-50 h-12 pt-2 cursor-pointer  text-2xl text-blue-400 bg-gradient-to-r from-blue-950 to-purple-950 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300 '> CSS  </p>
        
        

    

    

</div>
</div>





<div className=' row  pt-9 pb-30 bg-black   ' //1 row and in which is card
>
    <h1 className='font-bold text-amber-50 pb-9 '> <span className=' text-amber-50' > Why Work With Me ? </span></h1>



    
        <div className='col-lg-3 col-md-3 col-sm-12 '>
    <div className=' cursor-pointer text-amber-50 border rounded-lg bg-gradient-to-r from-blue-950 to-purple-950 w-60 '>
        <FaGithub className=' ml-30 ' size={40} />
        <p className=' text-2xl font-semibold '> Clean Code</p>
        <p>Optimize code for <br /> readability and maintainability.</p>

    </div>
    </div>
    
<div className=' col-lg-3 col-md-3 col-sm-12 '>
    <div className=' cursor-pointer text-amber-50 border rounded-lg bg-gradient-to-r from-blue-950 to-purple-950 w-60  '>
        <FaGithub className=' ml-30' size={40} />
        <p className=' text-2xl font-semibold '> Clean Code</p>
        <p>Optimize code for <br /> readability and maintainability.</p>

    </div>
    </div>

<div className=' col-lg-3 col-md-3 col-sm-12 '>
    <div className=' cursor-pointer text-amber-50 border rounded-lg bg-gradient-to-r from-blue-950 to-purple-950 w-60 '>
        <FaGithub className='ml-30' size={40} />
        <p className=' text-2xl font-semibold '> Clean Code</p>
        <p>Optimize code for <br /> readability and maintainability.</p>

    </div>
    </div>
    

<div className=' col-lg-3 col-md-3 col-sm-12'>
    <div className=' cursor-pointer text-amber-50 border rounded-lg bg-gradient-to-r from-blue-950 to-purple-950 w-60  '>
        <FaGithub className='ml-30' size={40} />
        <p className=' text-2xl font-semibold '> Clean Code</p>
        <p>Optimize code for <br /> readability and maintainability.</p>

    </div>
    </div>
    </div>
    
    
    


<div className=' row bg-black' id='Projects'>

<div className='' //row  for project section
>
    <div className=' flex justify-center gap-3'>
 <span className="h-10 w-[5px] bg-gradient-to-b from-blue-400 to-blue-600 rounded-full animate-pulse">|</span>
<p className=' text-blue-500 font-semibold text-2xl'> My Portfolio</p>
              <span className="h-10 w-[5px] bg-gradient-to-b from-blue-400 to-blue-600 rounded-full animate-pulse">|</span>
</div>
<p className=' mt-4 text-amber-50 font-semibold text-6xl'> Featured  <span className=' text-blue-400'>Projects </span></p>
<p className='text-amber-50'>A collection of my latest projects showcasing my expertise  in Front-End Development technologies.</p>
</div>
</div>


<div className='row bg-black '>

<div className=' col-lg-4 col-md-12 col-sm-12   '>

<div className=' h-120 border rounded-lg  cursor-pointer hover:shadow-lg hover:shadow-blue-600 transition duration-300  '>
    <div className=''>
        <p className=' w-30  border rounded-4xl absolute -mt-40 text-blue-500 bg-blue-950'> 2025/ Frontend </p>
 
        <img src={ecom} alt="" className=' w-100 h-60 rounded-sm border-blue-400  ' />
    </div>
    <div>
        <p className=' mt-3 text-blue-400 font-semibold text-2xl'> E-Commerence Platform</p>
        <p className='text-amber-50'>A full-featured e-commerce platform with <br/> user authentication, product catalog, <br/> shopping cart, and payment integration.</p>
    </div>
    </div>
</div>


<div className='col-lg-4 col-md-12 col-sm-12 '>
<div className=' h-120 border rounded-lg  cursor-pointer hover:shadow-lg hover:shadow-blue-600 transition duration-300  '>
    <div className=''>
        <p className=' w-30 -mt-40 border rounded-4xl absolute  text-blue-500 bg-blue-950'> 2025/Frontend</p>
 
        <img src={task} alt="" className=' w-100 h-60 rounded-sm' />
    </div>
    <div>
        <p className=' mt-3 text-blue-400 font-semibold text-2xl'> Task Management System</p>
        <p className='text-amber-50'>Real-time collaborative task management <br /> application with user roles, notifications, <br /> and dashboard analytics.</p>
    </div>
</div>
</div>


<div className='col-lg-4 col-md-12 col-sm-12'>
    <div className=' h-120 border rounded-lg  cursor-pointer hover:shadow-lg hover:shadow-blue-600 transition duration-300  '>
    <div className=''>
 <p className=' w-30 -mt-40 border rounded-4xl absolute  text-blue-500 bg-blue-950'> 2025/Frontend</p>
 
        <img src={ecom} alt="" className=' w-100 h-60 rounded-sm' />
       
    </div>
    <div>
        <p className=' mt-3 text-blue-400 font-semibold text-2xl'> Social Media Dashboard</p>
        <p className='text-amber-50'>Analytics dashboard for social media <br /> management with real-time data <br /> visualization and user insights.</p>
    </div>
</div>
</div>




<div className=' col-lg-12 col-md-12 col-sm-12 bg-black pb-9 pt-4'       // it is also from upper row project section
>

    <h1 className=' text-amber-50 pb-9 pt-7 '> <span className=' text-amber-50'> Interseted In My Work </span> </h1>
    <p className='text-amber-50'> Check out my complete portfolio and let's discuss how <br />I can help with your next  project.
  </p>
<button className='text-amber-50 w-40 h-12 mt-3 font-bold text-3xl  bg-gradient-to-r from-blue-600 to-blue-400  cursor-pointer hover:shadow-lg hover:shadow-blue-900 transition duration-300'>Have A Query</button>
<button className= 'text-amber-50 w-40 h-12 mt-3 ml-60 font-bold text-3xl  bg-fuchsia-950 cursor-pointer hover:shadow-lg hover:shadow-fuchsia-900 transition duration-300'>Hire ME</button>

</div>
</div>


<div className=' row  bg-gradient-to-r from-blue-900 to-purple-900 ' id='services' >
    <div className='flex justify-center gap-3 pt-16 '>
              <span className="h-10 w-[5px] bg-gradient-to-b from-blue-400 to-blue-600 rounded-full animate-pulse">|</span>

<p className=' text-blue-500 font-semibold text-2xl '> About Me</p>
      <span className=" h-10 w-[5px] bg-gradient-to-b from-blue-400 to-blue-600 rounded-full animate-pulse"> ! </span>
</div>
    <p className=' text-6xl  text-amber-50 font-semibold'> TECH <span className=' bg-gradient-to-r from-blue-600 to-purple-600  bg-clip-text text-transparent'> STACK </span> </p>
    <p className='text-amber-50'> I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. <br /> Feel free to reach out through any of the platforms below.</p>


<div className='col-lg-6 col-md-6 col-sm-6  justify-center flex pt-5'>
    <button  onClick={()=>setActivity("Frontend") }  className='text-amber-50 w-40 h-12 mt-3 ml-30 font-bold text-3xl  bg-gradient-to-r from-blue-600 to-blue-400  cursor-pointer hover:shadow-lg hover:shadow-blue-900 transition duration-300'>Front-End</button>

</div>
<div className='col-lg-6 col-md-6 col-sm-6 flex justify-center pt-5'>
    <button   onClick={ ()=>setActivity("language")} className='text-amber-50 w-40 h-12 mt-3 font-bold text-3xl  bg-gradient-to-r from-blue-600 to-blue-400  cursor-pointer hover:shadow-lg hover:shadow-blue-900 transition duration-300'>Languages</button>
</div>
</div>
 
<div className='row bg-black  pt-5   pl-6'>
    { Activity==="Frontend" && (
      <>
    
<div className='col-lg-6 col-md-6 col-sm-12  pt-9 '>
    <div className=' bg-gray-800'>
    <div className='flex gap-20'>
    <FaReact className=' text-blue-600' size={50}/>
    <p className='text-amber-50'>React <br /> 1+year</p>
    </div>
    

   <hr className=" h-1 w-70 bg-blue-500 border-0"></hr> 
<p className=' text-amber-50'>95%</p>
<hr className=" h-3 w-70 bg-blue-500 rounded-lg"></hr>
</div>

</div>


<div className='col-lg-6 col-md-6 col-sm-12 pt-9   '>
    <div className='bg-gray-800'>
    <div className='flex gap-20'>
    <FaJs className=' text-blue-600' size={50}/>
    <p className='text-amber-50'>JavaScript <br /> 1+year</p>
    </div>

   <hr className=" h-1 w-70 bg-blue-500 border-0"></hr> 
<p className=' text-amber-50'>95%</p>
<hr className=" h-3 w-70 bg-blue-500 rounded-lg"></hr>
</div>

</div>

<div className='col-lg-6 col-md-6 col-sm-12 pt-9   '>
    <div className='bg-gray-800'>
    <div className='flex gap-20'>
    <FaReact className=' text-blue-600' size={50}/>
    <p className='text-amber-50'>Tailwind <br /> 7 Months</p>
    </div>

   <hr className=" h-1 w-70 bg-blue-500 border-0"></hr> 
<p className=' text-amber-50'>95%</p>
<hr className=" h-3 w-70 bg-blue-500 rounded-lg"></hr>
</div>

</div>

<div className='col-lg-6 col-md-6 col-sm-12 pt-9   '>
    <div className='bg-gray-800'>
    <div className='flex gap-20'>
    <FaBootstrap className=' text-blue-600' size={50}/>
    <p className='text-amber-50'>BootStrap <br /> 1+year</p>
    </div>

   <hr className=" h-1 w-70 bg-blue-500 border-0"></hr> 
<p className=' text-amber-50'>95%</p>
<hr className=" h-3 w-70 bg-blue-500 rounded-lg"></hr>
</div>

</div>


 </>
    )}

</div>
       




<div className='row  bg-black  pt-5   pl-6'>

{ Activity==="language" && (
      <>

<div className='col-lg-6 col-md-6 col-sm-12  pt-9 '>
    <div className=' bg-gray-800'>
    <div className='flex gap-20'>
    <FaCartPlus className=' text-blue-600' size={50}/>
    <p className='text-amber-50'>C++ <br/> 1+year</p>
    </div>
    

   <hr className=" h-1 w-70 bg-blue-500 border-0"></hr> 
<p className=' text-amber-50'>75%</p>
<hr className=" h-3 w-70 bg-blue-500 rounded-lg"></hr>
</div>

</div>


<div className='col-lg-6 col-md-6 col-sm-12 pt-9   '>
    <div className='bg-gray-800'>
    <div className='flex gap-20'>
    <FaJava className=' text-blue-600' size={50}/>
    <p className='text-amber-50'>Java <br/> 1+year</p>
    </div>

   <hr className=" h-1 w-70 bg-blue-500 border-0"></hr> 
<p className=' text-amber-50'>85%</p>
<hr className=" h-3 w-70 bg-blue-500 rounded-lg"></hr>
</div>

</div>


<div className='col-lg-6 col-md-6 col-sm-12 pt-9   '>
    <div className='bg-gray-800'>
    <div className='flex gap-20'>
    <FaJs className=' text-blue-600' size={50}/>
    <p className='text-amber-50'>Javascript <br/> 1+year</p>
    </div>

   <hr className=" h-1 w-70 bg-blue-500 border-0"></hr> 
<p className=' text-amber-50'>95%</p>
<hr className=" h-3 w-70 bg-blue-500 rounded-lg"></hr>
</div>

</div>


<div className='col-lg-6 col-md-6 col-sm-12 pt-9   '>
    <div className='bg-gray-800'>
    <div className='flex gap-20'>
    <FaJava className=' text-blue-600' size={50}/>
    <p className='text-amber-50'>Java <br/> 1+year</p>
    </div>

   <hr className=" h-1 w-70 bg-blue-500 border-0"></hr> 
<p className=' text-amber-50'>95%</p>
<hr className=" h-3 w-70 bg-blue-500 rounded-lg"></hr>
</div>

</div>
</>
    )}
</div>



<div className=' row bg-black   pt-9 '   // development process section    
>
    <p className='text-6xl text-amber-50 font-semibold'>Development <br /> <span className=' bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent  '> Process Excellence </span> </p>
    <p className='text-amber-50 pt-3'>A meticulously crafted workflow designed to transform your vision into reality with <br /> precision, transparency, and exceptional results at every stage.</p>

    <div className=' col-lg-6 col-md-12 col-sm-12  pt-5 pb-30  '>
         
    <div className=' border rounded-4xl  justify-center gap-3 bg-blue-600 '>
        <p className='bg-blue-600 text-amber-50 w-18 border rounded-4xl  float-right mt-2 mr-4 '> Phase 1</p>
        <h1 className='text-amber-50  pt-12 '>Discovery & Consulation</h1>
        <p className='text-amber-50'> Intial consulation to understand your vision goal and requirement</p>
        <ul className='text-amber-50'>
            <li>Intial consultation</li>
            <li>Goal Alignment</li>
            <li>Market Research</li>
        </ul>
    </div>



    <div className=' border rounded-4xl  justify-center gap-3 bg-blue-600  mt-50'>
        <p className='bg-green-600 text-amber-50 w-18 border rounded-4xl  float-right mt-2 mr-4 '> Phase 2</p>
        <h1 className='text-amber-50 pt-12 '>Planning & Strategy</h1>
        <p className='text-amber-50'> Detailed planing with technical specifications and project roadmap</p>
        <ul className='text-amber-50'>
            <li>Technical specification</li>
            <li>Architecture planning</li>
            <li>Timeline & milestones</li>
        </ul>
    </div>



    <div className=' border rounded-4xl  justify-center gap-3  mt-50 bg-blue-600'>
        <p className='bg-gray-800 text-amber-50 w-18 border rounded-4xl  float-right mt-2 mr-4 '> Phase 3</p>
        <h1 className='text-amber-50 pt-12 '>UX/UI Design</h1>
        <p className='text-amber-50'> Creating intuitive and beautiful user interface with exceptional user experience</p>
        <ul className='text-amber-50'>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Visual Design</li>
               <li>User Testing</li>
        </ul>
    </div>
        
        

        </div>

        

<div className='col-lg-6 col-md-12 col-sm-12 '>

    <div className=' border rounded-4xl  justify-center gap-3  bg-blue-600 mt-50'>
        <p className='bg-red-400 text-amber-50 w-18 border rounded-4xl  float-right mt-2 mr-4 '> Phase 4</p>
        <h1 className='text-amber-50  pt-12 '>Development</h1>
        <p className='text-amber-50'> Building robust,scalable applications with modern technologies</p>
        <ul className='text-amber-50'>
            <li>Front-end Development</li>
            
        </ul>
    </div>

<div className=' border rounded-4xl  justify-center gap-3  bg-blue-600 mt-50'>
        <p className='bg-amber-600 text-amber-50 w-18 border rounded-4xl  float-right mt-2 mr-4 '> Phase 5</p>
        <h1 className='text-amber-50  pt-12 '>Quality Assurance</h1>
        <p className='text-amber-50'> Rigorous testing to ensure Flawless performance </p>
        <ul className='text-amber-50'>
            <li>Automated Testing</li>
            <li>Manual Testing</li>
            <li>Performance Testing</li>
        </ul>
    </div>






</div>


        </div>




      <div className=' row bg-black pt-9 pb-15 justify-center gap-3'   // our core principle
      >
        <p className=' text-4xl text-amber-50'> Our  <span className=' text-blue-400'>Core Principle </span>
        </p>
        <p className=' text-amber-50'>Fundamental principles guiding our approach to excellence and innovation.</p>

        <div className=' col-lg-3 col-md-6 col-sm-12 pt-9 border rounded-3xl bg-purple-900  hover:scale-105 transition duration-300 '>
            <p className=' bg-gradient-to-r from-blue-500 to-black w-14 justify-center h-14 ml-25 rounded-2xl'>.</p>
            <p className=' text-amber-50 font-semibold text-2xl'>Agile Methodology</p>
            <p className='text-amber-50'> Iterative development with regular feedback and adaptation.</p>

        </div>


        <div className=' col-lg-3 col-md-6 col-sm-12 pt-9 border rounded-3xl bg-purple-900 hover:scale-105 transition duration-300 '>
            <p className=' bg-gradient-to-r from-green-500 to-black w-14 justify-center h-14 ml-25 rounded-2xl'>.</p>
            <p className=' text-amber-50 font-semibold text-2xl'>Clean Code</p>
            <p className='text-amber-50'> Maintainable , scalable and well-documented codebase</p>

        </div>


        <div className=' col-lg-3 col-md-6 col-sm-12 pt-9 border rounded-3xl justify-center bg-purple-900  hover:scale-105 transition duration-300 '>
            <p className=' bg-gradient-to-r from-amber-500 to-black w-14  h-14 ml-25 rounded-2xl'>.</p>
            <p className=' text-amber-50 font-semibold text-2xl'>Performanced Focused</p>
            <p className='text-amber-50'> Optimized for speed and excellent user experience.</p>

        </div>



        <div className=' col-lg-3 col-md-6 col-sm-12 pt-9 border rounded-3xl mt-4 bg-purple-900 hover:scale-105 transition-transform duration-300 '>
            <p className=' bg-gradient-to-r from-blue-500 to-black w-14 justify-center h-14 ml-25 rounded-2xl'>.</p>
            <p className=' text-amber-50 font-semibold text-2xl'>Continuous Update</p>
            <p className='text-amber-50'> Regular update and maintenance for long-term success.</p>

        </div>

        <div className=' col-lg-3 col-md-6 col-sm-12 pt-9 border rounded-3xl mt-4 bg-purple-900  hover:scale-105 transition duration-300 '>
            <p className=' bg-gradient-to-r from-amber-500 to-black w-14 justify-center h-14 ml-25 rounded-2xl'>.</p>
            <p className=' text-amber-50 font-semibold text-2xl'>Secruity First</p>
            <p className='text-amber-50'> Build with security  best practices from round up.</p>

        </div>


        <div className=' col-lg-3 col-md-6 col-sm-12 pt-9 border rounded-3xl mt-4 bg-purple-900 hover:scale-105 transition duration-300 '>
            <p className=' bg-gradient-to-r from-green-500 to-black w-14 justify-center h-14 ml-25 rounded-2xl'>.</p>
            <p className=' text-amber-50 font-semibold text-2xl'>Responsive Design</p>
            <p className='text-amber-50'> Best experiencence for all devices and  screen  sizes.</p>

        </div> 


        </div>  


        <div className=' row  pt-9 pb-15 bg-gradient-to-r from-blue-900 to-purple-900 border  '   //ready to transform your idea
        >
            <div className='col-lg-12 col-md-12 col-sm-12 ' >

<span className=' text-amber-600 animate-pulse mt-50   '> <FaStar size={40}  className=' ' /> </span>
<p className=' text-amber-50 text-center text-3xl font-bold'>Ready to transform your ideas into reality?</p>
<p className=' text-amber-50'>Let's embark on this journey together. Schedule a consultation to discuss <br /> your project and discover how we can bring your ideas to life with excellence.

</p>

<button className='text-amber-50 h-12 w-40 mt-3 font-bold text-3xl  bg-gradient-to-r from-blue-600 to-blue-400  cursor-pointer hover:shadow-lg hover:shadow-blue-900 transition duration-300'>Start a project !</button>
 <p className='text-amber-50 pt-2'> Average reponse time : <span className='text-blue-600'> 2 hours </span></p>

</div>

        </div>


<div className= "row bg-black py-10">
  <div className="flex items-center justify-center gap-6 w-full px-10">

    {/* STEP 1 */}
    <div   className="flex flex-col items-center">
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <FaUser className="text-white text-xl" />
      </div>
      <p className="mt-3 text-purple-300">Your Details</p>
    </div>

    {/* LINE */}
    <div className="flex-1 h-[3px] bg-gradient-to-r from-blue-500 to-purple-600"></div>

    {/* STEP 2 */}
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <FaCalendarAlt className="text-white text-xl" />
      </div>
      <p className="mt-3 text-purple-300">Project Detail</p>
    </div>

    {/* LINE */}
    <div className="flex-1 h-[3px] bg-gradient-to-r from-blue-500 to-purple-600"></div>

    {/* STEP 3 */}
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <FaCheck className="text-white text-xl" />
      </div>
      <p className="mt-3 text-purple-300">Confirmation</p>
    </div>

  </div>
</div>



<div className='row bg-black gap-3 justify-center pt-9 pb-9  ' id='Contactinfo' >




    { info==="Personal" &&  (
<>      
    <div className='col-lg-8 col-md-8 col-sm-8 pt-9 pb-9 '>

        <p className='text-white font-bold text-3xl'> <span><FaUser className="text-white text-xl" /></span> Personal details </p>
        <label htmlFor="name"  className=' text-amber-50 text-2xl'>Full Name</label> 
        <br />
        <input type="text" id="name"
        name='name'
         placeholder=' Enter Your Name'
         value={formData.name}
         onChange={handleChange}

        
         className=' w-60 h-10 ml-9 border rounded-lg bg-gray-800 text-white  ' />
        <br />

        <label htmlFor="name" className=' text-amber-50 text-2xl'>Phone number</label> 
        <br />
        <input type="text" id="contact" name='contact'
        
         placeholder='contact' 
        value={formData.contact}
        onChange={handleChange}
          className=' w-60 h-10 ml-9 border rounded-lg bg-gray-800 text-white  ' />
        <br />
        <label htmlFor="name" className=' text-amber-50 text-2xl'>Email</label> 
        <br />
        <input type="Email" id="email" placeholder=' Email'  name="email"
        value={formData.email}
        onChange={emailChange}
         className=' w-60 h-10 ml-9 border rounded-lg bg-gray-800 text-white  ' />

         <br />

         {showVerifyBtn && (
  <button
    className="mt-3 ml-9 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition"
    onClick={() => alert("Verification code sent!")}
  >
    Send Verification Code
  </button>
)}
<br />

        <label htmlFor="name" className=' text-amber-50 text-2xl'>Componay</label> 
        <br />
        <input type="text" id="name" placeholder=' Company' name='company'  
      value={formData.company}
      onChange={handleChange}  
        
        className=' w-60 h-10 ml-9 border rounded-lg bg-gray-800 text-white  ' />
        <br />

        
        
        <div className=' mt-12 h-12 flex justify-center '>
        <p   onClick={ ()=>setinfo("detail")} className='text-amber-50    font-bold text-2xl border rounded-4xl  bg-gradient-to-r from-blue-600 to-blue-400  cursor-pointer hover:shadow-lg hover:shadow-blue-900 transition duration-300'>Project detail</p>
</div>
</div>

    </> )}
    





    { info==="detail" &&  (    
<>  

<p className=' text-amber-50 text-2xl' > Project Detail</p>


 <div onClick={()=>setprojects("1")} 
        className={`  col-lg-3 col-md-3 col-sm-3 mt-4 border rounded-3xl cursor-pointer transition-all duration-300
    ${
      projects === "1"
        ? "bg-gradient-to-r from-blue-500  scale-110"
        : "bg-gray-700"
    }
  `} >
    <div onClick={()=>setactivetab("website")} >
      
            <FaGlobeAsia className=' text-amber-50 ml-35 mt-5 ' size={30} />
            <p className=' text-amber-50 font-semibold text-2xl'> WEBSITE DEVELOPMENT</p>
            <p className=' text-amber-50'>custom websites and web applications</p>
            
        

            
        
                  
        </div>
        </div>

        


<div onClick={()=>setprojects("2")} 
        className={` col-lg-3 col-md-3 col-sm-3  mt-4 border rounded-3xl cursor-pointer transition-all duration-300
    ${
      projects === "2"
        ? "bg-gradient-to-r from-blue-500  scale-110"
        : "bg-gray-700"
    }
  `} >
    <div onClick={()=>setactivetab("ui")} >
      
            <FaPerson className=' text-amber-50 ml-35 mt-5 ' size={30} />
            <p className=' text-amber-50 font-semibold text-2xl'> UI/UX DESIGN</p>
            <p className=' text-amber-50'>User interface and experience design</p>
        
        
                  
        </div>
        </div>



        <div onClick={()=>setprojects("3")} 
        className={` col-lg-3 col-md-3 col-sm-3 mt-4 border rounded-3xl cursor-pointer transition-all duration-300
    ${
      projects === "3"
        ? "bg-gradient-to-r from-blue-500  scale-110"
        : "bg-gray-700"
    }
  `} >

    <div onClick={()=>setactivetab("consulting")} >
      
            <FaPerson className=' text-amber-50 ml-35 mt-5 ' size={30} />
            <p className=' text-amber-50 font-semibold text-2xl'> CONSULTING</p>
            <p className=' text-amber-50'>Technical consulting & strategy</p>
        
        
                  
        </div>
        </div>

        




 










    <div className=' col-lg-4 col-sm-4 col-md-4 pt-12 '>
        <label htmlFor="bduget" className=' text-amber-50'> Project Bduget</label>
        <br />
        
        <select name="budget" id="budget" className=' text-amber-50  border rounded-4xl w-70'>
            <option value="option1" className='bg-black'> $5k-$10k </option>
            <option value="option2" className='bg-black ' > $10k-$20k </option>
            <option value="option3" className=' bg-black'  > $20k-$30k </option>
            <option value="option4" className=' bg-black'>  $30k+ </option>
        </select>


    </div>

<div className=' col-lg-6 col-sm-6 col-md-6 pt-12 '>
    <label htmlFor=" time" className=' text-amber-50' > Project time</label>
    <br />
        <select name="Time" id="time" className=' text-amber-50 border rounded-4xl w-50 '>
            <option value="option1"  className=' text-amber-50' > $5k-$10k </option>
            <option value="option2"> 1 month </option>
            <option value="option3"> 2 month </option>
            <option value="option4"> 3 month </option>
        </select>


    </div>


    <div className=' col-lg-12 col-md-12 col-sm-12 pb-9'>
        <label htmlFor=" Title" className=' text-amber-50'> Project Title</label>
        <br />
        <input type="text" placeholder=' Brief project title or subject' name='title'
        value={formData.title }
        onChange={handleChange}

        
        
        className=' border rounded-4xl text-amber-50  w-99 ' />
        <br />

<label htmlFor=" Title" className=' text-amber-50'> Project Detail and Requirement</label>
        <br />
        <textarea name="discription" id="discription" 
        value={formData.discription }
        onChange={handleChange}
        
        
        className=' border rounded-2xl  w-99 text-amber-50'  ></textarea>
        <br />
<button onClick={ ()=>setinfo("Personal")}  className='text-amber-50 w-40 h-12 mt-3 font-bold text-3xl  bg-gradient-to-r from-blue-600 to-blue-400  cursor-pointer hover:shadow-lg hover:shadow-blue-900 transition duration-300'>BACK</button>
<button  onClick={ ()=>setinfo(" review")}  className= 'text-amber-50 w-40 h-12 mt-3 ml-60 font-bold text-3xl  bg-fuchsia-950 cursor-pointer hover:shadow-lg hover:shadow-fuchsia-900 transition duration-300'>REVIEW & SEND</button>


    </div>


        
    
        </> )}
     
    

<div className=' col-lg-4 col-md-4 col-sm-4'>
    <label htmlFor="" className=' text-amber-50 text-2xl'> Name</label>

 <p className='text-amber-50 ' > {formData.name}</p>

 <label htmlFor="" className=' text-amber-50 text-2xl'>Email</label>
 <p className=' text-amber-50' > {formData.email}</p>
 
  


</div>


<div className=' col-lg-6 col-md-6 col-sm-6'>
<label htmlFor="" className='text-amber-50  text-2xl' > Tittle</label>
 <p className=' text-amber-50'> {formData.title}</p>
 <label htmlFor="" className='text-amber-50 text-2xl '> Discription</label>
  <p className=' text-amber-50'> {formData.discription}</p>
  

</div>

 <div className='col-lg-12 col-md-12'>
 <label htmlFor="" className='text-amber-50 text-2xl '> Project Type</label>
   { activetab === "website" && ( <>
   <p className=' text-amber-50' > Website</p>
   
  </> ) }
     { activetab === "ui" && ( <>
   <p className=' text-amber-50' > ui/ux</p>
   
  </> ) }
     { activetab === "consulting" && ( <>
   <p className='text-amber-50'  > Consulting</p>
   
  </> ) }

 </div>

<div className=' col-lg-12 col-md-12 col-sm-12'>
    <button onClick={ ()=>setinfo("Personal")} className='text-amber-50 w-40 h-12 mt-3 font-bold text-3xl  bg-gradient-to-r from-blue-600 to-blue-400  cursor-pointer hover:shadow-lg hover:shadow-blue-900 transition duration-300'>Edit detail</button>
<button  onClick={ ()=>(alert(" message send") ) } className= 'text-amber-50 w-40 h-12 mt-3 ml-60 font-bold text-3xl  bg-fuchsia-950 cursor-pointer hover:shadow-lg hover:shadow-fuchsia-900 transition duration-300'>SEND </button>
</div>

</div>




<div className='row pt-9 pb-12 bg-gradient-to-r from-blue-900 to-purple-900 justify-center gap-3'>
    <div className='col-lg-3 col-md-3 col-sm-12'>
       
            <div>
              <h2 className="text-xl font-bold text-amber-50"> <span className=' w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white text-xl '>  ✦ </span>
            Muhammad Huzaifa Khan Niazi
              </h2>
              <p className="text-gray-200 leading-relaxed mb-6">
            Crafting beautiful, functional web experiences with modern
            technologies. Passionate about clean code and intuitive design.
          </p>
<div className="flex gap-4">
            <a className="p-3 rounded-lg bg-[#111827] hover:bg-blue-500 transition">
              <FaGithub />
            </a>
            <a className="p-3 rounded-lg bg-[#111827] hover:bg-blue-500 transition">
              <FaLinkedin />
            </a>
            <a className="p-3 rounded-lg bg-[#111827] hover:bg-blue-500 transition">
              <FaInstagram />
            </a>
          </div>

              </div>

    </div>





    <div className='col-lg-3 col-md-3 col-sm-12'>

<div>
          <h3 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="text-blue-400">›</span> Quick Links
          </h3>

          <ul className="space-y-4">
            <li onClick={ ()=> document.getElementById("Home").scrollIntoView ( { behavior:"smooth"})}  className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <span>👤</span> Home
            </li>
            <li onClick={ ()=> document.getElementById("Projects").scrollIntoView ( { behavior:"smooth"})} className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <span>{"</>"}</span> Projects
            </li>
            <li onClick={ ()=>document.getElementById("services").scrollIntoView({ behavior:"smooth"  })  }  className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <span>🧰</span> Services
            </li>
            <li  onClick={ ()=> document.getElementById("contact").scrollIntoView ( { behavior:"smooth"})} className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <span>✉</span> Contact
            </li>
          </ul>
        </div>

    </div>



<div className=' col-lg-3 col-md-3 col-sm-12'>

<div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-600">
              <FaEnvelope className="text-amber-50"  />
              <p className='text-amber-50'>niazih726@gmail.com</p>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-600">
              <FaMapMarkerAlt className="text-amber-50" />
              <p className=' text-amber-50' >Based in Rawalpindi, Pakistan</p>
            </div>

            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl hover:shadow-lg transition">
              Let's Work Together <FaArrowRight />
            </button>
          </div>
        </div>


</div>


























      </>  
        

    )
}
export default Port;