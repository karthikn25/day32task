import React,{useEffect, useState} from "react";
import Base from "../Base/Base";
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { useHistory,useParams } from "react-router-dom";





function Updation({user,setUser}){
  const{id}=useParams();
  const editUser = user[id];  
  const [name,setName]=useState("");
  const [position,setPosition]=useState("");
  const [gender,setGender]=useState("");
  const [age,setAge]=useState("");
  const [phone,setPhone]=useState("");
  const history=useHistory("");

  useEffect(()=>{
    setName(editUser.name)
    setPosition(editUser.position)
    setGender(editUser.gender)
    setAge(editUser.age)
    setPhone(editUser.phone)
    
    console.log("id is",id)
  },[editUser])

  async function updateUser(){
   
    const updatedObject ={
      name : name,
      position : position,
      gender : gender,
      age : age,
      phone : phone
    }

    const response=await fetch(`https://644b33c04bdbc0cc3a8ce2dd.mockapi.io/Users/${editUser.id}`,{
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
  user[id]=updatedObject
  setUser([...user])
  history.push("/users") 
 }}
  
  
  return(
        <Base>
        <h1 style={{color:"darkgray",textAlign:"center"}}>Updation</h1>
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
        <InputLabel htmlFor="outlined-adornment-amount">Position</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          label="Amount"
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </FormControl>
      <br/>
      <FormControl fullWidth sx={{ m: 0 }}>
      <InputLabel htmlFor="outlined-adornment-amount">Gender</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start"></InputAdornment>}
        label="Amount"
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
    </FormControl>
    <br/>
    <FormControl fullWidth sx={{ m: 0 }}>
    <InputLabel htmlFor="outlined-adornment-amount">Age</InputLabel>
    <OutlinedInput
      id="outlined-adornment-amount"
      startAdornment={<InputAdornment position="start"></InputAdornment>}
      label="Amount"
      type="number"
      value={age}
      onChange={(e) => setAge(e.target.value)}
    />
  </FormControl>
  <br/>

<br/>
<FormControl fullWidth sx={{ m: 0 }}>
<InputLabel htmlFor="outlined-adornment-amount">Phone No</InputLabel>
<OutlinedInput
  id="outlined-adornment-amount"
  startAdornment={<InputAdornment position="start"></InputAdornment>}
  label="Amount"
  type="text"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
/>
</FormControl>
<br/><Button variant="contained"  onClick={updateUser} href="" style={{width:"20vw",marginLeft:"15vw"}}>
Update
</Button>
        </div>
        </Base>
    )
}


export default Updation