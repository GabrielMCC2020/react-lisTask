import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';
//import TareaFormulario from './componentes/TareaFormulario';
//import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'alt='Logo de freeCodeCamp' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
          {/* <TareaFormulario /> */}
          {/* <Tarea texto='Aprender React' /> */}
      </div>
    </div>
  );  
}

export default App;
