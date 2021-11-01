import React from "react";
import styled from "styled-components";

const Button = ({ children, primary, secondary, outline, disabled }) => {
  return (
    <StyledButton
      primary={primary}
      secondary={secondary}
      outline={outline}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  align-items: center;
  font-size: clamp(0.8rem, 5vw, 1.4rem);
  font-family: var(--ff-title);
  border-radius: 0.8rem;
  font-weight: 600;
  padding: 1.25rem 2.25rem;
  border: ${(p) => (p.outline ? "1px solid var(--clr-dark)" : "none")};
  box-shadow: ${(p) =>
    p.outline
      ? "none"
      : "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),12.5px 12.5px 10px rgba(0, 0, 0, 0.035),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),100px 100px 80px rgba(0, 0, 0, 0.07)"};

  transition: all 300ms ease-in-out;
  background: ${(p) =>
    p.primary
      ? "var(--clr-accent)"
      : p.secondary
      ? "var(--clr-light)"
      : p.outline
      ? "transparent"
      : ""};

  &:hover,
  &:active {
    transform: scale(0.9);
    background: ${(p) =>
      p.primary
        ? "#d4e1e1"
        : p.secondary
        ? "#dce7fa"
        : p.outline
        ? "var(--clr-dark)"
        : ""};

    color: ${(p) => (p.outline ? "var(--clr-accent)" : "")};
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    background-color: #ccc;
    color: #292929;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

export default Button;
