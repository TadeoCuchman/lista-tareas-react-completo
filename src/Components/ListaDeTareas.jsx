import React from "react";
import {useState, useEffect} from "react"
import "./ListaDeTareas.css";
export const ListaDeTareas = (props) => {

  // useEffect(() => {
  //   console.log(props.tareas)
  //   const tareasOrdenadasPorFecha = props.tareas.sort((a, b) => { return a.fecha - b.fecha });

  // }, [])

  
  function completarTarea(id, completado) {
     // las que no voy a editar
     const nuevasTareas = props.tareas.filter((tarea, i) => id != i);
     // la que voy a editar
     const completarTarea = props.tareas.filter((tarea, i) => id == i);
    const completadoInterno = !completado;
    {
      completadoInterno
        ? props.setTareas([
            ...nuevasTareas,
            {
              descripcion: completarTarea[0].descripcion,
              prioridad: completarTarea[0].prioridad,
              completado: completadoInterno,
              fecha: completarTarea[0].fecha
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
      {props.tareas.map((tarea, i) => 
        <Tarea
          id={i}
          fecha={tarea.fecha}
          completarTarea={completarTarea}
          borrarTarea={borrarTarea}
          completado={tarea.completado}
          descripcion={tarea.descripcion}
          prioridad={tarea.prioridad}
          key={i}
          tareas={props.tareas}
          setTareas={props.setTareas}
        />
      )}
    </ul>
  );
};

const Tarea = (props)  => {
  const [descripcionInterna, setDescripcionInterna] = useState(props.descripcion);
  const [prioridadInterna, setPrioridadInterna] = useState(props.prioridad);
  const [editMode, setEditMode] = useState(false);
  
  
  function editarTarea(id) {
    const tareasEditadas = []
    // las que no voy a editar
    const nuevasTareasArriba = props.tareas.filter((tarea, i) => id != i);
    const nuevasTareasAbajo = props.tareas.filter((tarea, i) => id < i);
    console.log(nuevasTareasArriba.length, nuevasTareasAbajo.length)
  
    // la que voy a editar
    const completarTarea = props.tareas.filter((tarea, i) => id == i);

    

    props.setTareas([
      {
        descripcion: descripcionInterna,
        prioridad: prioridadInterna,
        completado: props.completado,
        fecha: props.fecha
      },
      ...nuevasTareasArriba

    ])

    setEditMode(false)
    
  }
  
  return (
    <li className={`${props.prioridad}`}>
      { editMode ?
        <>
          <input type="text" placeholder={descripcionInterna}  onChange={(e) => setDescripcionInterna(e.target.value)} ></input> 
          <select name="prioridad" id="prioridad" value={prioridadInterna} onChange={(e) => setPrioridadInterna(e.target.value)}>
            <option value="" >Prioridad</option>
            <option value="prioridad-baja">baja</option>
            <option value="prioridad-media">media</option>
            <option value="prioridad-alta">alta</option>
          </select>
        </>:
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


      <button onClick={() => {
        editMode ?
        editarTarea(props.id) :
        setEditMode(true)
      } }>
        Editar
      </button>
      <span>{props.fecha}</span>



      {props.completado ? "completado" : ""}
    </li>
  );
};
