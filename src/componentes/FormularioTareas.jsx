import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormularioTareas = ({copiaDataApi, setCopiaDataApi}) => {

    const [nuevaTarea, setNuevaTarea] = useState('');

    const handleInput = (e) => {
        setNuevaTarea(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCopiaDataApi([
            ...copiaDataApi,
            {
                id: uuidv4(),
                title: nuevaTarea,
                completed: false
            }
        ]);
        setNuevaTarea('');
    }

    console.log(nuevaTarea);

    return (
    <>
        <form name="Agregar tareas" className="formulario" onSubmit={handleSubmit} >
            <input
                type='text'
                placeholder="Escribe una tarea"
                className="formulario__input"
                value={nuevaTarea}
                onChange={(e)=> handleInput(e)}
            >
            </input>
            <button type="submit" className="formulario__btn">
                <FontAwesomeIcon icon={faPlusSquare} className="formulario__icon"/>
            </button>
        </form>
    </>
);
}

export default FormularioTareas;