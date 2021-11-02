import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade } from "../../Components/Animations";

const ImageDetail = ({ image }) => {
  return (
    <>
      <StyledImage variants={fade}>
        <img src={image.src} alt={image.alt} />
      </StyledImage>
    </>
  );
};

const StyledImage = styled(motion.div)`
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  /* grid-auto-flow: repeat(auto-fill, minmax(200px, 1fr)); */
  /* grid-gap: 2rem; */
  /* background: var(--clr-white);
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 5rem;
  padding: 5rem 3rem;

  @media (max-width: 720px) {
    padding: 1rem;
    gap: 1rem;
  } */

  img {
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
    grid-auto-flow: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
    background: var(--clr-accent);
    width: 40rem;
    max-width: 100%;
    /* min-height: 30rem; */
    max-height: 50rem;
    object-fit: cover;
    object-position: top;
    padding: 1rem;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      100px 100px 80px rgba(0, 0, 0, 0.07);
    @media (max-width: 768px) {
      object-fit: contain;
      height: auto;
    }
  }
`;

export default ImageDetail;
