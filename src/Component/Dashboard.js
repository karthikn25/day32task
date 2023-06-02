import React from "react";
import Base from "../Base/Base";
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";


function Dashboard(){
    return(
    <Base>
    <h1 style={{color:"darkgray",textAlign:"center"}}>Dashboard</h1>
    <Divider variant="middle" />
    <h2 style={{textAlign:"center"}}>Welcome To User Friendly Application</h2>
    <Divider variant="middle" />
    <div className="das-icon"><FontAwesomeIcon icon={faPaperPlane} /></div>
    
    </Base>
    )
}



export default Dashboard