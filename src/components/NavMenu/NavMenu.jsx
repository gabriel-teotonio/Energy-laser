import { useLocation } from "react-router-dom"
import logo from "../../imgs/logo-energy-laser.png"
import { AreaLogo, Container, Li, StyledLink, Ul } from "./styles"

export const NavMenu = () => {
  const location = useLocation()

  return (
    <Container>
        <AreaLogo>
          <a href="#"><img src={logo} alt="logo" /></a>
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
