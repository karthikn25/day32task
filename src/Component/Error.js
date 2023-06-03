import React from "react";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom";

function Error(){
    const history=useHistory("");
    return(
        <Base>
        <div className="error">
        <h2>The page is not Found</h2>
        <p>So Please Click the below button</p>
        <button onClick={()=>history.push("/")}>Back to site</button>
        </div>
        </Base>
    )
}

export default Error