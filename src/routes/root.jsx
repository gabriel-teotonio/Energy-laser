import { Outlet } from "react-router-dom"
import { NavMenu } from "../components/NavMenu/NavMenu"
import styled from "styled-components"

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

export const Root = () => {
   return (
      <Container>
         <NavMenu />
         <Content>
            <NavBar>
               <h4>Inicio</h4>
               <p>Login</p>
            </NavBar>
            <Main>
               <Outlet />
            </Main>
         </Content>
      </Container>
   )
}