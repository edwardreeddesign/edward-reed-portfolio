import React from "react";

import Hero from "../Components/Hero";
import { motion } from "framer-motion";
import { pageAnimation } from "../Components/Animations";

const Main = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Hero />
    </motion.div>
  );
};

export default Main;
