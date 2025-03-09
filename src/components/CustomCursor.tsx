import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isPointer ? 1.5 : 1,
        }}
      />
      <motion.div
        className="custom-cursor-follower"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isPointer ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
    </>
  );
};