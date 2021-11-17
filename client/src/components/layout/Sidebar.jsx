import React from 'react';
import NewProject from '../projects/NewProject';
import ListProjects from '../projects/ListProjects';

export default function Sidebar() {
    return (
        <aside>
            <h1>MERN<span>Tasks</span></h1>

            <NewProject/>

            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <ListProjects />
            </div>
        </aside>
    )
}
