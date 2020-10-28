import React, { useState} from 'react';

import backgroundImage from './assets/background.jpg'
import './App.css';

import Header from './components/Header';

function App () {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end Web']);

    function handleAddProject () { 
        setProjects([...projects, `Novo Projeto ${Date.now()}`]),

        console.log(projects);
    }

    return (
        <>
        <Header title = "Projects"/>
        <img width={500} src = {backgroundImage} />

        <ul>
            {projects.map(project => <li key = { project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;