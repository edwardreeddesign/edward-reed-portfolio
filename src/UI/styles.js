import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
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
export const Image = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  box-shadow: -30px -30px 2px var(--clr-accent);
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

  @media (max-width: 1500px) {
    img {
      width: 100%;
    }
  }
`;

export const Description = styled(motion.div)`
  flex: 1;
  padding-left: 5rem;
  z-index: 2;

  h1 {
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    filter: drop-shadow(-10px -10px 2px var(--clr-accent));
  }
  h2 {
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
