import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function AboutMe() {
  return (
    <motion.section
      className="bg-blue-600 text-white py-20 px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
          About Me
        </motion.h2>
        <motion.p className="text-lg mb-8 text-justify" variants={itemVariants}>
          I started learning astrology when Jupiter and Saturn were transiting
          the 8th house from my Moon in 2020. It was during this period of
          transformation and introspection that I discovered a deep passion for
          understanding the cosmic patterns that influence our lives. From that
          moment onward, I embarked on a journey of self-learning through books,
          YouTube videos, magazines, and countless articles.
        </motion.p>
        <motion.p className="text-lg mb-8 text-justify" variants={itemVariants}>
          Over the years, my fascination with astrology has grown into a
          dedicated pursuit. I’ve delved into the study of natal charts,
          planetary transits, and the intricate relationships between celestial
          bodies. Each discovery has been a profound reminder of the
          interconnectedness of the universe and how it reflects in our personal
          journeys.
        </motion.p>
        <motion.p className="text-lg mb-8 text-justify" variants={itemVariants}>
          Today, I continue to explore advanced concepts, including predictive
          astrology, dashas, and varga charts. Astrology has not only been a
          subject of study for me but also a way to connect with people,
          understand their stories, and provide meaningful perspectives on life.
          This ever-evolving journey keeps me inspired and motivated.
        </motion.p>
        <motion.button
          className="bg-transparent hover:bg-yellow-400 text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded"
          variants={itemVariants}
        >
          Read More
        </motion.button>
      </div>
    </motion.section>
  );
}

export default AboutMe;
