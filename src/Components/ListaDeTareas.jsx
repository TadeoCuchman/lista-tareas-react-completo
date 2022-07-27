import React from "react";

import "./ListaDeTareas.css";
export const ListaDeTareas = (props) => {
  
  function completarTarea(id, completado) {
    const nuevasTareas = props.tareas.filter((tarea, i) => id != i);
    const completarTarea = props.tareas.filter((tarea, i) => id == i);
    {
      completado
        ? props.setTareas([
            ...nuevasTareas,
            {
              descripcion: completarTarea[0].descripcion,
              prioridad: completarTarea[0].prioridad,
              completado: completado,
            },
          ])
        : props.setTareas([
            {
              descripcion: completarTarea[0].descripcion,
              prioridad: completarTarea[0].prioridad,
              completado: completado,
            },
            ...nuevasTareas,
          ]);
    }
  }

  function borrarTarea(id) {
    const nuevasTareas = props.tareas.filter((tarea, i) => id != i);
    props.setTareas(nuevasTareas);
  }

  return (
    <ul id="lista-tareas">
      {props.tareas.map((tarea, i) => (
        <Tarea
          id={i}
          completarTarea={completarTarea}
          borrarTarea={borrarTarea}
          completado={tarea.completado}
          descripcion={tarea.descripcion}
          prioridad={tarea.prioridad}
          key={i}
        />
      ))}
    </ul>
  );
};

const Tarea = (props) => {
  return (
    <li className={`${props.prioridad}`}>
      <span className={`${props.completado ? 'completada' : ''}`}> {props.descripcion} </span> 
      <button
        onClick={(e) => {
          props.borrarTarea(props.id);
        }}
      >
      Borrar
      </button>
      <button onClick={() => props.completarTarea(props.id, !props.completado)}>
        {props.completado ? "Descompletar" :  "Completar"}
      </button>
      {props.completado ? "completado" : ""}
    </li>
  );
};
