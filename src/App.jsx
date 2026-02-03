import { useState } from 'react'    

import './App.css'

import {  BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './components/Portfolio';
import Landing from './components/Landing'
import Home1 from './components/Home1'
import Footer from './components/Footer'  

import Navigation from './components/Navigation'

function App() {
  

  return (
   <>
   <BrowserRouter>
<Portfolio/>
   


    
    
    </BrowserRouter>
   
  
  </>
    
  


    
  )
}

export default App
