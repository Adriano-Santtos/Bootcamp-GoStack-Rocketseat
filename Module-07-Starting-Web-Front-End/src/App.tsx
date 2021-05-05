import React from 'react';
import SignUp from './pages/SignUp/Index';
import GlobalStyle from './styles/globals';

const App: React.FC = () => {
  return (
    <>
      <SignUp/>
      <GlobalStyle />
    </>
  );
};

export default App;