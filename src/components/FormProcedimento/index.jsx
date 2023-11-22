import { useForm } from "react-hook-form"
import styled from "styled-components"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useParams } from "react-router-dom"
import { clientes, procedimetosDb } from "../../fakeDb"
import { useEffect } from "react"

// styled-components - estilização
export const Form = styled.form`
   display: flex;
   flex-direction: column;
   width: 320px;
   gap: 8px;
   max-width: 520px;

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
const schemaProcedimento = yup.object({
   nome: yup.string().required("Este campo é obrigatório! preencha"),
   descricao: yup.string().required("Este campo é obrigatório! preencha"),
})

export const FormProcedimento = ({btnTitle, onAction}) => {
   const {id} = useParams()
   const {
      register,
      handleSubmit,
      formState: {errors},
      reset
   } = useForm({resolver: yupResolver(schemaProcedimento)})
   
   
   useEffect(() => {
      const proced = procedimetosDb.find(proced => proced.id === parseInt(id))
      if(id && proced){
         reset({
            nome: proced.nome,
            descricao: proced.descricao
         })
      }
   },[])

  return (
   <Form onSubmit={handleSubmit(onAction)}>
      <h2>Criar novo procedimento</h2>
      <FieldBox>
         <label>Nome do procedimento:</label>
         <input {...register("nome")} type="text" />
         <ErrorMessage>{errors.nome?.message}</ErrorMessage>
      </FieldBox>
      <FieldBox>
         <label>Descrição do procedimento:</label>
         <input {...register("descricao")} type="text" />
         <ErrorMessage>{errors.descricao?.message}</ErrorMessage>
      </FieldBox>
      <button type='submit'>{btnTitle}</button>
   </Form>
  )
}
