import React from 'react';
import GlobalStyles from './global-styled.ts/global-styled';
import { Login, Logun } from './widgets';
import { Routes, Route } from 'react-router-dom';
import { Calendar, Log } from './layout'
import RedirectHelper from './helper/rederect.helper';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Log title='Login' content={<Login />} />} />
        <Route path='/logun' element={<Log title='Login' content={<Logun />} />} />
        <Route path='/check' element={<RedirectHelper />} />
        <Route path='/calendar' element={<Calendar />} />
      </Routes>
    </>
  )
}

export default App;