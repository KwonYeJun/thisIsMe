import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Name from './views/ts/name';
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
      component: <Name />, // 첫 번째 페이지 컴포넌트
      style: { x: -150, y: -150 }, // 위치를 커스텀하기 위한 스타일 설정
    },
    {
      id: '2',
      title: <PageTwo />,
      component: <PageTwo />, // 두 번째 페이지 컴포넌트
      style: { x: 30, y: 30 }, // 위치를 커스텀하기 위한 스타일 설정
    },
    {
      id: '3',
      title: <PageThree />,
      component: <PageThree />, // 세 번째 페이지 컴포넌트
      style: { x: 200, y: 200 }, // 위치를 커스텀하기 위한 스타일 설정
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
            animate={{ opacity: 1, x: 0 ,rotate:[0,180,360]}}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >{item.title}</motion.div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div key={selectedId} layoutId={selectedId}>
            {items.find(item => item.id === selectedId)?.component}
            <motion.button onClick={() => setSelectedId(null)}>뒤로 가기</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
