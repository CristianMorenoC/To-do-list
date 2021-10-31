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



  return (
    <div className="contenedor">
      <Header  setCopiaDataApi={setCopiaDataApi} dataApi={dataApi} />
      <FormularioTareas dataApi={dataApi} setDataApi={setDataApi} />
      <ListaDeTareas copiaDataApi={copiaDataApi} setCopiaDataApi={setCopiaDataApi}  />
    </div>
  );
}

export default App;
