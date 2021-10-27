import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  slider,
  sliderContainer,
  // line,
  lineAnim,
  // scrollReveal,
} from "../Components/Animations";
// import { useScroll } from "../Components/UseScroll";
// import ScrollTop from "../Components/ScrollTop";

//images
// import wlFull from "../Images/Projects/WindsorLodge/wl-full.png";
// import emdb from "../Images/Projects/EMDB/embd-full.png";

const Projects = () => {
  // const [element, controls] = useScroll();
  // const [element2, controls2] = useScroll();
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="exit"
      style={{ background: "var(--clr-white)" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <StyledProjects>
        <motion.h2 variants={fade}>Windsor Lodge 403</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
      </StyledProjects>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h1 {
    padding: 1rem 0;
  }
`;

const StyledProjects = styled(motion.div)`
  padding-bottom: 10rem;
  overflow: hidden;

  .line {
    height: 0.5rem;
    background: var(--clr-dark);
    margin-bottom: 3rem;
  }
`;

// const Hide = styled.div`
//   overflow: hidden;
// `;

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
