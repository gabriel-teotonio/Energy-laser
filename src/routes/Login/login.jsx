import { useContext } from "react"
import { Box, Container } from "./styles"
import { AuthContext } from "../../contexts/Auth/authProvider"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ErrorMessage } from "../../components/FormCliente/FormCliente"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const schema = yup.object({
   user: yup.string().required("Campo usuario é obrigatório! preencha"),
   password: yup.string().required("Campo senha é obrigatório! preencha"),
})

export const Login = () => {
   const { signin } = useContext(AuthContext)
   const navigate = useNavigate()

   const {
      register,
      handleSubmit,
      formState: {errors},
   } = useForm({resolver: yupResolver(schema)})
   
   const onSubmit = async (data) => {
      const resAuth = await signin(data.user, data.password)
      console.log(resAuth)
      if(resAuth){
         navigate("/", {replace: true})
      }
   }

  return (
    <Container>
      <header>
         <img src="src\imgs\logo-energy-laser.png" alt="logo img" />
      </header>
         
         <Box>
            <h3>Entrar na sua conta</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
               <label>
                  Usuario
                  <input {...register("user")} type="text" placeholder="usuario@gmail.com" />
                  <ErrorMessage>{errors.telefone?.message}</ErrorMessage>
               </label>
               <label>
                  Senha
                  <input {...register("password")} type="password" placeholder="Sua senha" />
                  <ErrorMessage>{errors.telefone?.message}</ErrorMessage>
               </label>
               <a href="#">Esqueci minha senha</a>
               <button type="submit" onClick={onSubmit}>Entrar</button>
            </form>
         </Box>
    </Container>
  )
}
