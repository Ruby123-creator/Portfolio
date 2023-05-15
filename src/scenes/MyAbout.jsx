import React from "react";
// import Tilt from "react-tilt";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="md:flex flex-col md:justify-between md:gap-16 m-12"
    >
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5">
          ABOUT <span className="text-red">ME</span>
        </p>
        <LineGradient width="w-1/3" />
      </motion.div>
      <div>
        <p className="mt-1 mb-7 font-playfair text-lg">
          Hi,👋 I'm Ruby Pal an aspiring and determined Full Stack Web
          Developer, curious to explore different industry-standard tech stacks
          and environments. Skilled in the React & Javascript and willing to
          start a career with an organization that provides an opportunity to
          improve skills and knowledge gained as well as to grow along with the
          organization's goal. I developed passion for coding a few years back
          when I printed my first "Hello world" 😃, that hello world just hits
          different 😌 . Since then aesthetically functional websites has just
          been my thing. I'm a quick learner and collaborate closely with
          clients to create efficient, scalable, and user-friendly solutions
          that solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default About;
