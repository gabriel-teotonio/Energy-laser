import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './routes/root';
import { Login } from './routes/Login/login';
import { ListaCliente } from './routes/Clientes/ListaCliente';
import { CriarCliente } from './routes/Clientes/CriarCliente';
import { EditarCliente } from './routes/Clientes/EditarCliente';
import { AuthProvider } from './contexts/Auth/authProvider';
import { RotaProtegida, RotaProtegidaAdm, RotaProtegidaCliente } from './contexts/Auth/requireAuth';
import { Home } from './routes/Home';
import { ListaAgendamento } from './routes/Agendamentos/ListaAgendamento';
import { Agendar } from './routes/Agendar/Agendar';
import { SignupCliente } from './routes/SignupCliente';
import { RootCliente } from './routes/ClienteUser/rootCliente';
import { HomeCliente } from './routes/ClienteUser/homeCliente';
import { Agendamento } from './routes/ClienteUser/agendamento';
import { Profissionais } from './routes/Profissionais';
import { CriarProfissional } from './routes/Profissionais/CriarProfissional';
import { EditarProfissional } from './routes/Profissionais/EditarProfissional';

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
      {
        path:"/profissionais",
        element:<RotaProtegidaAdm><Profissionais /></RotaProtegidaAdm> 
      },
      {
        path:"/servicos",
        element: <RotaProtegidaAdm><h1>Serviços</h1></RotaProtegidaAdm>
      },
      {
        path:"/criarProfissional",
        element: <CriarProfissional />
      },
      {
        path:"/editarProfissional/:id",
        element: <EditarProfissional />
      },
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
  {
    path: "/cadastro",
    element: <SignupCliente />,
  },
  {

    path: "/cliente",
    element:<RotaProtegidaCliente>
              <RootCliente />
            </RotaProtegidaCliente>,
    children: [
      {
        index: true,
        path: "home",
        element: <HomeCliente />
      },
      {
        path: "agendamento",
        element: <Agendamento />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
