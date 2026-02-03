import dropdown from './DropDown.png';
import { useState } from 'react';

function Navigation() {
    
    
    const [active, setActive] = useState(null);
    
    
        const toggleDropdown = (category) => {
        setActive(active === category ? "" : category);
        }

        return (
            <div>

          <div className=" bg-white-50   flex items-center justify-between ">
        <h3 className="text-red-700  lg:text-3xl md:text-3xl sm:text-2xl  top-7 font-bold  ">Bookapp</h3>
        
        
      
        
        <ul className=" lg:flex space-x-4 justify-center md:flex space-x-4 justify-center sm:flex space-x-3 justify-center  mt-2  ">
          <li onClick={()=>toggleDropdown('home')}
          
          className="p-2 lg:text-2xl md:text-2xl sm:text-1xl cursor-pointer"> <a href="/"> Home </a> 
           <img
                src={dropdown}
                alt="arrow"
                className={`w-4 h-4  mt-3 float-right transition-transform duration-200 ${
                  active === "home" ? "rotate-90" : "rotate-0"
                }`} />
          {active==='home' && (
          <ul className="absolute ">
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer"> <a href="/Home1 ">  Home 1</a></li>
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">Home 2</li>
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">Home 3</li>
            </ul>
            )}

          </li>
          <li onClick={()=>toggleDropdown('Vendors')}
          className="p-2 lg:text-2xl md:text-2xl sm:text-1xl cursor-pointer">Vendors 
           <img
                src={dropdown}
                alt="arrow"
                className={`w-4 h-4 mt-3 float-right transition-transform duration-200 ${
                  active === "Vendors" ? "rotate-90" : "rotate-0"
                }`} />
          {active==='Vendors' && (
          <ul className="absolute ">
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">Vendo 1</li>
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">vrn 2</li>
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">vme 3</li>
            </ul>
            )}
          </li>
          <li onClick={()=>toggleDropdown('Services')}
          
          className="p-2 lg:text-2xl md:text-2xl sm:text-1xl cursor-pointer">Services
           <img
                src={dropdown}
                alt="arrow"
                className={`w-4 h-4 mt-3 float-right transition-transform duration-200 ${
                  active === "Services" ? "rotate-90" : "rotate-0"
                }`} />
          {active==='Services' && (
          <ul className="absolute sm:bg-amber-50 lg:bg-transparent md:bg-transparent"> 
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">sr 1</li>
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">srtte 2</li>
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">sr 3</li>
            </ul>
            )}
          
          </li>
          <li  onClick={()=>toggleDropdown('pages')}
          className="p-2  lg:text-2xl md:text-2xl sm:text-1xl cursor-pointer">Pages
          <img
                src={dropdown}
                alt="arrow"
                className={`w-4 h-4 mt-3 float-right transition-transform duration-200 ${
                  active === "pages" ? "rotate-90" : "rotate-0"
                }`} />
          {active==='pages' && (
          <ul className="absolute sm:bg-white-50 ">
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">pg 1</li>
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">pg 2</li>
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">pg 3</li>
            </ul>
            )}
          </li>
          <li onClick={()=>toggleDropdown('blog')}
          className="p-2  lg:text-2xl md:text-2xl sm:text-1xl cursor-pointer">blog
          <img src={dropdown}
           alt="arrow"
           className={`w-4 h-4 lg:mt-3 -sm:mt-13 md:mt-1 float-right transition-transform duration-200 ${ active==='blog' ? 'rotate-90' : 'rotate-0'}` }
            />
           {active==='blog' && (
            <ul className="absolute ">
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">bl 1</li>
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">bl 2</li>
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">bl 3</li>
            </ul>
           )}
        
            
          
          </li>
          <li onClick={()=>toggleDropdown('Contact')}
          
          className="p-2  lg:text-2xl md:text-2xl sm:text-1xl cursor-pointer">Contact
          <img src={dropdown} 
          alt="arrow"
          className={` w-4 h-4 lg:mt-3 -sm:mt-13 md:mt-1 float-right transition-transform duration-200 ${active==='Contact'? 'rotate-90' : 'rotate-0' } `}/>
          {active ==='Contact' && (
          <ul className="absolute  bg-red-50 ">
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">ct 1</li>
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">ct 2</li>
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">ct 3</li>
            </ul>
            )}
         
          </li>
        </ul>

<button className="   text-amber-50 bg-red-600  lg:w-30 lg:h-11 lg:text-2xl   md:w-26 md:h-9 md:text-2xl     sm:w-20 sm:h-7 lg:text-1xl shadow-red-600 shadow-red-600/50 shadow-lg  border border-red-700 rounded-lg cursor-pointer "> login</button>

        </div> 
            </div>

        )
    }
    export default Navigation;