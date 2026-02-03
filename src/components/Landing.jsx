
import  { useState  } from "react";
import Navigation from "./Navigation";
import Card from"./card";
import Footer from "./Footer";
import dropdown from './DropDown.png';
import doctor from './download.jpeg'; 
import { FaHeart } from "react-icons/fa"; 
import { FaLocationDot } from "react-icons/fa6";

import img from "./team1.jpg";   


function Landing ()
{

    return(

        <div  >
          <Navigation/>
          <Card/>
          
      

<div>
  <Footer/>
</div>
    
  
  

   </div>
    )
    }

export default Landing;