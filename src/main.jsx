import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './routes/root';
import { Login } from './routes/Login/login';
import { TabelaClientes } from './components/TabelaClientes/TabelaClientes';
import { ListaCliente } from './routes/Clientes/ListaCliente';
import { CriarCliente } from './routes/Clientes/CriarCliente';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <h1>Início</h1>
      },
      {
        path:"agendamentos",
        element: <h1>Agendamentos</h1>
      },
      {
        path:"clientes",
        element: <ListaCliente />
      },
      {
        path:"profissionais",
        element: <h1>Profissionais</h1>
      },
      {
        path:"servicos",
        element: <h1>Profissionais</h1>
      },
      {
        path:"criarCliente",
        element: <CriarCliente/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
