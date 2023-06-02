import React,{useState} from "react";
import Base from "../Base/Base";
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import * as yup from "yup"
import { useFormik } from "formik";

export const filedValidationSchema = yup.object({
  name : yup.string().required("Please fill in name"),
  position : yup.string().required("Please fill in the Position"),
  gender:yup.string().required("Please fill your gender"),
  age : yup.number().required("Please fill your Age"),
  phone : yup.string().required("Please Fill your mobile number").min(5,"Please fill the valid number")

 })


function Login({user,setUser}){
            
    const {handleSubmit,values,handleChange,handleBlur,touched,errors} = useFormik({
      initialValues : {
        name:"",
        position:"",
        gender:"",
        age:"",
        phone:""
      },
      validationSchema : filedValidationSchema,
      onSubmit : (newUserData)=>{
        console.log("onsubmit",newUserData)
        createUser(newUserData)
      }

    })
  
            // const [name,setName]=useState("");
            // const [position,setPosition]=useState("");
            // const [gender,setGender]=useState("");
            // const [age,setAge]=useState("");
            // const [phone,setPhone]=useState("");
            const history=useHistory("");
            
       
           
            const createUser = async (newUser) =>{
                // const newUsers={
                //   name:name,
                //   position:position,
                //   gender:gender,
                //   age:age,
                //   phone:phone
                // }
              
              
              
              const response=await fetch("https://644b33c04bdbc0cc3a8ce2dd.mockapi.io/Users",{
                  method:"POST",
                  body:JSON.stringify(newUser),
                  headers:{
                    "Content-Type":"application/json"
                  },
                })
              const data=await response.json()
             setUser([...user,data])
             history.push("/users");
             }  
  
  return(
        <Base>
        <h1 style={{color:"darkgray",textAlign:"center"}}>Login</h1>
        <Divider variant="middle" />
        <div className="login-page">
        <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ m: 0 }}>
          <InputLabel htmlFor="outlined-adornment-amount"
          
          >Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Amount"
            name="name"
            type="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormControl>
        <div style={{color:"crimson"}}>{touched.name && errors ? errors.name:""}</div>
        <br/><br/>
        <FormControl fullWidth sx={{ m: 0 }}>
        <InputLabel htmlFor="outlined-adornment-amount"
      
        >Position</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          label="Amount"
          name="position"
          type="position"
          value={values.position}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </FormControl>
      <div style={{color:"crimson"}}>{touched.position && errors ? errors.position:""}</div>
      <br/><br/>
      <FormControl fullWidth sx={{ m: 0 }}>
      <InputLabel htmlFor="outlined-adornment-amount"
     
      >Gender</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start"></InputAdornment>}
        label="Amount"
        name="gender"
        type="gender"
        value={values.gender}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </FormControl>
    <div style={{color:"crimson"}}>{touched.gender && errors ? errors.gender:""}</div>
    <br/><br/>
    <FormControl fullWidth sx={{ m: 0 }}>
    <InputLabel htmlFor="outlined-adornment-amount"
    
    >Age</InputLabel>
    <OutlinedInput
      id="outlined-adornment-amount"
      startAdornment={<InputAdornment position="start"></InputAdornment>}
      label="Amount"
      name="age"
      type="age"
    value={values.age}
    onBlur={handleBlur}
    onChange={handleChange}
    />
  </FormControl>
  <div style={{color:"crimson"}}>{touched.age && errors ? errors.age:""}</div>
  <br/><br/>

<br/>
<FormControl fullWidth sx={{ m: 0 }}>
<InputLabel htmlFor="outlined-adornment-amount"

>Phone No</InputLabel>
<OutlinedInput
  id="outlined-adornment-amount"
  startAdornment={<InputAdornment position="start"></InputAdornment>}
  label="Amount"
  name="phone"
  type="phone"
value={values.phone}
onBlur={handleBlur}
onChange={handleChange}
/>
</FormControl>
<div style={{color:"crimson"}}>{touched.phone && errors ? errors.phone:""}</div>
<br/><br/><Button variant="contained" type="submit"  href="" style={{width:"15vw",marginLeft:"2vw"}}>
Login
</Button></form>
        </div>
        </Base>
    )
}


export default Login