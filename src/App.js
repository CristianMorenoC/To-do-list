import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaDeTareas from './componentes/ListaDeTareas'


function App() {

  const [dataApi, setDataApi] = useState([]);

  const[copiaDataApi, setCopiaDataApi] = useState([])

  useEffect(()=>{
    const ConsumiendoApi = async () => {
      const response = await fetch ('https://jsonplaceholder.typicode.com/todos');
      const responseJSON = await response.json();
      const data = responseJSON.slice(0, 20);
      setDataApi(data);
      setCopiaDataApi(data);
    }
    ConsumiendoApi();
  }, []);

  useEffect(()=>{
    handleTodos('INCOMPLETAS')
    handleTodos('COMPLETAS')
    handleTodos('TODAS')
  }, [dataApi])

  const handleTodos = (string) => {
    if (string === 'INCOMPLETAS') {
        setCopiaDataApi(dataApi.filter((tarea)=>(tarea.completed === false)))
    } else if (string === 'COMPLETAS') {
        setCopiaDataApi(dataApi.filter((tarea)=>(tarea.completed === true)))
    } else if (string === 'TODAS'){
        setCopiaDataApi(dataApi)
    }
  }

  const cambiarEstado = (id) => {
    setDataApi(copiaDataApi.map((tarea)=> tarea.id === id ? {...tarea, completed: !tarea.completed} : tarea ))
}


  return (
    <div className="contenedor">
      <Header  handleTodos={handleTodos} />
      <FormularioTareas copiaDataApi={copiaDataApi} setCopiaDataApi={setCopiaDataApi} />
      <ListaDeTareas copiaDataApi={copiaDataApi} cambiarEstado={cambiarEstado} setDataApi={setDataApi} dataApi={dataApi} />
    </div>
  );
}

export default App;
