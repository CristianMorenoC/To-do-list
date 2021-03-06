import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash, faListAlt} from '@fortawesome/free-solid-svg-icons';


const Header = ({handleTodos}) => {


    return (
        <header className="header">
            <h1 className="header__titulo">To do list</h1>
            <button className='header__boton' onClick={()=>handleTodos('INCOMPLETAS')} >
                No mostrar completadas
                <FontAwesomeIcon icon={faEyeSlash} className="header__icon"/>
            </button>
            <button className='header__boton' onClick={()=>handleTodos('COMPLETAS')}>
                    Mostrar completadas
                <FontAwesomeIcon icon={faEye} className="header__icon" />
            </button>
            <button className='header__boton' onClick={()=>handleTodos('TODAS')}>
                    todas las tareas
                <FontAwesomeIcon icon={faListAlt} className="header__icon" />
            </button>

        </header>
     );
}
 
export default Header;