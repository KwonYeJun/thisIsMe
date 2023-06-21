import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './App.css';
import Name from './views/ts/name';
import Tawonchat from './views/ts/tawonchat';

function App() {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  );

  const xValue = x.get(); // x의 실제 값을 가져옴

  return (
    <>
      <div id="container">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Welcome to My Website</h1>
            <p>This is Me.</p>
            <Name />
          </motion.div>
          <Tawonchat />
          <motion.div style={{ background }}>
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x }}
            >
              <AiOutlineHome x={xValue.toString()} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
