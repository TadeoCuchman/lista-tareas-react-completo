import React from 'react'
import {useState} from 'react'

import './Form.css'

export const Form = (props) => {
  const [descripcionInterna, setDescripcionInterna] = useState('');
  const [prioridadInterna, setPrioridadInterna] = useState('');

  // const [tarea, setTarea] = useState(
  //   { 
  //     descripcion: '',
  //     prioridad: '',
  //     completado: false
  //   }
  //   )
  

  function agregarTarea () {
    if(descripcionInterna != '' && prioridadInterna != ''){
      props.setTareas(
        [
          { 
            descripcion: descripcionInterna,
            prioridad: prioridadInterna,
            completado: false
          },
          ...props.tareas
        ])
    }
  }


  return (
    <form action="javascript:void(0);"  >

      <input id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea" onChange={(e) => setDescripcionInterna(e.target.value)}/>
      {/* setDescripcionInterna({..tarea, descripcion: e.target.value}) */}
      <select name="prioridad" id="prioridad" onChange={(e) => setPrioridadInterna(e.target.value)}>
          <option value="" disabled >Prioridad</option>
          <option value="prioridad-baja">baja</option>
          <option value="prioridad-media">media</option>
          <option value="prioridad-alta">alta</option>
      </select>
      
      <button id="agregar" className={descripcionInterna != '' && prioridadInterna != '' ? 'podemos' : ''} onClick={() => agregarTarea()}> Agregar!</button>
    </form>
  )
}
