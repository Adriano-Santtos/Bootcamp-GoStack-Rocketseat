import React, { useState, useEffect} from 'react';

import './App.css';

import api from './services/api';

import Header from './components/Header';

function App () {
    const [projects, setProjects] = useState([]);
 
    useEffect(() => {
      api.get('projects').then(response => {//api.get para buscar o get no backend
          setProjects(response.data);
      });
    }, []);//array de dependências

    function handleAddProject() {
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    }


    return (
        <>
        <Header title = "Projects"/>
        
        <ul>
            {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
};

export default App;