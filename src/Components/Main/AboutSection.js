import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { About, Description, Image } from "../../UI/styles";
import Button from "../Button";

import { motion } from "framer-motion";
import { useScroll } from "../UseScroll";
import { scrollReveal } from "../Animations";

const AboutSection = () => {
  const [element, controls] = useScroll();
  return (
    <div>
      <Wrapper
        transition={{ duration: 0.75 }}
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <h1>ABOUT</h1>
        <div>
          <p>
            “Anybody who can go down 3,000 feet in a mine can sure as hell learn
            to program as well... Anybody who can throw coal into a furnace can
            learn how to program, for God’s sake!” <cite>- Joe Biden</cite>
          </p>

          <p>
            While I did not go down 3,000 feet into a mine, I did start my adult
            life in a completely different route from Web Development. I started
            my career in Sales, moved to Construction, then went to school for
            Network Engineering, then back to construction.
          </p>

          <p>
            After a life altering accident (I was hit by a car), I was unable to
            go back to my previous job. I spent years rehabilitating just to get
            back to a semi normal life again. I started online courses and
            taught myself Web Development.
          </p>
          <div className="button">
            <Link to="/about">
              <Button primary>LEARN MORE ABOUT ME</Button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem auto;
  width: 70%;
  height: 90vh;
  text-align: center;

  @media (max-width: 768px) {
    margin: 20rem auto;
  }

  h1 {
    /* font-size: 4rem; */
    padding-bottom: 5rem;
    font-weight: 500;
  }

  p {
    /* font-size: 1.8rem; */
    text-align: left;
    margin-bottom: 1rem;
  }

  cite {
    text-align: left;
    font-size: 1.4rem;
  }

  .button {
    margin: 5rem auto;
  }
`;

export default AboutSection;
