import React, { useState, useEffect } from 'react';
import './App.css';
import Name from './views/ts/name'
import Tawonchat from './views/ts/tawonchat'
function App() {
  const [darkMode, setDarkMode] = useState<any>(false);

  // 페이지가 로드될 때 다크 모드 설정을 확인합니다.
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  // 다크 모드 설정 변경 시 로컬 스토리지에 반영합니다.
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // 다크 모드 상태를 토글합니다.
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
        <div id="container">
          <div>
            <h1>Welcome to My Website</h1>
            <p>This is some content on my website.</p>
            <button onClick={toggleDarkMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <Name />
            <div className="test">
            <Tawonchat />
            </div>
          </div>
        </div>

    </>
  );
}

export default App;
