import React from 'react'
import { FormProfissional } from '../../components/FormProfissional/FormProfissional'
import { profissionaisDb } from '../../fakeDb'

export const CriarProfissional = () => {
   const createProfissional = (data) => {
    const {senha, ...prof} = data
      profissionaisDb.push({...prof, id:profissionaisDb.length + 1})
      alert('Profissional criado!')
   }
  return (
    <FormProfissional onAction={createProfissional} btnTitle={"Criar profissional"}/>
  )
}
