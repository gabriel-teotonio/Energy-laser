import styled from "styled-components"
import IconAgenda from "../../imgs/icon-agenda.svg"
import IconPaper from "../../imgs/icon-paper.svg"

export const ContainerActions = styled.div`
   display: flex;
   flex-direction: column;
   gap: .5rem;
   margin-top: 1rem;

   h2{
      font-size: 1.2rem;
      font-weight: 500;
   }
`
export const ListAction = styled.div`
   display: flex;
   gap: .5rem;
`
export const BoxAction = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;

   padding: 1rem;
   color: white;
   border-radius: 4px;
   background: linear-gradient(57deg, #4C10F8 10.32%, #3200bb 100%);



   max-width: 140px;
   text-align: center;
   cursor: pointer;
   transition: all .2s;

   &:hover{
      opacity: .8;
   }

   img{
      width:32px;
   }
   h3{
      font-size: 1rem;
   }
`

export const HomeCliente = () => {
  return (
    <>
    <h2>Olá, Gabriel</h2>
    <ContainerActions>
      <h2>Acesso rápido</h2>
      <ListAction>
         <BoxAction>
            <img src={IconAgenda} alt="icone" />
            <h3>Agendar um procedimento</h3>
         </BoxAction>
         <BoxAction>
            <img src={IconPaper} alt="icone" />
            <h3>Procedimentos disponíveis</h3>
         </BoxAction>
      </ListAction>
    </ContainerActions>
    </>
  )
}
