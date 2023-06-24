
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';


export default function Kwon() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['../img/navy.jpg', '../img/green.jpg', '../img/pink.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="kwonpage">
      <div className="textdiv">asd</div>
      <div className="imgdiv"> <img src={images[currentImage]} /></div>

    </div>
  );
};
