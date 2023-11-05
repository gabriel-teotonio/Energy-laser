import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  width: 260px;
  background-color: #020F3D;
  color: white;

  position: fixed;
`
export const AreaLogo = styled.div`
  height: 60px;
  padding: 10px;
`
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 10px;
`

export const Li = styled.li`
  height: 40px;
`

export const StyledLink = styled(NavLink)`
  display: flex;
  border-radius: 4px;
  align-items: center;
  padding: 0 10px;

  width: 100%;
  height: 100%;
  color: currentColor;
  text-decoration: none;
  &.active{
    background: linear-gradient(95deg, #F8104F 5.78%, #D02ED2 44.32%, #2177F8 92.31%);
  }
`