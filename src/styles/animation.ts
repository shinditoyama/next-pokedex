import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const containerBox = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const MotionBox = motion<BoxProps>(Box);
