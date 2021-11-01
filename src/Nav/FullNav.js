import React from "react";
import styled from "styled-components";
import FullLogo from "../Images/full-logo.svg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const FullNav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <div>
        <Link to="/">
          <img src={FullLogo} alt="Edward Reed Full Logo" />
        </Link>
      </div>
      <StyledUl>
        <li>
          <Link to="/">Home</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/" ? "50%" : "0" }}
          />
        </li>
        <li>
          <Link to="/about">About</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/about" ? "50%" : "0" }}
          />
        </li>
        <li>
          <Link to="/projects">Projects</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/projects" ? "50%" : "0" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0" }}
          />
        </li>
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 4.2rem;
  width: 100%;
  background: var(--clr-med);

  /* min-height: 4.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  background: var(--clr-med);
  position: sticky;
  top: 0; */
  z-index: 10;

  img {
    height: 4rem;
    width: 25rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  width: 70%;

  li {
    position: relative;
  }

  a {
    text-decoration: none;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: var(--clr-accent);
  width: 0;
  position: absolute;
  bottom: -25%;
  left: -2%;
`;

export default FullNav;
