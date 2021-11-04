import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare} from '@fortawesome/free-solid-svg-icons';
import BorraryEditar from './BorraryEditar';
import { useState } from 'react/cjs/react.development';

const ListaDeTareas = ({copiaDataApi, cambiarEstado, setDataApi, dataApi}) => {


    const editarTarea = (id) => {
        console.log(id)
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
                    <li className="lista-elemento" key={tarea.id} >
                        <div>
                            {tarea.completed ?
                                <button className="header__boton" onClick={()=>cambiarEstado(tarea.id)} >
                                    <FontAwesomeIcon icon={faCheckSquare} className="lista-elemento__icono lista-elemento__icono-check" />
                                </button>
                            :
                                <button className="header__boton" onClick={()=>cambiarEstado(tarea.id)} >
                                    <FontAwesomeIcon icon={faSquare} className="lista-elemento__icono lista-elemento__icono-check" />
                                </button>
                            }
                            {tarea.title}
                        </div>
                        <BorraryEditar editarTarea={editarTarea} eliminarTarea={eliminarTarea} id={tarea.id} />
                    </li>))
                }
            </ul>
        </div>
    );
}

export default ListaDeTareas;