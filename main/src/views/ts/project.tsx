
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { Swipeable } from 'react-swipeable';

export default function Project() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['../img/navy.jpg', '../img/green.jpg', '../img/pink.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="project">


    
        <div className="textH1">
          <h1>현재 참여중인 프로젝트</h1>

        </div>
{/*  
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
      >
      </motion.div> */}
   
      


    </div>
  );
};
