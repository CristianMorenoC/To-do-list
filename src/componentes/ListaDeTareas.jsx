import React from 'react';
import Tarea from './Tarea';

const ListaDeTareas = ({copiaDataApi, cambiarEstado, setDataApi, dataApi}) => {

    const editarTarea = (id, nuevaTarea) => {
        setDataApi(dataApi.map((tarea)=>{
            if (tarea.id === id) {
                return {...tarea, title: nuevaTarea}
            }
            return tarea
        }));
    }

    const eliminarTarea = (id) => {
        setDataApi(dataApi.filter((tarea)=>{
            if (tarea.id !== id) {
                return tarea;
            }else{
                return;
            }
        }))
    }


    return (
        <div>
            <ul className="lista" >
                {
                    copiaDataApi.map((tarea)=>(
                        <Tarea key={tarea.id} tarea={tarea} cambiarEstado={cambiarEstado} editarTarea={editarTarea} eliminarTarea={eliminarTarea} />
                    ))
                }
            </ul>
        </div>
    );
}

export default ListaDeTareas;