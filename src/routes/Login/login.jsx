import { Box, Container } from "./styles"

export const Login = () => {
  return (
    <Container>
      <header>
         <img src="src\imgs\logo-energy-laser.png" alt="logo img" />
      </header>
         
         <Box>
            <h3>Entrar na sua conta</h3>
            <form>
               <label>
                  Email
                  <input type="email" placeholder="usuario@gmail.com" />
               </label>
               <label>
                  Senha
                  <input type="password" placeholder="Sua senha" />
               </label>
               <a href="#">Esqueci minha senha</a>
               <button>Entrar</button>
            </form>
         </Box>
    </Container>
  )
}
