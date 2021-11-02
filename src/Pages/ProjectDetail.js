import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProjectState } from "../Data/projectState";
import { motion } from "framer-motion";
import { pageAnimation, fade, lineAnim } from "../Components/Animations";
import ProjectDescription from "../Components/ProjectDetail/ProjectDescription";
import ImageDetail from "../Components/ProjectDetail/ImageDetail";

const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects] = useState(ProjectState);
  const [project, setProject] = useState(null);

  // useEffect
  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
  }, [projects, url]);

  return (
    <>
      {project && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <Wrapper>
              <motion.h1 variants={fade}>{project.title}</motion.h1>
              <motion.div variants={lineAnim} className="line"></motion.div>
              <div className="flex">
                <div className="img">
                  <motion.img
                    src={project.mainImg}
                    alt="project"
                    variants={fade}
                  />
                </div>
                <ProjectDescription
                  technologies={project.technologies}
                  longDescription={project.longDescription}
                />
              </div>
            </Wrapper>
          </Headline>
          <Description>
            {project.secondaryImg.map((image) => (
              <ImageDetail image={image} key={image.alt} />
            ))}
          </Description>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: var(--clr-dark);
  width: 100%;
`;

const Headline = styled.div`
  min-height: 90vh;
  max-width: 100%;
  padding: 4rem 2rem;
  position: relative;
  display: flex;
  gap: 5rem;
  justify-content: space-between;
  background: var(--clr-white);

  h1 {
    /* font-size: clamp(1.8rem, 4vh, 4.5rem); */
    font-weight: 700;
    width: 100%;
  }

  .line {
    height: 0.5rem;
    background: var(--clr-dark);
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    padding-top: 8rem;
  }
`;

const Wrapper = styled(motion.div)`
  padding-bottom: 10rem;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    max-width: 100%;
    /* height: 50vh; */
    object-fit: cover;
    background: var(--clr-white);
    padding: 2rem;
    border-radius: 0.8rem;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      100px 100px 80px rgba(0, 0, 0, 0.07);
  }

  .flex {
    display: flex;
    gap: 5rem;

    @media (max-width: 1030px) {
      flex-direction: column;
      width: 100%;
    }
  }
`;

const Description = styled.div`
  min-height: 50vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(520px, 1fr));
  /* grid-auto-flow: repeat(auto-fill, minmax(200px, 1fr)); */
  grid-gap: 0.5rem;
  background: var(--clr-white);
  max-width: 100%;
  align-items: center;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 5rem; */
  margin: 0 auto;
  padding: 5rem 2rem;

  @media (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
`;

export default ProjectDetail;
