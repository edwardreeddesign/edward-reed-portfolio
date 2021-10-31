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
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  img {
    background: var(--clr-accent);
    width: 30rem;
    max-width: 100%;
    height: 20rem;
    object-fit: cover;
    padding: 1rem;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      100px 100px 80px rgba(0, 0, 0, 0.07);
    @media (max-width: 580px) {
      /* height: 10rem; */
    }
  }
`;

export default ImageDetail;
