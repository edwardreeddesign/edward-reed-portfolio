import React from "react";
import styled from "styled-components";
import navLogo from "../Images/logo-small.svg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import FullNav from "./FullNav";
import MobileNav from "./MobileNav";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <>
      <FullNav />
      <MobileNav />
    </>
    // <StyledHeader>
    //   <Link to="/">
    //     <img src={navLogo} alt="Edward Reed Designs Small Logo" />
    //   </Link>

    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //       <Line
    //         transition={{ duration: 0.75 }}
    //         initial={{ width: "0" }}
    //         animate={{ width: pathname === "/" ? "50%" : "0" }}
    //       />
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //       <Line
    //         transition={{ duration: 0.75 }}
    //         initial={{ width: "0" }}
    //         animate={{ width: pathname === "/about" ? "50%" : "0" }}
    //       />
    //     </li>
    //     <li>
    //       <Link to="/projects">Projects</Link>
    //       <Line
    //         transition={{ duration: 0.75 }}
    //         initial={{ width: "0" }}
    //         animate={{ width: pathname === "/projects" ? "50%" : "0" }}
    //       />
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //       <Line
    //         transition={{ duration: 0.75 }}
    //         initial={{ width: "0" }}
    //         animate={{ width: pathname === "/contact" ? "50%" : "0" }}
    //       />
    //     </li>
    //   </ul>
    // </StyledHeader>
  );
};

// const StyledHeader = styled.div`
//   min-height: 4.3rem;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 1rem 10rem;
//   margin: auto;
//   background: var(--clr-med);
//   position: sticky;
//   top: 0;
//   z-index: 10;

//   img {
//     height: 4rem;
//   }

//   a {
//     text-decoration: none;
//     color: var(--clr-dark);
//   }

//   ul {
//     display: flex;
//     list-style-type: none;
//   }

//   li {
//     padding-left: 10rem;
//     position: relative;
//   }
// `;

// const Line = styled(motion.div)`
//   height: 0.3rem;
//   background: var(--clr-accent);
//   width: 0;
//   position: absolute;
//   bottom: -40%;
//   left: 60%;

//   @media (max-width: 1500px) {
//     bottom: 0;
//     left: 25%;
//   }
// `;

export default Header;
