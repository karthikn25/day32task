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
  author : yup.string().required("Please fill in the Author"),
  line:yup.number().required("Please fill the line"),
  order : yup.number().required("Please fill the Order"),
  

 })


function AddBook({book,setBook}){
            
    const {handleSubmit,values,handleChange,handleBlur,touched,errors} = useFormik({
      initialValues : {
        name:"",
        author:"",
        line:"",
        order:"",
       
      },
      validationSchema : filedValidationSchema,
      onSubmit : (newBook)=>{
        console.log("onsubmit",newBook)
        createBook(newBook)
      }

    })
  
            // const [name,setName]=useState("");
            // const [author,setauthor]=useState("");
            // const [line,setGender]=useState("");
            // const [order,setAge]=useState("");
            // const [phone,setPhone]=useState("");
            const history=useHistory("");
            
       
           
            const createBook = async (newBook) =>{
                // const newbooks={
                //   name:name,
                //   author:author,
                //   line:line,
                //   order:order,
                //   phone:phone
                // }
              
              
              
              const response=await fetch("https://644b33c04bdbc0cc3a8ce2dd.mockapi.io/Users",{
                  method:"POST",
                  body:JSON.stringify(newBook),
                  headers:{
                    "Content-Type":"application/json"
                  },
                })
              const data=await response.json()
             setBook([...book,data])
             history.push("/book-list");
             }  
  
  return(
        <Base>
        <h1 style={{color:"darkgray",textAlign:"center"}}>AddBook</h1>
        <Divider variant="middle" />
        <div className="login-page">
        <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ m: 0 }}>
          <InputLabel htmlFor="outlined-adornment-amount"
          
          >Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment author="start"></InputAdornment>}
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
      
        >Author</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment author="start"></InputAdornment>}
          label="Amount"
          name="author"
          type="author"
          value={values.author}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </FormControl>
      <div style={{color:"crimson"}}>{touched.author && errors ? errors.author:""}</div>
      <br/><br/>
      <FormControl fullWidth sx={{ m: 0 }}>
      <InputLabel htmlFor="outlined-adornment-amount"
     
      >Line</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment author="start"></InputAdornment>}
        label="Amount"
        name="line"
        type="line"
        value={values.line}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </FormControl>
    <div style={{color:"crimson"}}>{touched.line && errors ? errors.line:""}</div>
    <br/><br/>
    <FormControl fullWidth sx={{ m: 0 }}>
    <InputLabel htmlFor="outlined-adornment-amount"
    
    >Order</InputLabel>
    <OutlinedInput
      id="outlined-adornment-amount"
      startAdornment={<InputAdornment author="start"></InputAdornment>}
      label="Amount"
      name="order"
      type="order"
    value={values.order}
    onBlur={handleBlur}
    onChange={handleChange}
    />
  </FormControl>
  <div style={{color:"crimson"}}>{touched.order && errors ? errors.order:""}</div>
  <br/><br/>

<br/>
<Button variant="contained" type="submit"  href="" style={{width:"15vw",marginLeft:"2vw"}}>
AddBook
</Button></form>
        </div>
        </Base>
    )
}


export default AddBook