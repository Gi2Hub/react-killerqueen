import React  from "react";
import './somarsubtrair.css';
import{useState} from 'react';

function Index() {
  const [numero, setNumero]= useState(0);
return (
  <div className="textdiv">
    <h1>Valor do número é: {numero}</h1>
      <button onClick={()=>{setNumero(numero -1)}}>Subtrair</button>
      <button onClick={()=>{setNumero(numero +1);}}>Somar</button>
  </div>
  );
}

export default Index;