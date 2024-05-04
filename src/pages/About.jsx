import React from "react";
import { motion } from "framer-motion";
import { AiOutlineInfoCircle } from "react-icons/ai";
import roshanImg from "../assets/self.jpg";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ ease: "easeIn", duration: "0.5", type: "spring" }}
      exit={{ x: "-100%" }}
    >
      <Helmet>
        <title>About Me - Roshan Ojha</title>
        <meta
          name="description"
          content="Roshan Ojha | Software Developer || B.E in Electronics and Telecommunication Engineering || JavaScript || MERN || SQL || Docker || AWS (EC2, RDS, IAM, Lambda) "
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="About Me - Roshan Ojha" />
        <meta
          property="og:description"
          content="Dive into the profile of Roshan Ojha, Roshan Ojha | Software Developer || B.E in Electronics and Telecommunication Engineering || JavaScript || MERN || SQL || Docker || AWS (EC2, RDS, IAM, Lambda)"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me - Roshan Ojha" />
        <meta
          name="twitter:description"
          content="Roshan Ojha | Software Developer || B.E in Electronics and Telecommunication Engineering || JavaScript || MERN || SQL || Docker || AWS (EC2, RDS, IAM, Lambda)"
        />
        <meta name="twitter:image" content={roshanImg} />
      </Helmet>
      <div className="md:w-[70vw] w-[90vw] md:h-[80vh] h-[100vh] p-5 lg:p-10">
        <h1 className="text-center text-white md:text-5xl sm:text-3xl text-xl font-bold mb-5">
          About Me:
        </h1>
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="about-me-text lg:px-10 p-2 py-10 md:text-2xl sm:text-xl text-sm font-mono text-white/70">
            <p className=" ">
              I am{" "}&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis">
                Roshan Ojha. &nbsp;
              </span>
              I'm a Full Stack Developer. I love to learn and work on new technologies. <br /> I find Web Dev fun.
              <br />
              BTW, Software Dev at &nbsp;
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className=" border-b-2 border-[#EF4444] border-opacity-25 transition ease-in hover:border-opacity-75 "
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis">
                 Samarth eGov, Ministry of Education
                </span>
              </a>. <br /> Also into Graphic Designing, Photo manipulation, gaming and video editing. <br /> I write informative posts on my socials
              sometimes. <br />
            </p>
           
          </div>

          <div className="sm:w-[600px] w-1/2 m-auto">
            <img
              src={roshanImg}
              className=" w-full ease-in aspect-square object-cover rounded-[50%]"
              alt="Roshan Ojha"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
