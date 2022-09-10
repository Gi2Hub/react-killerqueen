import React  from "react";
import './header.css';

function Index() {
return (
  <nav className="header">
    <header>
      <h1 style={{fontSize:'40px'}}>Killer Queen</h1>
      <ul className="button">
        <li><a href="#">Botão</a></li>
        <li><a href="#">Botão</a></li>
        <li><a href="#">Botão</a></li>
        <li><a href="#">Botão</a></li>
        <li><a href="#">Botão</a></li>
      </ul>
    </header>
  </nav>
  );
}

export default Index;