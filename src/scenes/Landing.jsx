import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { Typewriter} from 'react-simple-typewriter'
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile1 from '../Images/profile2.jpeg'

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  let mediaicons =[ {link:"https://www.linkedin.com/in/ruby-pal-123creator/",img:"fa-brands fa-linkedin-in" ,alt:"linkedin"},{link:"https://github.com/Ruby123-creator",img:"fa-brands fa-github" ,alt:"github"} ,{
    link:"" ,img:"fa-solid fa-phone" ,alt:"9911412558"
  }]
  
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-44"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10  md:mt-5 flex justify-center md:order-2">
        {isAboveLarge ? (
          
              <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 rounded-full  w-80 h-80"
              src={profile1}
            /> 
          
        ) : (
          <img
            alt="profile"
            className="z-10 rounded-full w-72 h-72"
            src={profile1}
          />
        )} 
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-10 md:mt-30">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-4xl font-playfair z-10 text-center md:text-start">
          <span className="wave -rotate-45" role="img" aria-labelledby="wave">👋🏻</span> Hii... I'm Ruby Pal
          </p>

          <p className="mt-10 mb-7 font-medium text-3xl text-center md:text-start">
           I'm a
       <span className="text-cyan-600"> <Typewriter
       
       words={['Full Stack Developer' ,'Fronted Developer']}
       loop={100}
       cursor
       cursorStyle='|'
       typeSpeed={60}
       deleteSpeed={50}
       delaySpeed={700}
       />
</span>

          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-cyan-500 transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex  space-x-5">
          {
            
            mediaicons.map((element,index)=>
              <SocialMediaIcons icon={element.img} key={index} href = {element.link} alt ={element.alt}/>
)
          }
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
