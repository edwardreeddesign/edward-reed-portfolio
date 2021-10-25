import React from "react";

import Hero from "../Components/Main/Hero";
import { motion } from "framer-motion";
import { pageAnimation } from "../Components/Animations";
import AboutSection from "../Components/Main/AboutSection";
import Work from "../Components/Main/Work";

const Main = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Hero />
      <AboutSection />
      <Work />
    </motion.div>
  );
};

export default Main;
