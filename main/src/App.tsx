import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
// import Name from './views/ts/name';
import FirstPage from './views/ts/kwon';
import SecondPage from './views/ts/project';
import ThirddPage from './views/ts/pastime';
import ReactPlayer from 'react-player'

import PageOne from './views/ts/pageOne';
import PageTwo from './views/ts/pageTwo';
import PageThree from './views/ts/pageThree';
import TestFram from './testfram';

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const items = [
    {
      id: '1',
      title: <PageOne />,
      component: <FirstPage />, // 첫 번째 페이지 컴포넌트
      style: { x: -450, y: -270 }, // 위치를 커스텀하기 위한 스타일 설정
    },
    {
      id: '2',
      title: <PageTwo />,
      component: <SecondPage />, // 두 번째 페이지 컴포넌트
      style: { x: -370, y: -170 }, // 위치를 커스텀하기 위한 스타일 설정
    },
    {
      id: '3',
      title: <PageThree />,
      component: <ThirddPage />, // 세 번째 페이지 컴포넌트
      style: { x: -600, y: -100 }, // 위치를 커스텀하기 위한 스타일 설정
    },
  ];

  return (

    <div id='container'>
      {items.map(item => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
          style={item.style} // 컴포넌트의 위치 스타일 적용
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, rotate: [0, 180, 360] }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >{item.title}</motion.div>
        </motion.div>
      ))}

      <AnimatePresence >
        {selectedId && (
          <motion.div key={selectedId} layoutId={selectedId}>
            {items.find(item => item.id === selectedId)?.component}
            <motion.button onClick={() => setSelectedId(null)}>
              <div className="color-changing-div" style={{ position: 'absolute', zIndex: 1 }} >
                <div className="color-changing-border">
                  뒤로
                </div>
              </div></motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <ReactPlayer
        url={"https://youtu.be/UxpjpxLi-Qg"}
        width="100vw"
        height="100vh"
        loop={true}
        playing={true}
        muted={true}
        controls={false}
        style={{ position: 'absolute', zIndex: -1, pointerEvents: 'none' }}
      />


    </div>
  );
}

export default App;
