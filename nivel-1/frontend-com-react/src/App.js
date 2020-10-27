import React from 'react';

import Header from './components/Header';

function App () {
    return (
    <>
    <Header title="Homepage">
        <ul>
            <li> Homepage</li>
            <li> projects</li>
        </ul>
     </Header>
    <Header title="projects">
        <ul>
            <li>Homepage</li>
            <li>Projects</li>
            <li>Login</li>
        </ul>
    </Header>
    </>
    );
}

export default App;