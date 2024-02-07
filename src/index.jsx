import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);

