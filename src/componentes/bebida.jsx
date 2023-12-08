import React from "react";

import '../stylesheets/bebida.css'


function Bebida(props){
    return(
        <div className="contenedor-bebida">
        <img id = 'img'src={props.img} alt="imagen-bebida" />
        <h3>{props.title}</h3>
        <h3>Categoria: {props.category}</h3>
        <h4>Ultima Actualizacion: {props.date}</h4>
        </div>

    )
}


export default Bebida