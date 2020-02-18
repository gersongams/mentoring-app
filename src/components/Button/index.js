import PropTypes from "prop-types"; // ES6
import React from "react";
import ButtonStyled from "./style";
import Loader from '../Loader';

const Button = ({
  disabled,
  icon,
  loading,
  size,
  type,
  onClick,
  block,
  children,
}) => {
  return (
    <ButtonStyled
      disabled={disabled}
      icon={icon}
      size={size}
      type={type}
      onClick={onClick}
      block={block}
    >
      <span>{!loading ? children : <Loader />}</span>
    </ButtonStyled>
  );
};

Button.defaultProps = {
  disabled: false,
  icon: null,
  loading: false,
  size: "default",
  type: "primary",
  onClick: () => console.log("you are clicking the button"),
  block: false,
};

Button.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(["small", "default", "large"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  block: PropTypes.bool
};

export default Button;
