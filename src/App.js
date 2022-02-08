import React, { useState, useEffect } from "react";
import Persona from "./person.jpg";

const App = () => {
  const [app, setApp] = useState({});

  const handleSubmit = async () => {
    const url = `https://breaking-bad-quotes.herokuapp.com/v1/quotes/`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    setApp(resultado[0]);
  };
 useEffect(()=>{
   handleSubmit()
 },[])

  const { quote, author } = app;

  return (
    <div className="contenedor">
      <div className="contenido-frase">
        <div className="texto">
          <h1>Breaking Bad</h1>
        </div>
        <div className="caja">
          <img className="img" src={Persona} alt="imagen" />
          <div className="frase">
            <p>Hello Word!</p>
            <p>these are random phrases</p>
            <p>{quote}</p>
            <p>{author}</p>
            <input
              type="button"
              value="cambia Contenido"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
      {/* <section>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section> */}
    </div>
  );
};

export default App;
