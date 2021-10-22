import React from "react";
import styled from "styled-components";
import heroImg from "../Images/edward-reed.png";
import Wave from "../Components/Wave";

import Button from "./Button";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../Components/Animations";

const Hero = () => {
  return (
    <About>
      <Image>
        <motion.img
          variants={photoAnim}
          src={heroImg}
          alt="Edward Reed Portrait"
        />
      </Image>
      <Description>
        <motion.div>
          <Hide>
            <motion.h1 variants={titleAnim}>Ed Reed</motion.h1>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Web Developer, Programmer,
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Front-End Designer, UI/UX
            </motion.h2>
          </Hide>
        </motion.div>
        <Buttons>
          <motion.div variants={fade}>
            <Button primary>LET'S WORK TOGETHER</Button>
          </motion.div>
          <motion.div variants={fade}>
            <Button secondary>VIEW MY WORK</Button>
          </motion.div>
        </Buttons>
      </Description>

      <Wave />
    </About>
  );
};

const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
const Image = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  box-shadow: -30px -30px 2px var(--clr-accent);
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }

  @media (max-width: 1500px) {
    img {
      width: 100%;
    }
  }
`;

const Description = styled(motion.div)`
  flex: 1;
  padding-left: 5rem;
  z-index: 2;
  h1 {
    font-size: 5rem;
    font-weight: 700;
    filter: drop-shadow(-10px -10px 2px var(--clr-accent));
  }
  h2 {
    font-size: 3.5rem;
    font-weight: 400;
  }
`;

const Buttons = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5rem;
  gap: 3rem;
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default Hero;
