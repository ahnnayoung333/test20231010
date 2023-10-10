import React from 'react';

function Member() {
  return (
    <section className="member">
      <h1>MEMBER</h1>
      <section>
        {/* JONGHYUN */}
        <article>
          <div className="inner">
            <div className="txt">
              <h2>JONGHYUN</h2>
              <p>
                SHINee의 멤버이며, 뛰어난 가창력을 가지고 있어 메인보컬을 맡았다.
                2005년, 청소년 가요제를 통하여 SM엔터테인먼트에 캐스팅되었는데, 당시 밴드 내의 포지션은 보컬이 아닌 베이스였었다.
                3년간의 연습생 생활을 거친 후 2008년 5월 25일 소속 그룹 샤이니의 데뷔 미니 앨범 '누난 너무 예뻐 (Replay)'로 데뷔했다.
                그 후 솔로 콘서트도 진행하는 등 다방면으로 활동하던 도중 수년간 지속된 우울증으로 2017년 12월 18일 향년 27세의 나이에 스스로 세상을 떠났다.
                12월 21일 발인이 진행되었고, 이후 납골묘에 안치되었다.
              </p>
            </div>
            <figure>
              <img src="./img/Shinne_jjong.jpg" alt="샤이니 종현 사진" />
            </figure>
          </div>
        </article>

        {/* KEY */}
        <article>
          <div className="inner">
            <div className="txt">
              <h2>KEY</h2>
              <p>
                SHINee의 멤버이며, 보컬, 리드래퍼, 리드댄서를 맡고 있다.
                중학교 1학년 때 본격적으로 가수의 꿈을 가져 여러 차례 오디션을 보다가 2006년 1월에 열린 SM 전국 투어 오디션에 합격해 연습생이 되었다.
                본인은 항상 "제가 대체 어떻게 데뷔했는지 모르겠다"(JTBC 말하는대로), "제발 한 번만 들어가게 해달라고 빌었다"(해피투게더(KBS))며 웃으면서 얘기하지만
                키가 본 오디션은 8,000:1의 경쟁률을 자랑했으며, 오디션 영상을 보면 알겠지만 오디션 카페에 무수히 많은 후기글이 올라왔을 정도로 엄청나게 튀는 지망생이었다.
                수많은 아이돌 지망생들을 봐왔을 이수만이 "얘는 우리 애네"라고 직접 찍어 얘기했을 정도였다.
              </p>
            </div>
            <figure>
              <img src="./img/Shinne_key.jpg" alt="샤이니 키 사진" />
            </figure>
          </div>
        </article>

        {/* MINHO */}
        <article>
          <div className="inner">
            <div className="txt">
              <h2>MINHO</h2>
              <p>
                SHINee의 멤버이며, 메인래퍼,보컬을 맡고 있다.
                연습생 때 보컬을 주로 담당하는 나머지 4명의 멤버들에 비해 음역대가 낮은 편인 민호를 래퍼로 전향시켜 데뷔시켰다 한다.
                민호는 다방면의 엔터테이너로서 샤이니 멤버 중 가장 활발한 개인 활동을 펼치고 있어 대중적인 인지도가 가장 높다.
                뛰어난 운동신경을 자랑하여 데뷔 초부터 '출발 드림팀'에서 에이스로 활약했다. 그 외 여러 예능에 출연하여 발군의 기량을 보이며 많은 인기를 얻고 있다.
                또한 연기에도 도전하여 정극 드라마와 영화에도 출연하는 등 활동을 넓혀가고 있다.
              </p>
            </div>
            <figure>
              <img src="./img/Shinne_min.jpg" alt="샤이니 태민" />
            </figure>
          </div>
        </article>

        {/* TAEMIN */}
        <article>
          <div className="inner">
            <div className="txt">
              <h2>TAEMIN</h2>
              <p>
                SHINee에서 막내, 메인댄서, 보컬을 맡고 있다.
                매주 토요일마다 열리는 SM 공개 오디션에서 소녀시대 윤아 이후 2년 만에 유일한 합격자였다.
                변성기 때문에 보컬 트레이닝도 받지 않고 연습생 생활 3년을 거쳐 어린 나이에 데뷔했다.
                샤이니 곡들 대부분의 안무 포인트는 태민이 담당하고 있는데, 몸이 유연해 동작이 매우 부드럽고 정확하며,
                몸놀림이 가볍고 화려하면서도 날렵한 힘을 지니고 있기 때문. 멤버들 중 가장 어려운 안무와 긴 동선을 소화하고 있으며,
                군무에서는 센터에 위치하는 경우가 많다. 태민은 그 중에서도 제일 많이, 멀리, 빨리 이동하는 파트를 맡고는 한다.
              </p>
            </div>
            <figure>
              <img src="./img/Shinne_taem.jpg" alt="샤이니 태민" />
            </figure>
          </div>
        </article>
      </section>
      
      <aside className="aside">
        <div className="txt">
          <h2>ONEW</h2>
          <p>클릭하면 내용이 올거임</p>
          <span>close</span>
        </div>
        <figure>
          <img src="./img/Shinne_onew.jpg" alt="샤이니 온유" />
        </figure>
      </aside>
    </section>
  );
}

export default Member;
