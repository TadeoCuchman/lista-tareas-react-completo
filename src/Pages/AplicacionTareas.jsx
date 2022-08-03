import React from "react";
import { Form } from "../Components/Form";
import { ListaDeTareas } from "../Components/ListaDeTareas";

export const AplicacionTareas = ({ tareas, setTareas }) => {
  return (
    <main>
      <h1>Lista de tareas!</h1>
      <Form setTareas={setTareas} tareas={tareas} />
      <h3>Tareas</h3>

      {tareas.length > 0 ? (
        <ListaDeTareas setTareas={setTareas} tareas={tareas} />
      ) : (
        <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
      )}
      <p className="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
    </main>
  );
};
