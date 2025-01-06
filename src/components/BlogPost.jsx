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

function BlogPost() {
  return (
    <motion.section
      className="py-20 px-6 bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto">
        <motion.article
          className="bg-white rounded-lg shadow-md overflow-hidden"
          variants={itemVariants}
        >
          <div className="p-6">
            <header>
              <motion.h1
                className="text-3xl font-bold mb-2 text-gray-800"
                variants={itemVariants}
              >
                Exploring the Nakshatra: Punarvasu
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 mb-2"
                variants={itemVariants}
              >
                A journey into the celestial home of restoration and renewal.
              </motion.p>
              <motion.p
                className="text-sm text-gray-400 mb-6"
                variants={itemVariants}
              >
                Jan 6, 2025 • 5 min read
              </motion.p>
            </header>

            <motion.div
              className="prose prose-lg max-w-none"
              variants={itemVariants}
            >
              <p>
                <strong>Punarvasu</strong> is the seventh Nakshatra in Vedic
                astrology, spanning from 20° Gemini to 3°20' Cancer. Its name
                translates to "Return of the Light" or "Renewal," signifying
                restoration, positivity, and new beginnings. Ruled by Jupiter
                and associated with the goddess Aditi, Punarvasu carries a
                nurturing, expansive, and optimistic energy that profoundly
                impacts those born under its influence.
              </p>

              <p>
                The primary symbol of Punarvasu is a quiver of arrows,
                representing purpose, potential, and the ability to start anew
                after setbacks. Aditi, the celestial mother of the gods,
                presides over this Nakshatra, imbuing it with qualities of
                compassion, generosity, and boundless possibilities. Its
                planetary ruler, Jupiter, adds an element of wisdom, higher
                learning, and spiritual growth.
              </p>

              <h2>Characteristics of Punarvasu</h2>
              <ul>
                <li>
                  <strong>Optimistic and Resilient:</strong> Those influenced by
                  Punarvasu often display an innate ability to bounce back from
                  adversity.
                </li>
                <li>
                  <strong>Nurturing Nature:</strong> A strong desire to provide
                  care and support for others is a hallmark of this Nakshatra.
                </li>
                <li>
                  <strong>Love for Simplicity:</strong> Punarvasu natives prefer
                  a simple and harmonious lifestyle, steering away from
                  complications.
                </li>
                <li>
                  <strong>Spiritual Inclination:</strong> This Nakshatra often
                  fosters a connection to higher truths and a deeper
                  understanding of life's purpose.
                </li>
              </ul>

              <h2>Astronomical and Astrological Significance</h2>
              <p>
                Astronomically, Punarvasu corresponds to the stars Castor and
                Pollux in the Gemini constellation. These twin stars highlight
                the dual nature of this Nakshatra—combining the rational
                intellect of Gemini with the emotional depth of Cancer. This
                blend brings versatility, adaptability, and a strong emotional
                foundation to individuals.
              </p>

              <h2>Key Themes and Symbolism</h2>
              <p>
                Punarvasu is associated with themes of renewal, restoration, and
                forgiveness. Its energy is particularly potent for starting
                fresh after failure, finding light in dark times, and building
                new foundations. The quiver of arrows signifies directed action,
                focused goals, and the readiness to venture into new territories
                with courage and optimism.
              </p>
            </motion.div>

            <motion.div className="mt-8" variants={itemVariants}>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">
                Read more
              </button>
            </motion.div>
          </div>
        </motion.article>

        <motion.div className="text-center mt-8" variants={itemVariants}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            More Posts
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default BlogPost;
