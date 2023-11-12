import { Link, Navigate, Outlet, useNavigate } from "react-router-dom"
import { NavMenu } from "../components/NavMenu/NavMenu"
import styled from "styled-components"
import { useContext } from "react"
import { AuthContext } from "../contexts/Auth/authProvider"

const Container = styled.div`
   display:flex ;
`
const Content = styled.div`
   position: relative;
   width: calc(100% - 260px);
   left: 260px;
`
const NavBar = styled.div`
   display:flex ;
   justify-content: space-between;
   align-items: center;
   
   padding: 0 2rem;
   height: 60px;
   background-color: #020F3D;
   color: white;
   `
const Main = styled.div`
   padding: 1rem 2rem;
   width: 100%;
   min-height: calc(100vh - 60px);
`
const ButtonSecundary = styled.button`
   background: none;
   border: none;
   color: currentColor;
   font-size: 1rem;
   cursor: pointer;
`

export const Root = () => {
   const { signout } = useContext(AuthContext)
   const navigate = useNavigate()
   const handleLogout = () => {
      signout()
      navigate("/login")
   }

   return (
      <Container>
         <NavMenu />
         <Content>
            <NavBar>
               <h4>Olá, Bem-vindo!</h4>
               <ButtonSecundary onClick={handleLogout}>Sair</ButtonSecundary>
            </NavBar>
            <Main>
               <Outlet />
            </Main>
         </Content>
      </Container>
   )
}