import styled from 'styled-components';

const ButtonStyled = styled.div`
  // sizes
  ${props => {
  if (props.size === 'small') {
    return `
          height: ${props.theme.spacing.g};
          width: ${props.block ? '100%' : '12rem'};
          line-height: ${props.theme.spacing.g};
          font-size: ${props.theme.fontSizes.small};
        `;
  } else if (props.size === 'default') {
    return `
          height: ${props.theme.spacing.l};
          width: ${props.block ? '100%' : '15rem'};
          line-height: ${props.theme.spacing.l};
          font-size: ${props.theme.fontSizes.medium};
          `;
  } else {
    return `
          height: ${props.theme.spacing.xl};
          width: ${props.block ? '100%' : '18rem'};
          line-height: ${props.theme.spacing.xl};
          font-size: ${props.theme.fontSizes.medium};
        `;
  }
}};
  font-family: ${props => props.theme.fontFamily};
  display: ${props => props.block ? 'block' : 'inline-block'};
  position: relative;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;
  outline: none;
  overflow: hidden;
  user-select: none;
  margin: 0;
  box-sizing: border-box;
  transition: all 0.25s ease-out;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.225);
  border: 1px solid ${props => props.theme.colors.primary};
  background: ${props =>
  props.type === 'primary'
    ? props.theme.colors.primary
    : props.theme.colors.white};
  color: ${props =>
  props.type === 'primary'
    ? props.theme.colors.white
    : props.theme.colors.primary};

  &:hover, &:focus {
    text-decoration: none;
    box-shadow: 0 4px 10px 0px rgba(0, 0, 0, 0.225);
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
  }

  & > * {
    position: relative;
  }

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0;
    padding-top: 0;
    border-radius: 100%;
    background-color: rgba(236, 240, 241, 0.3);
    transform: translate(-50%, -50%);
  }

  &:active:before {
    width: 120%;
    padding-top: 120%;
    transition: width 0.2s ease-out, padding-top 0.2s ease-out;
  }
`;
export default ButtonStyled;
