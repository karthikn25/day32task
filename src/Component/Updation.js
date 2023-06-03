import React,{useEffect, useState} from "react";
import Base from "../Base/Base";
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { useHistory,useParams } from "react-router-dom";





function Updation({book,setBook}){
  const{id}=useParams();
  const editBook = book[id];  
  const [name,setName]=useState("");
  const [author,setAuthor]=useState("");
  const [line,setLine]=useState("");
  const [order,setOrder]=useState("");
 
  const history=useHistory("");

  useEffect(()=>{
    setName(editBook.name)
    setAuthor(editBook.author)
    setLine(editBook.line)
    setOrder(editBook.order)
    
    
    console.log("id is",id)
  },[editBook])

  async function updateBook(){
   
    const updatedObject ={
      name : name,
      author : author,
      line : line,
      order : order
      
    }

    const response=await fetch(`https://644b33c04bdbc0cc3a8ce2dd.mockapi.io/Users/${editBook.id}`,{
  method:"PUT",
  body:JSON.stringify(updatedObject),
  headers:{
    "Content-Type":"application/json"
  }
}
)
const data=await response.json()



if(data){
  console.log(updatedObject)
  book[id]=updatedObject
  setBook([...book])
  history.push("/books") 
 }}
  
  
  return(
        <Base>
        <h1 style={{color:"darkgray",textAlign:"center"}}>Update book</h1>
        <Divider variant="middle" />
        <div className="login-page">
        <FormControl fullWidth sx={{ m: 0 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Amount"
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <br/>
        <FormControl fullWidth sx={{ m: 0 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Author</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          label="Amount"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </FormControl>
      <br/>
      <FormControl fullWidth sx={{ m: 0 }}>
      <InputLabel htmlFor="outlined-adornment-amount">Line</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start"></InputAdornment>}
        label="Amount"
        type="number"
        value={line}
        onChange={(e) => setLine(e.target.value)}
      />
    </FormControl>
    <br/>
    <FormControl fullWidth sx={{ m: 0 }}>
    <InputLabel htmlFor="outlined-adornment-amount">Order</InputLabel>
    <OutlinedInput
      id="outlined-adornment-amount"
      startAdornment={<InputAdornment position="start"></InputAdornment>}
      label="Amount"
      type="number"
      value={order}
      onChange={(e) => setOrder(e.target.value)}
    />
  </FormControl>
  <br/>

<br/>
<Button variant="contained"  onClick={updateBook} href="" style={{width:"20vw",marginLeft:"15vw"}}>
Update 
</Button>
        </div>
        </Base>
    )
}


export default Updation
