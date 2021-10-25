import React from "react";
import styled from "styled-components";
import heroImg from "../../Images/edward-reed.png";
import Wave from "../Wave";

import Button from "../Button";
// Styles
import { About, Description, Image, Hide } from "../../UI/styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../Animations";

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

const Buttons = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-top: 20rem;
  gap: 3rem;
`;

export default Hero;
