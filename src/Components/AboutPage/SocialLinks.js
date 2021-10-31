import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const SocialLinks = () => {
  return (
    <StyledLinks>
      <div className="icons">
        <AiFillLinkedin />
        <AiFillGithub />
        <AiFillInstagram />
      </div>
    </StyledLinks>
  );
};

const StyledLinks = styled(motion.div)`
  background: var(--clr-med);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 20vh;

  .icons {
    font-size: 5rem;
    color: var(--clr-dark);
  }
`;

export default SocialLinks;
