import React from "react";
import {useState} from "react"
import "./ListaDeTareas.css";
export const ListaDeTareas = (props) => {
  
  function completarTarea(id, completado) {
    // las que voy a editar
    const nuevasTareas = props.tareas.filter((tarea, i) => id != i);
    // las que no voy a editar
    const completarTarea = props.tareas.filter((tarea, i) => id == i);
    const completadoInterno = !completado;
    {
      completadoInterno
        ? props.setTareas([
            ...nuevasTareas,
            {
              descripcion: completarTarea[0].descripcion,
              prioridad: completarTarea[0].prioridad,
              completado: completadoInterno
            }
          ])
        : props.setTareas([
            {
              descripcion: completarTarea[0].descripcion,
              prioridad: completarTarea[0].prioridad,
              completado: completadoInterno
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
          tareas={props.tareas}
          setTareas={props.setTareas}
        />
      ))}
    </ul>
  );
};

const Tarea = (props) => {
  const [descripcionInterna, setDescripcionInterna] = useState(props.descripcion);
  const [prioridadInterna, setPrioridadInterna] = useState(props.prioridad);
  const [editMode, setEditMode] = useState(false);
  


  function editarTarea(id) {
    
  }
  
  return (
    <li className={`${props.prioridad}`}>
      { editMode ?
        <input type="text" value={descripcionInterna}  onChange={(e) => setDescripcionInterna(e.target.value)  } ></input> :
        <span className={`${props.completado ? 'completada' : ''}`}> {props.descripcion} </span> 
      }
      <button
        onClick={(e) => {
          props.borrarTarea(props.id);
        }}
      >
      Borrar
      </button>
      <button onClick={() => props.completarTarea(props.id, props.completado)}>
        {props.completado ? "Descompletar" :  "Completar"}
      </button>


      <button onClick={() => setEditMode(!editMode) }>
        Editar
      </button>


      {props.completado ? "completado" : ""}
    </li>
  );
};
