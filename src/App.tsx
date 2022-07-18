import React from 'react';
import GlobalStyles from './global-styled.ts/global-styled';
import { Login, Logun } from './widgets';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/logun' element={<Logun />} />
      </Routes>
    </>
  )
}

export default App;
