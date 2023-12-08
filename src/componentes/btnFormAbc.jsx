import React from "react";
import '../stylesheets/btnFormAbc.css'

function BtnFormAbc(props){
    
    

    return(
        
    <button className="btn-form-abc"
     onClick={() => props.manejarBoton(props.children)}>
        {props.children}</button>
        
    )
}

export default BtnFormAbc