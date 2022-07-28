import "./App.css";

import { useState } from "react"

import { Form } from './Components/Form'
import { ListaDeTareas } from "./Components/ListaDeTareas";

function App() {
  const [tareas, setTareas] = useState([
    {
      descripcion: "tarea1",
      prioridad: "prioridad-media",
      completado: false
    }
  ])

  return (
    <div className="App">
      <main>
        <h1>Lista de tareas!</h1>
        <Form setTareas={setTareas} tareas={tareas} />
        <h3>Tareas</h3>

        {tareas.length > 0 ?
          <ListaDeTareas setTareas={setTareas} tareas={tareas} /> :
          <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
        }
        <p className="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
      </main>
    </div>
  );
}

export default App;
