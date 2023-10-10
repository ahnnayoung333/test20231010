import React from 'react';

function BestCam() {
  return (
    <figure>
      <h1>BEST CAM</h1>
      <section className="banner">
        <ul>
          <li className="on">
            <h2>key</h2>
            <div className="inner" style={{ backgroundImage: 'url(img/camKey.jpg)' }}></div>
            <a href="#" style={{ background: 'linear-gradient(30deg,#bdddd8,#fac7b8)' }}><span>HARD key</span></a>
            <div className="txt1">
              <p>MBC 230701 HARD 무대</p>
            </div>
          </li>
          <li>
            <h2>key</h2>
            <div className="inner" style={{ backgroundImage: 'url(img/camKeyJu.jpg)' }}></div>
            <a href="#" style={{ background: 'linear-gradient(30deg,#b0c4ff,pink)' }}><span>JUICE key</span></a>
            <div className="txt1">
              <p>SBS 230702 HARD 무대</p>
            </div>
          </li>
          <li>
        <h2>Min ho</h2>
        <div className="inner" style={{ backgroundImage: 'url(img/camMin.jpg)' }}></div>
        <a href="#" style={{ background: 'linear-gradient(30deg,#f1d4d4,#b2ece6)' }}><span>HARD Min ho</span></a>
        <div className="txt1">
          <p>MBC 230701 HARD 무대</p>
        </div>
      </li>
      <li>
        <h2>Min ho</h2>
        <div className="inner" style={{ backgroundImage: 'url(img/camMinJu.jpg)' }}></div>
        <a href="#" style={{ background: 'linear-gradient(30deg,#cce0eb,#ebd9e9)' }}><span>JUCICE Min ho</span></a>
        <div className="txt1">
          <p>SBS 230702 JUICE 무대</p>
        </div>
      </li>
      <li>
        <h2>Tae min</h2>
        <div className="inner" style={{ backgroundImage: 'url(img/camTae.jpg)' }}></div>
        <a href="#" style={{ background: 'linear-gradient(30deg,#f5d1f5,#ffeca9)' }}><span>HARD Tae min</span></a>
        <div className="txt1">
          <p>SBS 230701 HARD 무대</p>
        </div>
      </li>
      <li>
        <h2>Tae min</h2>
        <div className="inner" style={{ backgroundImage: 'url(img/camTaeJu.jpg)' }}></div>
        <a href="#" style={{ background: 'linear-gradient(30deg,#b0c4ff,pink)' }}><span>JUCICE Tae min</span></a>
        <div className="txt1">
          <p>SBS 230702 JUICE 무대</p>
        </div>
      </li>
      <li>
        <h2>SHINee</h2>
        <div className="inner" style={{ backgroundImage: 'url(img/camShinee.jpg)' }}></div>
        <a href="#" style={{ background: 'linear-gradient(30deg,#edd7cb,#b7cddf)' }}><span>HARD SHINee</span></a>
        <div className="txt1">
          <p>SBS 230702 JUICE 무대</p>
        </div>
      </li>
        </ul>
      </section>

      <nav className="btns1">
        <div className="prev">prev</div>
        <div className="next">next</div>
      </nav>

      <aside className="pop">
        <h2>TITLE</h2>
        <div className="txt1">
          <p>SBS 230702 하드 무대</p>
        </div>
        <span className="close">close</span>
      </aside>
    </figure>
  );
}

export default BestCam;
