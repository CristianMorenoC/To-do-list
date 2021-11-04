import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';

const BorraryEditar = ({id, editarTarea, eliminarTarea }) => {
    

    return (
        <div>
        <FontAwesomeIcon icon={faEdit} className="lista-elemento__icono lista-elemento__icono-accion" onClick={()=>editarTarea(id)} />
        <FontAwesomeIcon icon={faTimes} className="lista-elemento__icono lista-elemento__icono-accion" onClick={()=>eliminarTarea(id)} />
        </div>
    );
}

export default BorraryEditar;