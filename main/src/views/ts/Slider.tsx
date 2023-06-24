import React, { useState } from 'react';

interface SlideProps {
  image: string;
}

const Slide: React.FC<SlideProps> = ({ image }) => {
  return (
    <div className="slide">
      <img src={image} alt="Slide" />
    </div>
  );
};

interface SliderProps {
  slides: string[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = currentIndex + 1 === slides.length ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="slider">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <Slide key={index} image={slide} />
        ))}
      </div>
      <button onClick={goToPrevSlide}>Previous</button>
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

const SliderTest: React.FC = () => {
  const slides = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ];

  return (
    <div>
      <h1>Slider Example</h1>
      <Slider slides={slides} />
    </div>
  );
};

export default SliderTest;