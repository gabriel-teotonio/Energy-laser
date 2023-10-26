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
  border-radius: 4px;
  height: 40px;
  display: flex;
  padding: 0 10px;
  align-items: center;

  &:first-child{
    background: var(--bg-gradiente, linear-gradient(95deg, #F8104F 5.78%, #D02ED2 44.32%, #2177F8 92.31%));
  }
  a{
    color: currentColor;
    text-decoration: none;
    width: 100%;
  }
`


export const NavMenu = () => {
  return (
    <Container>
        <AreaLogo>
          <a href="#"><img src="src\imgs\logo-energy-laser.png" alt="logo" /></a>
        </AreaLogo>
        <Ul>
          <Li>
            <a href="#">Inicio</a>
          </Li>
          <Li>
            <a href="#">Agendamentos</a>
          </Li>
          <Li>
            <a href="#">Clientes</a>
          </Li>
          <Li>
            <a href="#">Profissionais</a>
          </Li>
          <Li>
            <a href="#">Serviços</a>
          </Li>
        </Ul>
    </Container>
  )
}
