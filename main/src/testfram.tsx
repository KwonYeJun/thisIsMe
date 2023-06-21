
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';


export default function TestFram() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const items = [
    { id: '1', title: '페이지 1', subtitle: '첫 번째 페이지' },
    { id: '2', title: '페이지 2', subtitle: '두 번째 페이지' },
    { id: '3', title: '페이지 3', subtitle: '세 번째 페이지' },
  ];

  return (
    <div>
      {items.map(item => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            key={selectedId}
            layoutId={selectedId}
          >
            <motion.h5>{items.find(item => item.id === selectedId)?.subtitle}</motion.h5>
            <motion.h2>{items.find(item => item.id === selectedId)?.title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>뒤로 가기</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
