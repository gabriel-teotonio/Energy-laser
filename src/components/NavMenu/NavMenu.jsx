import { useLocation } from "react-router-dom"
import logo from "../../imgs/logo-energy-laser.png"
import { AreaLogo, Container, Li, StyledLink, Ul } from "./styles"
import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/authProvider"

export const NavMenu = () => {
  const { user } = useContext(AuthContext)
  return (
    <Container>
        <AreaLogo>
          <a href="#"><img src={logo} alt="logo" /></a>
        </AreaLogo>
        <Ul>
          <Li>
            <StyledLink to={"/"}>Início</StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/agendamentos"}>Agendamentos</StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/clientes"}>Clientes</StyledLink>
          </Li>
          {
            user.userType === 'admin' && (
              <>
                <Li>
                  <StyledLink to={"/profissionais"}>Profissionais</StyledLink>
                </Li>
                <Li>
                  <StyledLink to={"/servicos"}>Serviços</StyledLink>
                </Li>
              </>
            )
          }
        </Ul>
    </Container>
  )
}
