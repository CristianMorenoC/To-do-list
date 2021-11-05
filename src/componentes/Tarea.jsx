import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare, faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';


const Tarea = ({tarea, cambiarEstado, editarTarea, eliminarTarea}) => {

    const [estadoEditar, setEstadoEditar] = useState(false);
    const [tareaEditada, setTareaEditada] = useState(tarea.title);

    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, tareaEditada);
        setEstadoEditar(false)
    }


    return (
        <li className="lista-elemento"  >
        <div className="lista-elemento-div">
            {tarea.completed ?
                <button className="header__boton" onClick={()=>cambiarEstado(tarea.id)} >
                    <FontAwesomeIcon icon={faCheckSquare} className="lista-elemento__icono lista-elemento__icono-check" />
                </button>
            :
                <button className="header__boton" onClick={()=>cambiarEstado(tarea.id)} >
                    <FontAwesomeIcon icon={faSquare} className="lista-elemento__icono lista-elemento__icono-check" />
                </button>
            }
            {
                estadoEditar ?
                    <form action="" className="lista-elemento__form" onSubmit={handleSubmit} >
                        <input
                            type="text"
                            className="lista-elemento__form-input"
                            value={tareaEditada}
                            onChange={(e)=>setTareaEditada(e.target.value)}
                        />
                        <button type="submit" className="lista-elemento__form-boton-actualizar">Actualizar</button>
                    </form>
                :
                tarea.title
            }
        </div>
        <div>
        <FontAwesomeIcon icon={faEdit} className="lista-elemento__icono lista-elemento__icono-accion" onClick={()=>setEstadoEditar(!estadoEditar)} />
        <FontAwesomeIcon icon={faTimes} className="lista-elemento__icono lista-elemento__icono-accion" onClick={()=>eliminarTarea(tarea.id)} />
        </div>
    </li>
    );
}
 
export default Tarea;
