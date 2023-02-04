import React from "react";
import "../hojas-de-estilos/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testiomonio"
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt="Foto del chino"
      />
      <div className="contenedor-text-testimonio">
        <p className="nombre-testimonio">
          {props.nombre} en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en {props.empresa}
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}
export default Testimonio;
