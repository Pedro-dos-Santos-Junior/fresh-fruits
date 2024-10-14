import React from "react";
import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/animation";

const Banner = () => {
  const bgStyle = {
    backgroundImage: `url(${BannerPng})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "10px", 
  };

  return (
    <section className="container mb-12">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14"
      >
        {/* Banner Image com animação */}
        <motion.div
          className="flex justify-center items-center"
          variants={FadeLeft(0.5)}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
         
        </motion.div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              <span>GET FRESH FRUITS TODAY</span>
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              deleniti tempore, sequi accusamus velit nulla voluptates iusto
              perspiciatis natus provident earum quaerat dicta corporis
              voluptate? Fugit eveniet debitis dignissimos odio.
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              commodi corrupti repudiandae sunt!
            </motion.p>
            {/* button section */}
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
