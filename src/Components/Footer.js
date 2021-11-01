import React from "react";
import styled from "styled-components";
import footerLogo from "../Images/full-logo.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <h3>©Edward Reed Designs 2021</h3>
      <img src={footerLogo} alt="Logo for Edward Reed Designs" />
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.3;
  background-color: var(--clr-med);
  color: var(--clr-dark);
  padding: 0 2rem;

  img {
    height: 2.5rem;
  }

  h3 {
    font-family: cursive;
    font-size: 0.8rem;
  }
`;

export default Footer;
