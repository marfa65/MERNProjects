/*eslint-disable */
import React, {useContext, useEffect} from 'react';
import Project from './Project';
import proyectoContext from '../../context/proyectos/proyectoContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


export default function ListProjects() {

    const proyectosContext = useContext(proyectoContext)
    const {proyectos, obtenerProyectos} = proyectosContext;
    
    useEffect(() => {
        obtenerProyectos();
        //eslint-disable-next-line
    }, []);

    if(proyectos.length === 0) return <p>No hay proyectos, crea alguno</p>;


    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(p =>(
                    <CSSTransition
                        key={p.id}
                        timeout={400}
                        classNames="proyecto"
                    >
                        <Project                        
                        proyecto={p}
                    />
                    </CSSTransition>
                    
                ))}
            </TransitionGroup>
            
        </ul>
    )
}
