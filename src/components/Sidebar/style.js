import styled from "styled-components";

const SiderStyled = styled.aside`
  width: 28rem;
  position: relative;
  background: red;
  & .logo {
    height: 12rem;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default SiderStyled;
