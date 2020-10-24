const express = require ('express');

const  { uuid } = require ('uuidv4');  // cria um id únido para cada projeto

const app = express ();

app.use(express.json());


const projects = []; //usada par armazenar os dados da apliccação, jamais utilizar em produção




app.get('/projects', (request, response) => {

  const {title} = request.query; //filtro criado para title

  const results = title 
    ? projects.filter(project => project.title.includes(title))
    : projects; //se não tem o que foi filtrado ele retorna todos os projetoc
    return response.json (results);
});





app.post('/projects', (request, response) => {
    const {title, owner} = request.body;

    const project = { id: uuid(), title, owner }; // criando um único projeto / te liga que ali foi usado só o id

    projects.push(project); //.push ta jogando informação para dentro do array

    return response.json(project); // aqui eu exibo o projeto recem criado, e não a lista toda;

});





app.put('/projects/:id', (request, response) => {
    const {id} = request.params;
    const {title, owner} = request.body;
    
    const projectIndex  = projects.findIndex(project => project.id === id ); //compara para ver se o projeto é o id 

    if (projectIndex <0 ) { //se ele não encontrou o indice < 0
        return response.status(400).json({ error: 'project not found'}); 
    }

    const project = {
        id,
        title,
        owner,
    };

    projects[projectIndex] = project;

    return response.json(project);
});





app.delete('/projects/:id', (request, response) => {
    const {id} = request.params;
    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return response.status(400).json({ error: 'Project not found.'}
        )
    }
    projects.splice(projectIndex, 1);

    return response.status(204).send(); 
});



console.log('Backend started 🏍')


app.listen( 3333);

