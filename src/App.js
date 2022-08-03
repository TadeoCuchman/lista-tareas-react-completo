import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import { useState } from "react"

import { AplicacionTareas } from "./Pages/AplicacionTareas"
import { Home } from "./Pages/Home";

function App() {
  const [tareas, setTareas] = useState([
  ])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tareasApp' element={<AplicacionTareas tareas={tareas} setTareas={setTareas}/>}/>
          {/* <Route path='/ejercicio1' element={<Ejercicio/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
