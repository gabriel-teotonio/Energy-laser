import { useForm } from "react-hook-form"
import styled from "styled-components"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { clientes } from "../../fakeDb"

export const Form = styled.form`
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

   input, select{
      height: 35px;
      padding: 0 10px;
      font-size: 16px;
      outline: none;

      border: #0000005b 1px solid;
      border-radius: 4px;
   }
`

export const ErrorMessage = styled.span`
   color: #ff3737;
`

const schema = yup.object({
   nome: yup.string().required("Este campo é obrigatório! preencha"),
   telefone: yup.string().required("Este campo é obrigatório! preencha"),
   cpf: yup.string().required("Este campo é obrigatório! preencha"),
   genero: yup.string().required("Este campo é obrigatório! preencha"),
})

export const CriarCliente = () => {
   const {
      register,
      handleSubmit,
      formState: {errors},
   } = useForm({resolver: yupResolver(schema)})

   const onSubmit = (data) => {
      console.log(data)
      clientes.push(data)
      alert("cliente criado com sucesso!")
   }

  return (
    <div>
      <h3>Criar novo cliente</h3>
      
      <Form onSubmit={handleSubmit(onSubmit)}>
         <FieldBox>
            <label>Nome:</label>
            <input {...register("nome")} type="text" />
            <ErrorMessage>{errors.nome?.message}</ErrorMessage>
         </FieldBox>
         <FieldBox>
            <label>telefone:</label>
            <input {...register("telefone")} type="text" />
            <ErrorMessage>{errors.telefone?.message}</ErrorMessage>
         </FieldBox>
         <FieldBox>
            <label>CPF:</label>
            <input {...register("cpf")} type="text" />
            <ErrorMessage>{errors.cpf?.message}</ErrorMessage>
         </FieldBox>
         <FieldBox>
            <label>Gênero:</label>
            <select {...register("genero")}>
               <option value="">Escolher</option>
               <option value="m">Masculino</option>
               <option value="f">Feminino</option>
               <option value="o">Outro</option>
            </select>
            <ErrorMessage>{errors.genero?.message}</ErrorMessage>
         </FieldBox>
         <button type='submit'>Criar cliente</button>
      </Form>
    </div>
  )
}
