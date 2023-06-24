
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';

export default function Pastime() {
  const embedUrl = `https://youtube.com/shorts/tPcd-h2SQCk?feature=share`;

  return (
    <div className="project">
      <div className="textH1">
        <h1>취미생활</h1>
      </div>
      <div>
        <div className="video-container">
          <video width="100%" height="350px" controls autoPlay>
            <source src="../img/keysound.mp4" type="video/mp4" />
            {/* 다른 형식의 비디오를 지원하려면 여기에 추가 source 태그를 작성하세요 */}
          </video>
        </div>
        </div>


    </div>
  );
};
