import React from "react";
import { Topbar } from "../Component/Topbar";
import { useHistory,useParams } from "react-router-dom";
import Divider from '@mui/material/Divider';


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
        <a href="" style={{fontSize:"20px",color:"white"}} onClick={()=>history.push("/")}>Dashboard</a>
        <Divider variant="middle" />
        <a href="" style={{fontSize:"20px",color:"white"}} onClick={()=>history.push("/login")}>Login</a>
        <Divider variant="middle" />
       <a href="" style={{fontSize:"20px",color:"white"}} onClick={()=>history.push("/users")}>Users</a>
      
       </div>
        </div>
        <div className="content">
        {children}
        </div>
        
        </div>
         
   
     )
 }
 
 export default Base