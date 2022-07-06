import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


import './index.scss';

import Main from './components/pages/Main';
import TradingPage from './components/pages/TradingPage';
import Assets from './components/pages/Assets'
import Watching from './components/pages/Watching';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import Layout from './components/blocks/Layout';
import NotFound from './components/pages/NotFound';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/trading/*' element={<TradingPage/>}/>
        <Route path='/assets' element={<Assets />}/>
        <Route path='/watching' element={<Watching />} />
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Layout>
  </BrowserRouter>
);

reportWebVitals();