import { motion } from "framer-motion";
import React from "react";
import { socialIcons } from "../constants";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ ease: "easeIn", duration: "0.5", type: "spring" }}
      exit={{ x: "-100%" }}
    >
      <Helmet>
        <title>Contact Me - Roshan Ojha</title>
        <meta
          name="description"
          content="Get in touch with Roshan Ojha. Schedule a meeting, send a message, or reach out through various social media channels. Feel free to write an email directly to hi@rajaryan.work"
        />
        <meta property="og:title" content="Contact Me - Roshan Ojha" />
        <meta
          property="og:description"
          content="Get in touch with Roshan Ojha. Schedule a meeting, send a message, or reach out through various social media channels. Feel free to write an email directly to hi@rajaryan.work"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Me - Roshan Ojha" />
        <meta
          name="twitter:description"
          content="Get in touch with Roshan Ojha. Schedule a meeting, send a message, or reach out through various social media channels. Feel free to write an email directly to hi@rajaryan.work"
        />
      </Helmet>

      <div className="md:w-[70vw] w-[90vw] md:h-[80vh] h-[100vh] p-10">
        <h1 className="text-center text-white md:text-5xl text-3xl font-bold font-sans-serif md:mb-5 mb-10">
        <span style={{"color" : "#fe5353"}}>Contact</span> Me :
        </h1>

        <div className="flex flex-col-reverse md:flex-row justify-around mt-10 w-[100%]">
          <div className="md:w-[50%] w-[100%]  my-16">
            <div className="text-white mb-10">
              <h1 className="text-bold text-2xl font-semibold">Feel free to reach out via <span style={{"color" : "#fe5353"}}> Email</span> or <span style={{"color" : "#fe5353"}}> Message</span> </h1>
            </div>
            <h2 className="text-white font-bold text-2xl mb-3">
              Send A Message
            </h2>
            <form
              action="https://getform.io/f/pbnvjdmb"
              method="POST"
              target="_blank"
              onSubmit={""}
              >
              <div className="flex flex-row  justify-between">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  name="Name"
                  className="mt-1 block w-[45%] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                />

                <input
                  type="email"
                  required
                  placeholder="Your Email *"
                  name="Email"
                  className="mt-1 block w-[45%] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      "
                />
              </div>
              <div className="flex flex-col py-3 gap-3">
                <input
                  type="text"
                  placeholder="Subject"
                  name="Subject"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      "
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  name="Message"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      "
                />
                <button
                  type="submit"
                  className="bg-[#ef4444] hover:bg-red-800 ease-in-out duration-150 text-white  w-fit self-center p-2 px-4 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-evenly md:my-10 my-5">
              {socialIcons.map((item) => (
                <a href={item.link} key={item.name} target="_blank">
                  <div className="flex flex-row items-center justify-between w-fit">
                    <div className=" grid place-items-center rounded-[50%] w-10 h-10 cursor-pointer hover:bg-[#ef4444] ">
                      <i className={`${item.class} text-white`}></i>
                    </div>
                    <h2 className="text-white/50 text-lg ">{item.text}</h2>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-white">
              <h1 className="text-bold text-2xl font-semibold">
                Or you can write a mail directly to
              </h1>
              <a href="mailto:its.roshanojha@gmail.com">
                <p className="my-5 text-center underline underline-offset-8 font-sans-serif text-xl tracking-widest	">
                <span style={{"color" : "#fe5353"}}>its.roshanojha@gmail.com</span>
                </p>
              </a>
            </div>

            <div className="text-white">
              <h1 className="text-bold text-2xl font-semibold">
                Schedule a meeting : <a href="https://calendly.com/its-roshanojha"  target="_blank">
                <span style={{"color" : "#fe5353"}}>Click Here</span>
              </a>
              </h1>
              
            </div>
          </div>

          
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
