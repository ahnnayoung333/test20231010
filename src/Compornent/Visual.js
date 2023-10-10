import React from 'react';

function Visual() {
  return (
    <div id="visual">
      <ul className="panel">
        <li className="on">
          <a href="https://www.youtube.com/watch?v=lrDeQ4sF0zo" target="_blank">HARD</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=brs6-n87zeo" target="_blank">JUICE</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=VbczGPPZmUo" target="_blank">10X</a>
        </li>
      </ul>
      <ul className="btns">
        <li className="on"></li>
        <li></li>
        <li></li>
      </ul>
      <nav>
        <i className="fa-solid fa-play on"></i>
        <i className="fa-solid fa-stop"></i>
      </nav>
      <div className="bar"></div>
    </div>
  );
}

export default Visual;
