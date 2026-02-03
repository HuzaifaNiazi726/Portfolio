import React, { useState } from "react";
import {motion} from 'framer-motion';

const CardSlider = () => {
  const cards = [
    { id: 1, title: "Plumber", color: "bg-blue-400" },
    { id: 2, title: "Electrician", color: "bg-green-400" },
    { id: 3, title: "Cook", color: "bg-yellow-400" },
    { id: 4, title: "Cleaner", color: "bg-red-400" },
    { id: 5, title: "Mechanic", color: "bg-purple-400" },
  ];

  const [translateX, setTranslateX] = useState(0);

  const handleNext = () => {
    if (translateX > -(cards.length - 3) * 260) {
      setTranslateX(translateX - 260); // move left by one card width
    }
  };

  const handlePrev = () => {
    if (translateX < 0) {
      setTranslateX(translateX + 260); // move right by one card width
    }
  };

  return (
    <div className="relative mx-auto overflow-hidden p-4">
      <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>

      {/* Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2  bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-600 z-10"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2  bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-600 z-10"
      >
        →
      </button>

      {/* Cards Container */}
      <div className="overflow-hidden">
        <motion.div className="" initial={{ x:0}}
          animate={{ x:  250}} 
        transition={{
    duration: 7,         // how long one move takes
    delay: 2,            // start after 2 seconds
    repeat: Infinity,    // repeat forever
    repeatType: "reverse", // move back and forth
    ease: "easeInOut",   // smooth motion
  }}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`min-w-[240px] h-48 ${card.color} rounded-xl flex items-center justify-center text-white text-xl font-semibold mx-2`}
            >
              {card.title}
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardSlider;
