import "./App.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Home from "./components/pages/Home";
import {  Fragment } from "react";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/alertState";


const App = ()=> {


 
  //set Alet
 

  
    
    return (
      <GithubState>
        <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert  />
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/user/:login" element={<User />} />

              
              <Route  path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  
}


export default App;
