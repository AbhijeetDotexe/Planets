import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import BlogPost from "./components/BlogPost";

const pageVariants = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100vh",
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

function App() {
  useEffect(() => {
    // Scroll to the top of the page on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <NavBar />
      <main className="bg-gray-100">
        <section id="placements" className="min-h-screen">
          <Hero />
        </section>
        <section id="about" className="min-h-screen">
          <AboutMe />
        </section>
        <section id="blog" className="min-h-screen">
          <BlogPost />
        </section>
      </main>
    </motion.div>
  );
}

export default App;
