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

{
  /* <StyledHero>
<StyledImage>
  <img src={heroImg} alt="Portrait of Edward Reed" className="heroImg" />
</StyledImage>
<div className="info">
  <h1>Ed Reed</h1>
  <h3>Web Developer, Programmer, Front-End Designer, UI/UX</h3>
  <div className="btns">
    <Button primary>LET'S WORK TOGETHER</Button>
    <Button secondary>VIEW MY WORK</Button>
  </div>
</div>
<Wave />
</StyledHero> */
}
const StyledHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  height: 90vh;

  .heroImg {
    position: relative;
  }

  .info {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    flex-wrap: wrap;
    width: 50%;

    text-align: left;
    h1 {
      font-size: 5.5rem;
      font-weight: 700;
      margin-bottom: 3rem;
    }
    h3 {
      font-size: 3.5rem;
    }

    .btns {
      display: flex;
      justify-content: flex-start;
      margin-top: 4rem;
      gap: 3rem;
    }
  }
`;

const StyledImage = styled.div`
  width: 50%;
  overflow: hidden;
  margin-left: 8rem;
  border-radius: 0.8rem;
  img {
    width: 60%;
    max-width: 100%;
    margin: 4rem;
    border-radius: 0.8rem;
    box-shadow: -30px -30px 2px var(--clr-accent);
    transition: all 350ms ease-in-out;

    &:hover {
      transform: scale(1.5);
    }
  }
`;

export default Hero;
