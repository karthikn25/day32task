import './App.css';
import { useState,useEffect } from 'react';
import { Route,Switch } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Login from './Component/Login';
import Updation from './Component/Updation';
import Users from './Component/Users';



function App() {
  const [user,setUser]=useState([]);
  const [editUser,setEditUser]=useState({})
  useEffect(()=>{
    const getUsers= async ()=>{
    const response=await fetch("https://644b33c04bdbc0cc3a8ce2dd.mockapi.io/Users",{
      method:"GET",
    });
    const data=await response.json();
    if(data){
      setUser(data)
    }
    }
    getUsers();
    },[])
  return (
    <div className="App">
     
   
   <Switch>
   <Route exact path="/">
   <Dashboard/>
   </Route>
   <Route path="/login">
   <Login
   user={user}
   setUser={setUser}
   />
   </Route>
   <Route path="/edit/:id">
   <Updation
   user={user}
   setUser={setUser}
   editUser={editUser}
   />
   </Route>
   <Route path="/users">
   <Users
   user={user}
   setUser={setUser}
   setEditUser={setEditUser}
   />
   </Route>
  
   
   </Switch>
   
     
    </div>
  );
}

export default App;
