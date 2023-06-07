import React from "react";
import { Topbar } from "../Component/Topbar";
import { useHistory,useParams } from "react-router-dom";
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Base({children}){
    const history=useHistory("");
    const{id}=useParams();
     return(
        <div className="base-design">
        <div className="top-bar">
        <Topbar/>
        </div>
        <div className="left-bar">
        <div className="nav-bar">
        <Link to="/" style={{fontSize:"20px",color:"white"}} onClick={()=>history.push("/")}>Dashboard</Link> 
        <Divider variant="middle" /> 
        <Link to="/addbook" style={{fontSize:"20px",color:"white"}} onClick={()=>history.push("/addbook")}>Adding Book</Link>
         <Divider variant="middle" /> 
         <Link to="/books" style={{fontSize:"20px",color:"white"}} onClick={()=>history.push("/books")}>Books </Link>
      
       </div>
        </div>
        <div className="content">
        {children}
        </div>
        
        </div>
         
   
     )
 }
 
 export default Base
