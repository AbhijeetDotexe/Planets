"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSun,
  FaMoon,
  FaFire,
  FaMercury,
  FaVenus,
  FaDragon,
  FaCloudMoon,
} from "react-icons/fa";
import { GiJupiter } from "react-icons/gi";
import { IoMdPlanet } from "react-icons/io";
import NetworkAnimation from "./NetworkAnimation";
import PlanetModal from "./PlanetModal";
import planetInfo from "./PlanetInfo";

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

function Hero() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const planets = [
    { name: "Surya (Sun)", icon: <FaSun /> },
    { name: "Chandra (Moon)", icon: <FaMoon /> },
    { name: "Mangala (Mars)", icon: <FaFire /> },
    { name: "Budha (Mercury)", icon: <FaMercury /> },
    { name: "Brihaspati (Jupiter)", icon: <GiJupiter /> },
    { name: "Shukra (Venus)", icon: <FaVenus /> },
    { name: "Shani (Saturn)", icon: <IoMdPlanet /> },
    { name: "Rahu", icon: <FaDragon /> },
    { name: "Ketu", icon: <FaCloudMoon /> },
  ];

  const handlePlanetClick = (planetName) => {
    setSelectedPlanet({
      name: planetName,
      ...planetInfo[planetName],
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section className="relative flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
          <NetworkAnimation />
          <motion.div
            className="relative z-10 mt-8 sm:mt-16 w-full max-w-screen-lg mx-auto flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 text-gray-800 text-center"
              variants={itemVariants}
            >
              AR
            </motion.h1>
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-6 justify-items-center"
              variants={containerVariants}
            >
              {planets.map((planet) => (
                <motion.div
                  key={planet.name}
                  className="flex flex-col items-center cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePlanetClick(planet.name)}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 mb-1 sm:mb-2 flex items-center justify-center text-xl sm:text-2xl"
                  >
                    {planet.icon}
                  </motion.div>
                  <span className="text-xs sm:text-sm text-gray-600 text-center">
                    {planet.name.split(" ")[0]}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <PlanetModal
            isOpen={!!selectedPlanet}
            onClose={() => setSelectedPlanet(null)}
            planetInfo={selectedPlanet}
          />
        </section>
      </main>
    </div>
  );
}

export default Hero;
