import React from 'react'
import { FormProfissional } from '../../components/FormProfissional/FormProfissional'

export const CriarProfissional = () => {
   const createProfissional = (data) => {
      console.log(data)
   }
  return (
    <FormProfissional onAction={createProfissional} btnTitle={"Criar profissional"}/>
  )
}
