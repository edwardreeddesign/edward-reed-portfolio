import React from "react";
import styled from "styled-components";
import footerLogo from "../Images/Hero-logo.svg";

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
  justify-content: space-around;
  height: 4.3;
  background-color: var(--clr-med);
  color: var(--clr-dark);
  img {
    height: 4rem;
  }

  h3 {
    font-family: cursive;
  }
`;

export default Footer;
