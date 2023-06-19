import React from 'react';
import './App.css';
import Name from './views/ts/name'
import Tawonchat from './views/ts/tawonchat'
function App() {


  return (
    <>
      <div id="container">

        <div>
          <Name />
          <Tawonchat />
        </div>
        <div>바밤바
          바 : 바밤바
          밤 : 밤맛나는
          바 : 바밤바</div>
        <div>누가바
          누 : 누가바
          가 : 가까이서보니
          바 : 바밤바</div>
      </div>
    </>
  );
}

export default App;
