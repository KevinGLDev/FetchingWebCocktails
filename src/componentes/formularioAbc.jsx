import React from "react";
import '../stylesheets/formularioAbc.css'
import BtnFormAbc from "./btnFormAbc";


export default function FormularioAbc(props){

    const abecedario = ['A','B','C','D','E','F','G','H','K','L','M','N','O','P',
                        'Q','R','S','T','X','Y','Z']


    const manejarValor = input =>{
        props.onSubmit(input)
    }


    return(
        <div className="contenedor-formularioAbc">
        
            {abecedario.map(indice=>
                <BtnFormAbc manejarBoton ={manejarValor}>{indice}</BtnFormAbc>
            )}

            
        </div>
    )
}


