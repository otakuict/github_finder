import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import { Component, Fragment } from "react/cjs/react.production.min";
import PropTypes from "prop-types";
import axios from "axios";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";

class App extends Component {
  state = {
    users: [],
    user:{},
    loading: false,
    alert: null,
    repos:[]
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };
  //search
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res =
      await axios.get(`https://api.github.com/search/users?q=${text}&lient_id=
  ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false });
    // console.log(res.data.items)
    // console.log(res.data)
  };

  //set Alet
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  //Get single user 
  getUser = async (username) => {
    this.setState({ loading: true });
    const res =
      await axios.get(`https://api.github.com/users/${username}?client_id=
  ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data, loading: false });
  }


  //Get User Repos
  getUserRepos = async (username)=> {
    this.setState({ loading: true });
    const res =
      await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
  ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ repos: res.data, loading: false });

  }


  render() {
    
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Routes>
              <Route
                exact path="/" element={
                  <Fragment>
                    <Search searchUsers={this.searchUsers} setAlert={this.setAlert}/>
                    <Users loading={this.state.loading}  users={this.state.users} />
                  </Fragment>
                }
              />
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/user/:login" element={<User getUser={this.getUser} user={this.state.user} 
              loading={this.state.loading} getUserRepos={this.getUserRepos} repos={repos}  />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
