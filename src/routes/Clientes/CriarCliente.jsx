import styled from "styled-components"

export const Form = styled.div`
   display: flex;
   flex-direction: column;
   width: 320px;

   button{
      margin-top: 1rem;
      height: 40px;
      border: none;
      cursor: pointer;
   
      background-color: #194bff;
      color: white;
      font-size: 16px;
      text-transform: uppercase;
   }
`
export const FieldBox = styled.div`
   display: flex;
   flex-direction: column;

   input{
      height: 35px;
      padding: 0 10px;
      font-size: 16px;
      outline: none;

      border: #0000005b 1px solid;
      border-radius: 4px;
   }
`

export const CriarCliente = () => {
  return (
    <div>
      <h3>Criar novo cliente</h3>
      
      <Form>
         <FieldBox>
            <label>Nome:</label>
            <input type="text" />
         </FieldBox>
         <FieldBox>
            <label>telefone:</label>
            <input type="text" />
         </FieldBox>
         <FieldBox>
            <label>CPF:</label>
            <input type="text" />
         </FieldBox>
         <button type='submit'>Criar cliente</button>
      </Form>
    </div>
  )
}
