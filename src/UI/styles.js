import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  min-width: 100%;
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
  /* overflow: hidden; */
  z-index: 2;

  img {
    box-shadow: -30px -30px 0 var(--clr-accent);
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    padding: 5rem 0;
    img {
      width: 90%;
      height: 60vh;
      margin-top: 3rem;
    }
  }
`;

export const Description = styled(motion.div)`
  flex: 1;
  padding-left: 5rem;
  z-index: 2;
  /* height: 70vh; */
  h1 {
    /* font-size: clamp(2.5rem 3vw 4.5rem); */
    font-weight: 700;
    margin-bottom: 3rem;
    filter: drop-shadow(-10px -10px 0 var(--clr-accent));
  }
  h2 {
    /* font-size: 3rem; */
    font-weight: 400;
    margin-bottom: 1rem;
  }

  @media (max-width: 1500px) {
    padding: 0;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
