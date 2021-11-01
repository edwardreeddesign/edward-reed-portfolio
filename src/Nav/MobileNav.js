import React, { useState } from "react";
import styled from "styled-components";
import MobileLogo from "../Images/logo-small.svg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fade } from "../Components/Animations";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledNav>
      <div className="hamburger" onClick={toggle} isOpen={isOpen}>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div className="img">
        <Link to="/" isOpen={!isOpen}>
          <img src={MobileLogo} alt="Edward Reed Full Logo" />
        </Link>
      </div>
      <StyledUl isOpen={isOpen} initial="hidden" animate="show" exit="exit">
        <motion.li variants={fade} initial="hidden" animate="show" exit="exit">
          <Link to="/" onClick={toggle}>
            Home
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/" ? "50%" : "0" }}
          />
        </motion.li>
        <li>
          <Link to="/about" onClick={toggle}>
            About
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/about" ? "50%" : "0" }}
          />
        </li>
        <li>
          <Link to="/projects" onClick={toggle}>
            Projects
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/projects" ? "50%" : "0" }}
          />
        </li>
        <li>
          <Link to="/contact" onClick={toggle}>
            Contact
          </Link>
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
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  height: 4.2rem;
  width: 100%;
  background: var(--clr-med);
  z-index: 10;

  .hamburger {
    z-index: 10;
    cursor: pointer;
    margin-left: 3rem;
    .line {
      width: 1.7rem;
      height: 3px;
      background-color: var(--clr-dark);
      margin-bottom: 0.3rem;
    }
  }

  .img {
    z-index: 2000;
    img {
      height: 4rem;
    }
    /* width: 25rem; */
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledUl = styled.ul`
  position: fixed;
  opacity: ${({ isOpen }) => (isOpen ? ".85" : "0")};
  bottom: ${({ isOpen }) => (isOpen ? "0" : "100%")};
  width: 100vw;
  height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
  background: var(--clr-med);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  margin-top: 4rem;
  z-index: 5;
  transition: all 300ms ease-in-out;

  li {
    position: relative;
  }

  a {
    /* position: relative; */
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 1.6rem;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: var(--clr-accent);
  width: 0%;
  position: absolute;
  bottom: -10%;
  left: 30%;
`;

export default MobileNav;
