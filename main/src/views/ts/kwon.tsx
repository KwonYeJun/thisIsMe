
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
      <div className="textdiv">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
        >
          <div className="textchild">
            <h1>안녕하세요</h1>
            <span>어떤 것이든 하다 보면 처음과 달리 성장할 수 있다 라고 생각 하는 권예준 이라고 합니다.</span>
          </div>

        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
        >
          <div className="textchild">
            <h1>지금 무슨 키보드 쓰세요?</h1>
            <span>저는 키보드 타건을 하고 취미생활로 키보드 커스텀을 하는 것을 좋아 합니다.</span><br />
            <span>혹시 저와 같이 키보드를 좋아 하시는 분이 계신다면 kyjuni1059@gmail.com 으로 좋은 정보를 공유 해주시면 감사하겠습니다. 😊</span>
          </div>
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
        >
          <div className="textchild"><h1>파이팅 넘치는 분위기</h1>
            <span>제가 팀 작업을 진행하면서 받았던 칭찬 한 마디는 오래도록 기억에 남아 있습니다.</span><br />
            <span>예준씨와 함께 작업을 할 때, 즐겁고 대화할 때 리액션이 좋고 파이팅 넘치는 분위기를 만들어내는 것을 칭찬받은 적이 있습니다. <br />  저는 대화를 나눌 때는 상대방의 의견을 존중하고 진지하게 들어주는 것을 중요하게 생각해요 </span></div>
        </motion.div>
      </div>

      <img src={images[currentImage]} className="imgdiv" />


    </div>
  );
};
