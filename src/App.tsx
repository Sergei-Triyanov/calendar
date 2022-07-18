import React from 'react';
import GlobalStyles from './global-styled.ts/global-styled';
import { Login } from './layout';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
        <Login />
    </>
  )
}

export default App;
