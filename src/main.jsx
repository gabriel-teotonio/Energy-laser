import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './routes/root';
import { Login } from './routes/Login/login';
import { ListaCliente } from './routes/Clientes/ListaCliente';
import { CriarCliente } from './routes/Clientes/CriarCliente';
import { EditarCliente } from './routes/Clientes/EditarCliente';
import { AuthProvider } from './contexts/Auth/authProvider';
import { RotaProtegida } from './contexts/Auth/requireAuth';
import { Home } from './routes/Home';
import { ListaAgendamento } from './routes/Agendamentos/ListaAgendamento';
import { Agendar } from './routes/Agendar/Agendar';

const router = createBrowserRouter([
  {
    element:
    <RotaProtegida>
      <Root />
    </RotaProtegida>,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />
      },
      {
        path:"/agendamentos",
        element: <ListaAgendamento />
      },
      {
        path:"/clientes",
        element: <ListaCliente />
      },
      // {
      //   path:"/profissionais",
      //   element: <h1>Profissionais</h1>
      // },
      // {
      //   path:"/servicos",
      //   element: <h1>Profissionais</h1>
      // },
      {
        path:"/criarCliente",
        element: <CriarCliente/>
      },
      {
        path:"/editarCliente/:id",
        element: <EditarCliente />
      },
      {
        path:"/agendar",
        element: <Agendar />
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
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
