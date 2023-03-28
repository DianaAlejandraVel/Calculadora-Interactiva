import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props) {

 const es0perador = valor => {
  return isNaN(valor) && (valor != '.') && (valor != '=');
};

 return (
     <div
     className={`boton-contenedor ${es0perador(props.children) ? 'operador' : ''}`.trimEnd()}
     onClick={() => props.manejarClic(props.children)}>
      {props.children}
     </div>
   );
}

export default Boton;
