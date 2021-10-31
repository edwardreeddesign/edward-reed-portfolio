import React from "react";
import styled from "styled-components";

import css from "../../Images/css.png";
import html from "../../Images/html-5.png";
import javascript from "../../Images/javascript.svg";
import reactJs from "../../Images/reactJs.png";
import home2 from "../../Images/home2.jpg";

import { About, Description } from "../../UI/styles";
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
        <h1>Technologies</h1>
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
      {/* <Image>
        <img src={home2} alt="MacBook with Code" />
      </Image> */}
    </Structures>
  );
};

const Structures = styled(About)`
  background-image: url(${home2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h1 {
    padding-bottom: 3rem;
    box-shadow: none;
  }
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  background: var(--clr-med);
  padding: 0.75rem;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);

  .icon {
    display: flex;
    align-items: center;
  }
  img {
    height: 5rem;
    width: 5rem;
  }

  h3 {
    margin-left: 1rem;
    background: var(--clr-accent);
    color: var(--clr-dark);
    padding: 0.5rem;
  }

  p {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Work;
