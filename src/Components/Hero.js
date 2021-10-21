import React from "react";
import styled from "styled-components";
import heroImg from "../Images/edward-reed.jpg";
import Wave from "../Components/Wave";

import Button from "./Button";

const Hero = () => {
  return (
    <StyledHero>
      <img src={heroImg} alt="Portrait of Edward Reed" className="heroImg" />

      <div className="info">
        <h1>Ed Reed</h1>
        <h3>Web Developer, Programmer, Front-End Designer, UI/UX</h3>
        <div className="btns">
          <Button primary>LET'S WORK TOGETHER</Button>
          <Button secondary>VIEW MY WORK</Button>
        </div>
      </div>
      <Wave />
    </StyledHero>
  );
};

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  .heroImg {
    position: relative;
    width: 25%;
    margin: 4rem;
    border-radius: 0.8rem;
    box-shadow: -30px -30px 2px var(--clr-accent);
    transition: all 350ms ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
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

export default Hero;
