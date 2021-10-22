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
  padding: 1.25rem 2.5rem;
  border-radius: 0.8rem;
  font-weight: 600;
  border: none;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);

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
