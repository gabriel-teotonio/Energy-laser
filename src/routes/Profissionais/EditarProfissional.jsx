import { FormProfissional } from "../../components/FormProfissional/FormProfissional"

export const EditarProfissional = () => {
   const EditProfissional = (data) => {
      console.log(data)
   }
  return (
    <FormProfissional onAction={EditProfissional} btnTitle={"Atualizar profissional"}/>
  )
}
