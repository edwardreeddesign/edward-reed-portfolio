import React from "react";
import styled from "styled-components";

import css from "../../Images/css.png";
import html from "../../Images/html-5.png";
import javascript from "../../Images/javascript.svg";
import reactJs from "../../Images/reactJs.png";
import home2 from "../../Images/home2.jpg";

import { About, Description, Image } from "../../UI/styles";
import { scrollReveal } from "../Animations";
import { useScroll } from "../UseScroll";

const Work = () => {
  const [element, controls] = useScroll();
  return (
    <Structures
      transition={{ duration: 0.75 }}
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <Description>
        <h1>Frameworks Used</h1>
        <Cards>
          <Card>
            <div className="icon">
              <img src={html} alt="Icon for HTML" />
              <h3>HTML</h3>
            </div>
            <p>HTML provides the basic structure of sites.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={css} alt="Icon for CSS" />
              <h3>CSS</h3>
            </div>
            <p>CSS is used to control presentation, formatting, and layout.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={javascript} alt="Icon for JavaScript" />
              <h3>JavaScript </h3>
            </div>
            <p>
              JavaScript is one of the core technologies of the World Wide Web.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={reactJs} alt="Icon for ReactJs" />
              <h3>React </h3>
            </div>
            <p>
              React is a JavaScript library for building user interfaces or UI
              components.
            </p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="MacBook with Code" />
      </Image>
    </Structures>
  );
};

const Structures = styled(About)`
  h1 {
    padding-bottom: 5rem;
    box-shadow: none;
  }

  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;
  }
  img {
    height: 7rem;
    width: 7rem;
  }

  h3 {
    margin-left: 1rem;
    background: var(--clr-accent);
    color: var(--clr-dark);
    padding: 1rem;
  }

  p {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Work;
