import styled from "styled-components";

export const Container = styled.div`
   background: var(--bg-gradiente, linear-gradient(95deg, #F8104F 5.78%, #D02ED2 44.32%, #2177F8 92.31%));
   min-height: 100vh;

   header{
      padding: 1rem 2rem;
   }
`
export const Box = styled.div`
   width: 460px;
   border-radius: 6px;
   background: #FFF;
   box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.08);
   padding: 1.5rem;
   margin: 0 auto;
   margin-top: 2rem;
   h3{
      text-align: center;
      font-size: 2rem;
   }
   form{
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      gap: 0.5rem;
      label{
         display: flex;
         flex-direction: column;

         input{
            display: flex;
            height: 40px;
            padding: 10px;
            align-items: center;
            gap: 10px;
            align-self: stretch;
            border-radius: 6px;
            border: 2px solid #616a898e;
            outline: none;
            font-size: 16px;
            
            &:focus{
               border: 2px solid #616a89;
            }
         }
      }

      a{
         margin-left: auto;
         color: #ff1f1f;
      }
      button{
         color: white;
         border: 0;
         text-transform: uppercase;
         font-size: 18px;
         cursor: pointer;

         display: flex;
         width: 100%;
         padding: 10px;
         justify-content: center;
         align-items: center;
         margin-top: 3rem;

         border-radius: 32px;
         background: #4C10F8;
         transition: all .3s;
         
         &:hover{
            background: #290198;
         }
      }
   }
`