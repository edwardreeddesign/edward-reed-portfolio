import React from "react";
import styled from "styled-components";

const Button = ({ children, primary, secondary, outline }) => {
  return (
    <StyledButton primary={primary} secondary={secondary} outline={outline}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 1.6rem;
  font-family: var(--ff-title);
  padding: 0.8rem 1.7rem;
  border-radius: 0.8rem;
  font-weight: 600;
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  transition: all 300ms ease-in-out;
  background: ${(p) =>
    p.primary
      ? "var(--clr-accent)"
      : p.secondary
      ? "var(--clr-light)"
      : p.outline
      ? "none"
      : ""};

  &:hover,
  &:active {
    background: ${(p) =>
      p.primary ? "#d4e1e1" : p.secondary ? "#dce7fa" : ""};
  }
`;

export default Button;
