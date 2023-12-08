import react, {  useState } from 'react'
import './App.css';
import Bebida from './componentes/bebida';
import Formulario from './componentes/formulario';
import FormularioAbc from './componentes/formularioAbc';

const KEY_OF_OBJECT = 'drinks'
const PATH_SEARCH_FOR_NAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' //+ NAME
const PATH_SEARCH_FOR_FIRST_LETTER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' // + LETTER



function App() {
  
  const [datos,setDatos] = useState([])

  const busquedaPorLetra = input=>{
    fetch(PATH_SEARCH_FOR_FIRST_LETTER + input).
      then(request => request.json()).
      then(request => {
        if (request[KEY_OF_OBJECT] != null) {
          
          setDatos(request[KEY_OF_OBJECT])
        } else {
          
          alert('No se encontraron resultados')
        }
      }
      )
    
  }

  
  const busquedaPorNombre = input => {
    fetch(PATH_SEARCH_FOR_NAME + input).
      then(request => request.json()).
      then(request => {
        if (request[KEY_OF_OBJECT] != null) {
          
          setDatos(request[KEY_OF_OBJECT])
        } else {
          
          alert('No se encontraron resultados')
        }
      }
      )
  }

  const mapeo = datos.map(obj=>
    <Bebida title = {obj['strDrink']}
    img ={obj['strDrinkThumb']}
    category ={obj['strCategory']}
    date ={obj['dateModified']}/>)

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1 className='titulo'>BUSCADOR DE BEBIDAS</h1>
        <div className='Formulario'>
        <Formulario onSubmit = {busquedaPorNombre}/>
          
        </div>
        <div className='Formulario-Abc'>
        <FormularioAbc onSubmit = {busquedaPorLetra}/>

        </div>
        <div className='contenedor-resultados'>
            {mapeo}
        </div>

      </div>
        
        
    </div>
  );
}

export default App;
