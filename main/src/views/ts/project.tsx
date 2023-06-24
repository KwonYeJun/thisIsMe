
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';

export default function Project() {


  return (
    <div className="project">
      <div className="textH1">
        <h1>현재 참여중인 프로젝트</h1>

      </div>
      <div className="textdiv">
      <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
        >
        <img src="../img/poke X digi.png" className="logo" />
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
        >
        <div className="textH1 ">포켓몬과 디지몬을 동시에 즐길 수 있는 멀티버스 커뮤니케이션 게임</div>
        </motion.div>
        <br />
        <br />
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
        >
        <img src="../img/stock.png" className="logo" />
        <br />
        <div className="textH1 ">stock(주식) + together(함께) 라는 의미로
          주식 매매를 개인 단위가 아닌 팀 단위로 함께 할 수 있는 서비스</div>
          </motion.div>
        <br />
        <br />
        <br />
        <br />
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
        >
        <img src="../img/key.png" className="key" />
        <div className="textH1 ">여러가지 축이 어떤 소리를 내는지 간접적으로나마 알 수 있는 사이트를 만들어보면 어떨까 생각했다.</div>
        </motion.div>

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
