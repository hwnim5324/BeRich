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
import Layout from './components/blocks/Layout';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/trading' element={<TradingPage/>}/>
      </Routes>
    </Layout>
  </BrowserRouter>
);

reportWebVitals();