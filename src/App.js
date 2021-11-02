import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';

function App() {
 
  return (
    <div className="App">
      <Navbar  />
      <div className="container">
      <Users />

      </div>
     
    </div>
  );
}

export default App;
