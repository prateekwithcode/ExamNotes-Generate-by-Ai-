import React from "react";
import Navbar from "../components/Navbar";
import { transform } from "motion/react";

function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-black">
      <Navbar />
      {/* TOP */}
      <section className="max-w-7xl mx-auto px-8 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ rotateX: 6, rotateY: -6 }}
            style={{transformStyle:"preserve-3d"}}
            className="transform-gpu"
          >
            <motion.h1 className="text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br from-black/90">

            </motion.h1>
          </motion.div>
        </div>
        <div></div>
      </section>

      {/* BOTTOM */}
      <section></section>
    </div>
  );
}

export default Home;
