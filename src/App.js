import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import { useState, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";

const App = ()=> {
 const [users,setUsers] = useState([])
 const [user,setUser] = useState({})
 const [loading,setLoading] = useState(false)
 const [alert,setAlert] = useState(null)
 const [repos,setRepos] = useState([])
 

  //search
  const searchUsers = async (text) => {
    setLoading(true)
   
    const res =
      await axios.get(`https://api.github.com/search/users?q=${text}&lient_id=
  ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   
    setUsers(res.data.items);
    setLoading(false);
    // console.log(res.data.items)
    // console.log(res.data)
  };

  //set Alet
  const showAlert = (msg, type) => {
   
    setAlert({ msg, type })
    setTimeout(() => {
      
      setAlert(null)
    }, 5000);
  };

  //Get single user 
  const getUser = async (username) => {
    setLoading(true)
    const res =
      await axios.get(`https://api.github.com/users/${username}?client_id=
  ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  
    setUser(res.data)
    setLoading(false)
  }


  //Get User Repos
  const getUserRepos = async (username)=> {
    setLoading(true)
    const res =
      await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
  ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  
    setRepos(res.data)
    setLoading(false)

  }


 
    
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Routes>
              <Route
                exact path="/" element={
                  <Fragment>
                    <Search searchUsers={searchUsers} setAlert={showAlert}/>
                    <Users loading={loading}  users={users} />
                  </Fragment>
                }
              />
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/user/:login" element={<User getUser={getUser} user={user} 
              loading={loading} getUserRepos={getUserRepos} repos={repos}  />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  
}


export default App;
