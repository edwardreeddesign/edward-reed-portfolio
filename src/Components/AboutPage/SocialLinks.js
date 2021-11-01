import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const SocialLinks = () => {
  return (
    <StyledLinks>
      <Link
        to={{ pathname: "https://www.linkedin.com/in/edward-reed-designs" }}
        target="_blank"
      >
        <AiFillLinkedin />
      </Link>
      <Link
        to={{ pathname: "https://github.com/edwardreeddesign" }}
        target="_blank"
      >
        <AiFillGithub />
      </Link>
      <Link
        to={{ pathname: "https://www.instagram.com/edwardreeddesigns/" }}
        target="_blank"
      >
        <AiFillInstagram />
      </Link>
    </StyledLinks>
  );
};

const StyledLinks = styled(motion.div)`
  background: var(--clr-med);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;

  font-size: 4rem;
  color: var(--clr-dark);
`;

export default SocialLinks;
