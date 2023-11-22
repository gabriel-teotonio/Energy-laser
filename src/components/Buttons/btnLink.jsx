import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
    background-color: #F8104F;
    color: #fff;
    border: none;
    padding: 0px 10px;

    border-radius: 4px;
    height: 40px;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
`

export const BtnLink = ({btnTitle, url}) => {
  return (
      <Container role="button" type="button" to={url}>{btnTitle}</Container>
  )
}
