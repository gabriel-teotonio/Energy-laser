import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  height: 100%;
  width: 260px;
  background-color: #020F3D;
  color: white;

  position: fixed;
`
const AreaLogo = styled.div`
  height: 60px;
  padding: 10px;
`
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 10px;
`

const Li = styled.li`
  height: 40px;
`

const StyledLink = styled(Link)`
  display: flex;
  border-radius: 4px;
  align-items: center;
  padding: 0 10px;

  width: 100%;
  height: 100%;
  color: currentColor;
  text-decoration: none;
  background: ${props => props.isActive ? "linear-gradient(95deg, #F8104F 5.78%, #D02ED2 44.32%, #2177F8 92.31%)": "none"};
`


export const NavMenu = () => {
  const location = useLocation()

  return (
    <Container>
        <AreaLogo>
          <a href="#"><img src="src\imgs\logo-energy-laser.png" alt="logo" /></a>
        </AreaLogo>
        <Ul>
          <Li>
            <StyledLink isActive={location.pathname === "/"} to={"/"}>Início</StyledLink>
          </Li>
          <Li>
            <StyledLink isActive={location.pathname === "/agendamentos"} to={"/agendamentos"}>Agendamentos</StyledLink>
          </Li>
          <Li>
            <StyledLink isActive={location.pathname === "/clientes"} to={"/clientes"}>Clientes</StyledLink>
          </Li>
          <Li>
            <StyledLink isActive={location.pathname === "/profissionais"} to={"/profissionais"}>Profissionais</StyledLink>
          </Li>
          <Li>
            <StyledLink isActive={location.pathname === "/servicos"} to={"/servicos"}>Serviços</StyledLink>
          </Li>
        </Ul>
    </Container>
  )
}
