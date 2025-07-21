import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useUIConfig from "../hook/useUIConfig";

const Banner = () => {
  const [layoutData] = useUIConfig();
  const cards = layoutData?.[0]?.blogCards?.cards || [];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cards.length]);

  const next = () => setCurrent((prev) => (prev + 1) % cards.length);
  const prev = () => setCurrent((prev - 1 + cards.length) % cards.length);

  if (!cards.length) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 text-white">
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center w-full h-full px-6 lg:px-20 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 h-[300px] lg:h-[500px]">
            <img
              src={cards[current].image}
              alt={cards[current].title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
            <motion.h2
              className="text-3xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {cards[current].title}
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {cards[current].description}
            </motion.p>
            <motion.a
              href={cards[current].link}
              className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Read More →
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
      >
        ❮
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
      >
        ❯
      </button>
    </div>
  );
};

export default Banner;
