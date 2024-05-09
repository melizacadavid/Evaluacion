import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Listas from './componentes/Layouts/pages/Listas.jsx';

let router = createBrowserRouter([
  
  {
    path: "/",
    element: <App/>
  },
   {
    path: "/listas",
    element: <Listas/>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  
);


