import './App.css';
import { useState,useEffect } from 'react';
import { Route,Switch } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import AddBook from "./Component/AddBook"
import Updation from './Component/Updation';
import Booklist from "./Component/Booklist"



function App() {
  const [book,setBook]=useState([]);
  const [editBook,setEditBook]=useState({})
  useEffect(()=>{
    const getBook= async ()=>{
    const response=await fetch("https://644b33c04bdbc0cc3a8ce2dd.mockapi.io/Users",{
      method:"GET",
    });
    const data=await response.json();
    if(data){
      setBook(data)
    }
    }
    getBook();
    },[])
  return (
    <div className="App">
     
   
   <Switch>
   <Route exact path="/">
   <Dashboard/>
   </Route>
   <Route path="/addbook">
   <AddBook
   book={book}
   setBook={setBook}
   />
   </Route>
   <Route path="/edit/:id">
   <Updation
   book={book}
   setBook={setBook}
   editBook={editBook}
   />
   </Route>
   <Route path="/books">
   <Booklist
   book={book}
   setBook={setBook}
   setEditBook={setEditBook}
   />
   </Route>
  
   
   </Switch>
   
     
    </div>
  );
}

export default App;
