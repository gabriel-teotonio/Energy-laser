import { Link } from "react-router-dom"
import styled from "styled-components"

export const ButtonsAction = styled.div`
   display: flex;
   gap: .5rem;
   margin-top: .5rem;
`
export const ContainerAtalho = styled.div`
   padding: 1rem;
   background-color: #F1F1F3;
   box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.12);
   width: fit-content;
`

export const BtnLink = styled(Link)`
    background-color: #4C10F8;
    color: #fff;
    border: none;
    padding: 0px 10px;
    width: 300px;

    border-radius: 4px;
    height: 40px;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Home = () => {
  return (
    <>
    <ContainerAtalho>
      <h4>Ações rápidas</h4>
      <ButtonsAction>
         <BtnLink role="button" type="button">Novo cliente</BtnLink>
         <BtnLink role="button" type="button">Novo agendamento</BtnLink>
      </ButtonsAction>
    </ContainerAtalho>
    </>
  )
}
