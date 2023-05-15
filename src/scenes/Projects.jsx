import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Project1 from '../Project1/project-1.png'
import Project2 from '../Project2/project-2.png'
import Project3 from '../Project3/project-3.png'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  // const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative m-4">
      <div className="border my-6 shadow-lg shadow-cyan-700 border-cyan-800 rounded-md p-4 hover:shadow-pink-700 hover:border-pink-700">
      {/* <div className={overlayStyles}>
        <div className="w-6/12">
          <h4 className="text-3xl font-bold text-cyan-900 font-playfair">Cara Style point</h4>

        </div>

        
      </div> */}
      <img src={title} alt="project" />

      <div>
        <p className="mt-7">
        carastyle.com is the first online retailer in Asia to globally distribute a wide range of lifestyle and fashion products from the region.
        it is a fully functioning website where you can search your wishlist , add and delete your items in cart and contact us directly .
        </p>
        <div className="flex justify-between m-2">
          <p className="text-lg">HTML |CSS |Javascript</p>
          <div>
          <a href="https://github.com/Ruby123-creator/Fashion"><button className=" text-4xl m-2" ><i className="fa-brands fa-github"></i></button></a>
        <a href="https://ruby123-creator.github.io/Fashion/"><button className="text-4xl m-2"><i className="fa-brands fa-chrome"></i></button></a>
          </div>
        
      
      </div>
      </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-cyan-500">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 text-xl font-medium">
           Here are a few projects I've worked on recently...
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center items-center">
        <motion.div
          className="sm:grid sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          

          {/* ROW 2 */}
          <Project title={Project1} />
          <Project title={Project2} />

          <Project title={Project3}/>

          
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
