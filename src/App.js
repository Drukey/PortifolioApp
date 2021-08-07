import React from 'react'
import './App.css'
import Header from './components/BackToTop'
import AboutMe from './components/AboutMe'

import InfoCards from './components/InfoCards'
import Footer from './components/Footer'

import './css/bootstrap.min.css'

// import background from "./img/marvin.jpg";
// Below statement is div prop for local directory bg display
// style={{ backgroundImage: `url(${background})` }}

function App() {
  return (
  <div className="App">
    <div >   
       <Header/> 
    </div>


   <div>   
   <AboutMe/>
   </div>



   <div>   
    <InfoCards/>
    </div>


    
    
    <br/>

    <div>   
    <Footer/>
    </div>

  
  </div>  
  );
}

export default App;
