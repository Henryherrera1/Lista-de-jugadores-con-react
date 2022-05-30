import React from "react";
import'./stylesheet/Descripcion.css' 

function Descripciones(props) {
  return (
    <div className="contenedor-Descripciones">
      <img className="imagen-Descripciones"
      src={require(`../imagenes/img-${props.imagen}.png`)}
      alt= 'foto cristiano'/>
      <div className="contenedor-texto-Descripciones">
        <p className="nombre-jugador">{props.nombre} de {props.pais}</p>
        <p className="equipo-actual">{props.equipo}</p>
        <p className="descripcion">{props.descripcion}</p>
      </div>
    </div>
  );
}

export default Descripciones;