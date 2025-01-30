"use client";

import { motion } from "framer-motion";

export const MotionDiv = motion.div;
export const MotionNav = motion.nav;
export const MotionSection = motion.section;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionP = motion.p;

export const variants = {
  start: { x: 200, opacity: 0 },
  end: { x: 0, opacity: 1 },
  startUp: { y: 200, opacity: 0 },
  endUp: { y: 0, opacity: 1 },
};

export const aboutVariants = {
  hiddenBottom: {
    y: 100,
    opacity: 0,
  },
  visibleBottom: {
    y: 0,
    opacity: 1,
    staggerChildren: 0.3,
    transition: {
      delay: 0.3,
      duration: 0.4,
    },
  },
  hiddenRight: {
    x: 200,
    opacity: 0,
  },
  visibleRight: {
    x: 0,
    opacity: 1,
  },
};
