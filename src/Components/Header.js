import React from "react";
import styled from "styled-components";
import navLogo from "../Images/logo-small.svg";

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <img src={navLogo} alt="Edward Reed Designs Small Logo" />
      </div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 4.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #d0dedf;
  padding: 0 5rem 0 5rem;
  font-family: var(--ff-title);
  font-weight: 600;
  font-size: 1.3rem;
  color: #151b27;
  z-index: 10;

  img {
    height: 4rem;
  }

  .links {
    width: 40%;
    margin-right: 5rem;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
    }
  }
`;

export default Header;
