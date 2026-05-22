'use client';
import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Starts invisible and slightly pushed down
      whileInView={{ opacity: 1, y: 0 }} // Fades in and slides up
      viewport={{ once: true, margin: "-100px" }} // Triggers right before it enters the screen
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}