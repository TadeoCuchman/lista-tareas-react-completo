import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <Link to="/tareasApp">
        <button>Entrar a Lista de Tareas</button>
      </Link>
      <Link to="/ejercicio1">
        <button>Ejercicio 1</button>
      </Link>
      <Link to="/ejercicio2">
        <button>Ejercicio 2</button>
      </Link>
      <Link to="/ejercicio3">
        <button>Ejercicio 3</button>
      </Link>
    </div>
  );
};
