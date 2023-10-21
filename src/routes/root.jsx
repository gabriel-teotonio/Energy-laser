import { Outlet } from "react-router-dom"

export const Root = () => {
   return (
      <>
         <h1>Hello world</h1>
         <Outlet />
      </>
   )
}