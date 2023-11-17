import { Outlet } from "react-router-dom"
import Logo from "../../imgs/logo-energy-laser.png"
import styled from "styled-components"

export const Header = styled.header`
   display: flex;
   justify-content: space-between;
   background-color: #020F3D;
   padding: 1rem 10px;

   img{
      width: 120px;
   }
`

export const RootCliente = () => {
  return (
   <>
   <Header>
      <img src={Logo} alt="logo" />
      <button>Sair</button>
   </Header>
   <Outlet />
   </>
  )
}
