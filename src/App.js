
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import { Component } from 'react/cjs/react.production.min';
import PropTypes from  'prop-types' 
import axios from 'axios';
import  Alert from './components/layout/Alert'


class App extends Component {

state = {
  users:[],
  loading:false,
  alert:null
}

static propTypes ={
  searchUsers:PropTypes.func.isRequired
}
//search
  searchUsers = async text =>{
    this.setState({loading:true})
    const res = await  axios.get(`https://api.github.com/search/users?q=${text}&lient_id=
  ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  this.setState({users:res.data.items, loading:false})
  // console.log(res.data.items)
  // console.log(res.data)
  }

  //set Alet
  setAlert = (msg,type) => {
    this.setState({alert:{msg, type}})
    setTimeout(() => {
      this.setState({alert: null})
    }, 5000);
  }
 render(){
  return ( 
    <div className="App">
      <Navbar  />
      <div className="container">
        <Alert alert={this.state.alert} />
        <Search 
        searchUsers={this.searchUsers}
        setAlert={this.setAlert}
         />
      <Users loading={this.state.loading} users={this.state.users} />

      </div>
     
    </div>
  );
 }
}

export default App;
