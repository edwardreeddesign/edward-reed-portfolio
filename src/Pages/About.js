import React from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  lineAnim,
  scrollReveal,
} from "../Components/Animations";
import { useScroll } from "../Components/UseScroll";
import ScrollTop from "../Components/ScrollTop";
import SocialLinks from "../Components/AboutPage/SocialLinks";

const About = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  return (
    <StyledAbout
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "var(--clr-dark)" }}
    >
      <ScrollTop />

      <Wrapper>
        <motion.h1 variants={fade}>About Me</motion.h1>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Hide>
          <motion.div ref={element} animate={controls} variants={scrollReveal}>
            <p>
              Hello, my name is <span>Ed Reed</span>. I live in Windsor Ontario
              Canada.
            </p>
            <p>
              I had a career in construction, before suffering a life altering
              accident.
            </p>
            <p>
              After high school I started in sales. I did extremely well with
              that, but I was always told "you need to learn a trade". So that's
              what I did. I started in HVAC installation.
            </p>
            <p>
              I started out as a "helper", and quickly moved up to lead
              installer, running my own crew.
            </p>
            <p>
              With construction being a semi-seasonal job (winter months are
              very slow), I grew tired of being laid off for the season.
            </p>
            <p>
              I decided at the age of 36 to go back to school. I received a
              diploma in Network Engineering. In my city of Windsor Ontario,
              there weren't very many jobs in that field, and having a family
              with 2 young children moving to a new city for a fresh start
              wasn't in the books for me. So I fell back to my trade.
            </p>
            <p>
              Then December of 2012 came. While crossing the street, I was hit
              by a car, and my life would never be the same again.
            </p>
            <p>
              I suffered major injuries and would never be able to do what I did
              before. It took many years of rehab and learning what I now could
              do, to get me where I am today.
            </p>
            <p>
              My oldest son was just about to graduate High School, and decided
              he wanted to go to College for Web Development.
            </p>
            <p>
              That was always something I wanted to do, so i started looking
              into it for myself. I started taking online courses. In a few
              short weeks, I created my first Website. Windsor Lodge 403 is a
              local Freemason Lodge and needed a site. They had asked me almost
              5 years ago, because I mentioned I was going to start learning how
              to do it. I wasn't ready yet, still recouping from my injuries.
            </p>
            <p>
              For most people, 2020 and 2021 haven't been very good for them.
              For me it has been a lifesaver. Going from not knowing what I was
              going to do with my career, to finding something I truly love. I
              enjoy creating something from just a vision in my head, to
              something that others will enjoy.
            </p>
            <p>
              My previous employment really helps with my new career. I always
              worked with the homeowners on how they wanted their installation,
              and now I get to work with individuals and businesses to create a
              site that will help them get more business.
            </p>
            <p>
              I have always had the ability to see what works and doesn't work
              for the companies I worked for. I can changes that are needed for
              them to succeed and what they are doing wrong, that is losing them
              business.
            </p>
            <p>
              When I work for a company, I always make it part of my family. I
              go above and beyond what is asked of me, because if they succeed,
              then I too succeed.
            </p>
          </motion.div>
        </Hide>
      </Wrapper>
      <Wrapper>
        <motion.div ref={element2} animate={controls2} variants={scrollReveal}>
          <motion.h1 variants={fade}>Social Links</motion.h1>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <SocialLinks />
        </motion.div>
      </Wrapper>
      <Wrapper>
        <Hide>
          <motion.div
            ref={element3}
            animate={controls3}
            variants={scrollReveal}
          >
            <motion.h1 variants={fade}>Why Choose Me?</motion.h1>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <p>
              In a world of ever changing ways of doing almost everything. Now
              is the time to create a website that will change with how people
              use the internet.
            </p>
            <p>
              With online shopping now outpacing retail shopping, your business
              needs to keep up with demand. From curbside delivery to
              conventional delivery, your business must be able to adapt to what
              your customer needs.
            </p>
            <p>
              From retail stores that needs for customers to be able to purchase
              items for immediate pickup, to restaurants customers can choose
              their own menus for delivery or pickup, you need to be able to
              handle all requests.
            </p>
            <p>
              I see small businesses choosing to use templates to create a
              website. That's fine, if you want to be the same, and have a
              'cookie cutter' website. One that you will see everywhere.
            </p>
            <p>
              By choosing a person that actually creates sites from scratch,
              businesses will get exactly what they want, instead of getting
              what they can.
            </p>
          </motion.div>
        </Hide>
        <Button primary>Contact</Button>
      </Wrapper>
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  /* min-height: 100vh; */
  overflow: hidden;
  padding: 5rem 5rem;
  color: var(--clr-med);

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const Wrapper = styled(motion.div)`
  padding-bottom: 5rem;

  .line {
    height: 0.5rem;
    background: var(--clr-accent);
    margin-bottom: 3rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default About;
