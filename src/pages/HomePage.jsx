import React from 'react';
import './HomePage.css'; 

function HomePage() {
  return (

    <div className="homepage-container"> 
      <h1>Página Principal</h1>
      <p>Bem-vindo ao seu site!</p>
      <a href="/login">Ir para o Login</a>
    </div>
  );
}

export default HomePage;