import { useForm } from "react-hook-form"
import styled from "styled-components"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useParams } from "react-router-dom"
import { clientes } from "../../fakeDb"
import { useEffect } from "react"

// styled-components - estilização
export const Form = styled.form`
   display: flex;
   flex-direction: column;
   width: 320px;
   gap: 8px;

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
// Fim estilização


// validação de campos do form com yup
const schema = yup.object({
   nome: yup.string().required("Este campo é obrigatório! preencha"),
   telefone: yup.string().required("Este campo é obrigatório! preencha"),
   cpf: yup.string().required("Este campo é obrigatório! preencha"),
   genero: yup.string().required("Este campo é obrigatório! preencha"),
   dataNascimento: yup.string().required("Este campo é obrigatório! preencha"),
   bairro: yup.string().required("Este campo é obrigatório! preencha"),
   cidade: yup.string().required("Este campo é obrigatório! preencha"),
   estado: yup.string().required("Este campo é obrigatório! preencha"),
   email: yup.string().required("Este campo é obrigatório! preencha"),
})

export const FormCliente = ({btnTitle, onAction}) => {
   const {id} = useParams()
   const {
      register,
      handleSubmit,
      formState: {errors},
      reset
   } = useForm({resolver: yupResolver(schema)})
   
   
   useEffect(() => {
      const cliente = clientes.find(cliente => cliente.id === parseInt(id))
      if(id && cliente){
         reset({
            nome: cliente.nome,
            telefone: cliente.telefone,
            cpf: cliente.cpf,
            genero: cliente.genero,
         })
      }
   },[])

  return (
   <Form onSubmit={handleSubmit(onAction)}>
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
      <FieldBox>
         <label>Data de nascimento:</label>
         <input {...register("dataNascimento")} type="text" />
         <ErrorMessage>{errors.dataNascimento?.message}</ErrorMessage>
      </FieldBox>
      <FieldBox>
         <label>Estado:</label>
         <input {...register("estado")} type="text" />
         <ErrorMessage>{errors.estado?.message}</ErrorMessage>
      </FieldBox>
      <FieldBox>
         <label>Cidade:</label>
         <input {...register("cidade")} type="text" />
         <ErrorMessage>{errors.cidade?.message}</ErrorMessage>
      </FieldBox>
      <FieldBox>
         <label>Bairro:</label>
         <input {...register("bairro")} type="text" />
         <ErrorMessage>{errors.bairro?.message}</ErrorMessage>
      </FieldBox>
      <FieldBox>
         <label>Email:</label>
         <input {...register("email")} type="text" />
         <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </FieldBox>
      <button type='submit'>{btnTitle}</button>
   </Form>
  )
}
