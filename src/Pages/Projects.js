import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  slider,
  sliderContainer,
  lineAnim,
  scrollReveal,
} from "../Components/Animations";
import { useScroll } from "../Components/UseScroll";
import ScrollTop from "../Components/ScrollTop";

//images
import wlFull from "../Images/Projects/WindsorLodge/wl-full.png";
import emdb from "../Images/Projects/EMDB/emdb-full.png";

const Projects = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "var(--clr-white)" }}
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <StyledProjects>
        <motion.h2 variants={fade}>Windsor Lodge 403</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/windsor-lodge">
          <Hide>
            <motion.img
              variants={photoAnim}
              src={wlFull}
              alt="Windsor Lodge 403 website "
            />
          </Hide>
        </Link>
      </StyledProjects>
      <StyledProjects
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <h2>EMDB</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/emdb">
          <Hide>
            <motion.img variants={photoAnim} src={emdb} alt="EMDB Website" />
          </Hide>
        </Link>
      </StyledProjects>
      <StyledProjects
        ref={element2}
        variants={scrollReveal}
        animate={controls2}
        initial="hidden"
      >
        <h2>EMDB</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/emdb">
          <Hide>
            <motion.img variants={photoAnim} src={emdb} alt="EMDB Website" />
          </Hide>
        </Link>
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

  @media (max-width: 768px) {
    padding: 5rem 2rem;
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

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 50vh;
      object-fit: contain;
    }
  }
`;

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
