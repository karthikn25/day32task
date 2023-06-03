import React from "react";
import Base from "../Base/Base";
import Divider from '@mui/material/Divider';
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";



function Booklist({book,setBook}){
  const history=useHistory(""); 
  //delete operation of Books
  const deleteBook=async (bokId)=>{
   console.log(bokId)
    const response=await fetch(`https://644b33c04bdbc0cc3a8ce2dd.mockapi.io/Users/${bokId}` , {
     method:"DELETE"
     
    });
    const data=await response.json()
if(data){
     const remainingBooks=book.filter((bok,idx)=>bok.id!== bokId)
     setBook(remainingBooks)
}
 }

  return(
      <Base>
        <h1 style={{color:"darkgray",textAlign:"center"}}>Books</h1>
        <Divider variant="middle" />
        <h2 style={{textAlign:"center"}}>Available Books of This Library</h2>
        <Divider variant="middle" />
        
        
        <div className="container">
      
        <div className="card-container">
          {book.map((bok,idx)=>(
            <div className="stud-card" key={idx}>
            <Card sx={{ maxWidth: 345 }}>
            <FontAwesomeIcon icon={faBook}  style={{fontSize:"xx-large"}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {bok.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {bok.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {bok.line}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {bok.order}
          </Typography>
       
        </CardContent>
        <div className="control">
          <Button size="small" onClick={()=>history.push(`edit/${idx}`)}>Update</Button>{" "}
          <Button size="small" onClick={()=>deleteBook(bok.id)}>Delete</Button>
          </div>
      </Card>
            
            
            
            
            
            
            
            
            </div>
          ))}
        </div>
        </div>
         
        
      </Base>
    )
}


export default Booklist