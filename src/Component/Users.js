import React from "react";
import Base from "../Base/Base";
import Divider from '@mui/material/Divider';
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";



function Users({user,setUser}){
  const history=useHistory(""); 
  //delete operation of Users
  const deleteUser=async (usId)=>{

    const response=await fetch(`https://644b33c04bdbc0cc3a8ce2dd.mockapi.io/Users/${usId}`,{
     method:"DELETE",
     
    });
    const data=await response.json()
if(data){
     const remainingUser=user.filter((us,idx)=>us.id!== usId)
     setUser(remainingUser)
}
 }

  return(
      <Base>
        <h1 style={{color:"darkgray",textAlign:"center"}}>Users</h1>
        <Divider variant="middle" />
        <h2 style={{textAlign:"center"}}>The Users Of The User Friendly Application</h2>
        <Divider variant="middle" />
        
        
        <div className="container">
      
        <div className="card-container">
           {user.map((us,idx)=>(
            
            <div className="stud-card" key={idx}>
            <Card sx={{ maxWidth: 345 }}>
            <FontAwesomeIcon  style={{fontSize:"xx-large"}} icon={faUser}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {us.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {us.position}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {us.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {us.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {us.phone}
          </Typography>
        </CardContent>
        <div className="control">
          <Button size="small" onClick={()=>history.push(`edit/${idx}`)}>Update</Button>{" "}
          <Button size="small" onClick={()=>deleteUser(us.id)}>Log Out</Button>
          </div>
      </Card>
               
               
               
            
               
               
             </div>
           ))}
        </div>
        </div>
         
        
      </Base>
    )
}


export default Users