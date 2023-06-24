
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
        Lorem Ipsum.



        웹 서핑을 하다보면,

        그래픽 디자인이나 타이포그래피 그리고 웹 템플릿 등을 통해 흔히 만나볼 수 있습니다.

        하지만 로렘입숨의 의미나 용도를 정확히 알지는 못했는데,

        갑자기 궁금하더라구요.



        그래서 한 번 찾아 봤습니다.



        로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은

        출판이나 그래픽 디자인 분야에서

        폰트, 타이포그래피, 레이아웃 같은

        그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로,

        최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에

        시각 디자인 프로젝트 모형의 채움 글로도 이용된다.

        이런 용도로 사용할 때 로렘 입숨을 그리킹(greeking)이라고도 부르며,

        때로 로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도 사용된다.

        [참고: 위키백과]





        쉽게 말하면,

        콘텐츠와 텍스트가 보이는 상황을 가정해,

        임의의 텍스트를 넣어서

        폰트나 전체적인 레이아웃을 맞춰볼때 쓰는 용도라고 하면 될 것 같습니다.



        말이 되는 문자열이면

        뷰를 보는걸 떠나서 그 내용에 논란이 생기거나

        집중이 흐트러지고

        한편으로는 아무 텍스트를 긁어올 수도 없고 해서 쓴다고 하네요.

        (왠지 글자가 보이면 읽으려고 하는 게 본능인가봐요~ 저만 그런게 아니었어요ㅋㅋ)



        그래서, 아래 링크로 가면 로렘입숨을 구하실 수 있어요.



        영문은 여기로
      </div>

      <img src={images[currentImage]} className="imgdiv" />


    </div>
  );
};
