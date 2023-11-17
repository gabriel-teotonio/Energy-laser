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
export const RecentAgenda = styled.div``
export const BoxRecent = styled.div`
   background-color: white;
   width: 220px;
   padding: .8rem;
   border-radius: 6px;
   font-size: 14px;
   margin-top: .2rem;
   box-shadow: 1px 1px 4px #0000001b;
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
    <RecentAgenda>
      <h4>Seus agendamentos</h4>
      <BoxRecent>
         <p>Você não tem agendamentos marcados</p>
      </BoxRecent>
    </RecentAgenda>
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
