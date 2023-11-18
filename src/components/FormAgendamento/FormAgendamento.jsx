import React from 'react'
import styled from 'styled-components'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Controller, useForm } from 'react-hook-form'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

export const Form = styled.form`
   display: flex;
   gap: .5rem;
   flex-direction: column;
   width:100%;
   max-width: 340px;
`
export const ButtonSubmit = styled.button`
    margin-top: 1rem;
      height: 40px;
      border: none;
      cursor: pointer;
   
      background-color: #194bff;
      color: white;
      font-size: 16px;
      text-transform: uppercase;
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
export const CalendarioAgenda = styled(Calendar)`
   border-radius: 6px;
   .available{
      background-color: #4242ff;
      color: white;
      transition: all .2s;
      
      &:hover{
         transform: scale(1.1);
         background-color: #0000a5;
      }
   }
   .unavailable{
      background-color: #b2b2b2;
      pointer-events: none;
   }
`


const schema = yup.object({
   cpf: yup.string().required("Este campo é obrigatório! preencha"),
   procedimento: yup.string().required("Este campo é obrigatório! preencha"),
   profissional: yup.string().required("Este campo é obrigatório! preencha"),
   selectedDate: yup.string().required("Este campo é obrigatório! preencha"),
   hora: yup.string().required("Este campo é obrigatório! preencha"),
})

export const FormAgendamento = () => {
   const [availableDates, setAvailableDates] = useState([
      new Date(2023, 10, 24),
      new Date(2023, 10, 27),
      new Date(2023, 10, 29),
      new Date(2023, 11, 4),
      new Date(2023, 11, 5),
   ]);
   const {
      register,
      handleSubmit,
      formState: {errors},
      watch,
      control,
      reset
   } = useForm({resolver: yupResolver(schema)})

  
   const onSubmit = (data) => {
      console.log(data)
   }

  return (
      <Form onSubmit={handleSubmit(onSubmit)}>
         <FieldBox>
            <label>Selecionar cliente pelo CPF:</label>
            <input placeholder='000.000.000-00' {...register("cpf")} type="text" />
            <ErrorMessage>{errors.cpf?.message}</ErrorMessage>
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
               <Controller
               control={control}
               name='selectedDate'
               render={({field}) => (
                  <CalendarioAgenda
                  value={field.value}
                  onChange={(date) => field.onChange(date)}
                  tileClassName={({ date }) => {
                     if(availableDates.find(d => d.getTime() === date.getTime())){
                        return "available"
                     }
                     return 'unavailable'
                  }}
                  />
               )}
               />
            )
         }
         <ErrorMessage>{errors.selectedDate?.message}</ErrorMessage>
         {
            watch("selectedDate") && (
               <FieldBox>
                  <label>Horários disponíveis para o dia <strong>{watch('selectedDate').getDate()}</strong></label>
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
         
         <ButtonSubmit type='submit'>Agendar</ButtonSubmit>
      </Form>
  )
}
