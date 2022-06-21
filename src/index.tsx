import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


import './index.css';

import App from './App';
import Layout from './components/blocks/Layout'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<App />}/>
      </Routes>
    </Layout>
  </BrowserRouter>
);

reportWebVitals();