import styled from "styled-components"
import { FormCliente } from "../../components/FormCliente/FormCliente"
import bgMobile from "../../imgs/bg-mobile.png"
import Logo from "../../imgs/logo-energy-laser.png"
import { BtnLink } from "../Home"

export const Container = styled.div`
   background: var(--bg-gradiente, linear-gradient(47deg, #F8104F 5.78%, #D02ED2 44.32%, #2177F8 92.31%));
`
export const BgContainer = styled.div`
  background-image: url(${(props) => props.$url});
  min-height: 240px;
  background-repeat: no-repeat;
  background-size: cover;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  
  padding-bottom: 4rem;

  h3{
    font-weight: 500;
    margin-top: .5rem;
  }
  a{
    background-color: transparent;
    font-size: 14px;
    border-bottom: 1px solid white;
    border-radius: 0;
    width: fit-content;
  }
  `
export const Main = styled.main`
  padding: 16px 12px;
  display: flex;
  justify-content: center;

  form{
    width: 100%;
    padding:  1rem .5rem;
    border-radius: 8px;
    background: #F1F1F3;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    transform: translateY(-5rem);
  }
`

export const SignupCliente = () => {
  const formSubmit = (data) => {
    console.log(data)
  }
  return (
    <Container>
      <BgContainer  $url={`${bgMobile}`}>
        <img src={Logo} alt="" />
        <h3>Bem-vindo, Faça seu cadastro.</h3>
        <p>ou</p>
        <BtnLink to={"/login"}>acessar minha conta</BtnLink>
      </BgContainer>
      <Main>
        <FormCliente 
        onAction={formSubmit} 
        btnTitle={"Realizar meu cadastro"}
        isAdmin={false}
        />
      </Main>
    </Container>
  )
}
