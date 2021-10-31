import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faSquare, faTimes} from '@fortawesome/free-solid-svg-icons';

const ListaDeTareas = ({copiaDataApi, setCopiaDataApi}) => {

    const cambiarEstado = (id) => {
        setCopiaDataApi(copiaDataApi.map((tarea)=> tarea.id === id ? {...tarea, completed: !tarea.completed} : tarea ))
    }

    return (
        <div>
            <ul className="lista" >
                {
                    copiaDataApi.map((tarea)=>(<li className="lista-elemento" key={tarea.id} >
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
                        <div>
                            <FontAwesomeIcon icon={faEdit} className="lista-elemento__icono lista-elemento__icono-accion" />
                            <FontAwesomeIcon icon={faTimes} className="lista-elemento__icono lista-elemento__icono-accion" />
                        </div>
                        </li>))
                }
            </ul>
        </div>
    );
}

export default ListaDeTareas;