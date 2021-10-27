import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  slider,
  sliderContainer,
  line,
  lineAnim,
  scrollReveal,
} from "../Components/Animations";

const Projects = () => {
  return (
    <div>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <h1>Projects Page</h1>
    </div>
  );
};

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: var(--clr-white);
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: var(--clr-med);
`;
const Frame3 = styled(Frame1)`
  background: var(--clr-accent);
`;
const Frame4 = styled(Frame1)`
  background: var(--clr-dark);
`;

export default Projects;
