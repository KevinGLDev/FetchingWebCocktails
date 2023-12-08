import React, { useState } from "react";
import '../stylesheets/formulario.css'

function Formulario(props){

    const [input,setInput] = useState('')

    const manejarCambio = e =>{
        setInput(e.target.value)
        
    }
    const mandarInput = e =>{
        e.preventDefault()
        props.onSubmit(input)
    }

    return(
        <div className="formulario">
            <form onSubmit={mandarInput} action="">
                <input placeholder="Margarita..." onChange={manejarCambio} type="text" name="" id="input-text" />
                <input id = 'btn-submit'type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Formulario