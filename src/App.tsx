import React from 'react';
import { BoxS } from './elements';
import GlobalStyles from './global-styled.ts/global-styled';
import { Login } from './layout';
import { InputS } from './moduls';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Login />
    </>
  )
}

export default App;
