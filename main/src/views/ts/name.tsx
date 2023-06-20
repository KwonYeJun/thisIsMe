import React from 'react';
import '../css/name.css';
import { motion } from 'framer-motion';

const ColorChangingDiv = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
    <div className="color-changing-div">
      <div className="color-changing-border">
       권예준
      </div>
    </div>
    </motion.div>
  );
};

export default ColorChangingDiv;
