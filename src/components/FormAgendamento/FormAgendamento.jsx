import React from 'react'
import styled from 'styled-components'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from 'react-hook-form'


export const Form = styled.form`
   display: flex;
   gap: .5rem;
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
   cliente: yup.string().required("Este campo é obrigatório! preencha"),
   procedimento: yup.string().required("Este campo é obrigatório! preencha"),
   profissional: yup.string().required("Este campo é obrigatório! preencha"),
   dia: yup.string().required("Este campo é obrigatório! preencha"),
   hora: yup.string().required("Este campo é obrigatório! preencha"),
})

export const FormAgendamento = () => {
   const {
      register,
      handleSubmit,
      formState: {errors},
      watch,
      reset
   } = useForm({resolver: yupResolver(schema)})

   const onSubmit = (data) => {
      console.log(data)
   }

  return (
      <Form onSubmit={handleSubmit(onSubmit)}>
         <FieldBox>
            <label>Escolha o cliente:</label>
            <select {...register("cliente")}>
               <option value="">Escolher</option>
               <option value="Lucas">Lucas</option>
               <option value="Felipe">Felipe</option>
               
            </select>
            <ErrorMessage>{errors.cliente?.message}</ErrorMessage>
         </FieldBox>
         <FieldBox>
            <label>Qual procedimento realizado:</label>
            <select {...register("procedimento")}>
               <option value="">Escolher</option>
               <option value="Depilação a laser">Depilação a laser</option>
               <option value="Remoção de tattoo">Remoção de tattoo</option>
            </select>
            <ErrorMessage>{errors.procedimento?.message}</ErrorMessage>
         </FieldBox>
         <FieldBox>
            <label>Escolha o profissional:</label>
            <select {...register("profissional")}>
               <option value="">Escolher</option>
               <option value="Luiz fernando">Luiz fernando</option>
               <option value="joana silva">Joana Silva</option>
            </select>
            <ErrorMessage>{errors.profissional?.message}</ErrorMessage>
         </FieldBox>
         {
            watch("profissional") && (
               <FieldBox>
                  <label>Dias disponíveis:</label>
                  <select {...register("dia")}>
                     <option value="">Escolher dia</option>
                     <option value="14/11/2023">14/11 Terça-feira</option>
                     <option value="15/11/2023">15/11 Quarta-feira</option>
                     <option value="16/11/2023">16/11 Quinta-feira</option>
                  </select>
                  <ErrorMessage>{errors.dia?.message}</ErrorMessage>
               </FieldBox>
            )
         }
         {
            watch("dia") && (
               <FieldBox>
                  <label>Horários disponíveis:</label>
                  <select {...register("hora")}>
                     <option value="">Escolher horário</option>
                     <option value="0830">08:30</option>
                     <option value="1000">10:00</option>
                     <option value="1130">11:30</option>
                  </select>
                  <ErrorMessage>{errors.hora?.message}</ErrorMessage>
               </FieldBox>
            )
         }
         
         <button type='submit'>Agendar</button>
      </Form>
  )
}
