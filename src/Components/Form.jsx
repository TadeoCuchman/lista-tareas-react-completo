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
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      // This arrangement can be altered based on how we want the date's format to appear.
      let currentDate = `${day}-${month}-${year}`;
      props.setTareas(
        [
          { 
            descripcion: descripcionInterna,
            prioridad: prioridadInterna,
            completado: false,
            fecha: currentDate
          },
          ...props.tareas
        ])
    }

    console.log(props.tareas)
  }


  return (
    <form action="javascript:void(0);"  >

      <input id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea" onChange={(e) => setDescripcionInterna(e.target.value)}/>
      {/* setDescripcionInterna({..tarea, descripcion: e.target.value}) */}
      <select name="prioridad" id="prioridad" onChange={(e) => setPrioridadInterna(e.target.value)}>
          <option value="" selected >Prioridad</option>
          <option value="prioridad-baja">baja</option>
          <option value="prioridad-media">media</option>
          <option value="prioridad-alta">alta</option>
      </select>
      
      <button id="agregar" className={descripcionInterna != '' && prioridadInterna != '' ? 'podemos' : ''} onClick={() => agregarTarea()}> Agregar!</button>
    </form>
  )
}
