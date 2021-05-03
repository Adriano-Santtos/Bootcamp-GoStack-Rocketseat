import React from 'react';
import SignIn from './pages/SignIn/Index';
import GlobalStyle from './styles/globals';

const App: React.FC = () => {
  return (
    <>
      <SignIn/>
      <GlobalStyle />
    </>
  );
};

export default App;