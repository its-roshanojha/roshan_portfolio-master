import React from "react";
import HeroImg from "../assets/heroimg.svg";
import { socialIcons } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <motion.div
      className="flex md:flex-row flex-col-reverse justify-evenly items-center w-[100vw] gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: "1", type: "spring" }}
      exit={{ x: "-100%" }}
    >
      <Helmet>
        <title>Roshan Ojha - Web Developer</title>
        <meta
          name="description"
          content="Hi, I'm Roshan Ojha, a web developer passionate `about `creating innovative web solutions. Connect with me to discuss web development and explore my projects."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="Roshan Ojha - Web Developer" />
        <meta
          property="og:description"
          content="Hi, I'm Roshan Ojha, a web developer passionate about creating innovative web solutions. Connect with me to discuss web development and explore my projects."
        />
        <meta property="og:image" content={HeroImg} />
        <meta property="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Hi, I'm Roshan Ojha, a web developer passionate about creating innovative web solutions. Connect with me to discuss web development and explore my projects."
        />
        <meta name="twitter:image" content={HeroImg} />
      </Helmet>

      <div className="welcome-text">
        <h1 className="md:text-5xl text-3xl text-center font-bold text-white">
          Hi, I'm{" "}
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis`}
          >
            Roshan Ojha
          </span>
        </h1>
        <h2>
          <p className="text-center text-white font-mono mt-2 text-lg tracking-widest">
            I learn. I build. I ship.
          </p>
        </h2>
        <div className="flex flex-row justify-evenly mt-10">
          {socialIcons.map((item) => (
            <a
              href={item.link}
              key={item.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="grid place-items-center rounded-[50%] w-10 h-10 cursor-pointer hover:bg-[#ef4444]">
                <i
                  className={`${item.class} text-white`}
                  aria-label={item.name}
                ></i>
              </div>
            </a>
          ))}
        </div>

        <div className="md:flex flex-row justify-around items-center md:mt-10 mt-5 hidden">
          <Link to="/contact" className=" group flex  items-center gap-2">
            <p className="text-xs text-white font-mono">
              Hiring for Tech Roles?
            </p>
            <button className="outline-2 text-white border-spacing-x-1 group-hover:w-fit  scale-x-0 translate-x-[-50%] group-hover:scale-x-100 group-hover:translate-x-0  bg-[#1f1f1f] hover:bg-[#252525] rounded-lg px-3 py-2 duration-300 transition-all ease-in-out">
              Let's Talk 
            </button>
          </Link>
          <a
            href="https://drive.google.com/file/d/11IW-7LElEkV59HiK-kK54WBSU0_BmWsI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="outline-2 text-white bg-[#1f1f1f] rounded-lg hover:bg-[#252525] px-3 py-2">
              Resume
            </button>
          </a>
        </div>
        <div className="md:hidden  justify-around items-center md:mt-10 mt-5 flex ">
          <div className="text-white flex gap-1 font-mono items-center text-xs">
            <p>
              <Link to="/contact" className=" group flex  items-center gap-2">
                <span className=" text-white underline underline-offset-8 ">Hiring</span>
              </Link>
            </p>
            <p>for Tech Roles?</p>
          </div>
          <a
            href="https://drive.google.com/file/d/11IW-7LElEkV59HiK-kK54WBSU0_BmWsI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="outline-2 text-white bg-[#1f1f1f] rounded-lg hover:bg-[#252525] px-3 py-2">
              Resume
            </button>
          </a>
        </div>
      </div>
      <div className="self-img">
        <img className="w-[70vw] lg:w-96" src={HeroImg} alt="Roshan Ojha" />
      </div>
    </motion.div>
  );
};

export default Hero;
