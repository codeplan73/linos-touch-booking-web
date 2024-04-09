"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const OnScrollAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      style={{
        width: 200,
        height: 200,
        backgroundColor: "blue",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default OnScrollAnimation;
