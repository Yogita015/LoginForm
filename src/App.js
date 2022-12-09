//For style-->
import React, { Component } from 'react';


//For pages-->
import {BrowserRouter,  Route, Routes} from "react-router-dom";
import Home from './pages/Home';

  
class App extends Component {
  render() {
    const myStyle={
        backgroundImage: 
 "url('page2.png')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: "auto 100%",
        backgroundRepeat: 'no-repeat',
        //opacity: 0.2,
        alignItems: 'center', 
        textAlign: 'center', 
    };
    return (
      
      <div style={myStyle} class="fw-bold" >
        
       <>
      
       <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<Home/>} />
       
       </Routes>
         
      </BrowserRouter> 
      

      
      
      </>
      </div>
      
    );
  }
}



export default App;
