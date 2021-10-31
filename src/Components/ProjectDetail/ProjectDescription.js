import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "../Button";

import { fade } from "../Animations";

const ProjectDescription = ({ technologies, longDescription }) => {
  return (
    <StyledDescription>
      <motion.h3 variants={fade}>Technologies</motion.h3>
      <motion.h2 variants={fade}>{technologies}</motion.h2>
      <motion.h3 variants={fade}>Project Info</motion.h3>
      <motion.p variants={fade}>{longDescription}</motion.p>
      <motion.div variants={fade}>
        <Button outline>Visit Site</Button>
      </motion.div>
    </StyledDescription>
  );
};

const StyledDescription = styled(motion.div)`
  width: 100%;
  margin-top: 2rem;
  overflow: hidden;

  h3 {
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 4rem;
  }

  p {
    margin-bottom: 3rem;
  }
`;

export default ProjectDescription;
