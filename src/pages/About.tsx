import { type ReactElement } from 'react';

const About = (): ReactElement => {
  return (
    <div className="about-page">

      <section className="page-header">
        <div className="container">
          <h1>바이브 코딩(Vibe Coding)</h1>
          <p>AI와 협력하여 개발하는 새로운 프로그래밍 방식</p>
        </div>
      </section>

      <div className="container">

        <section className="about-section">
          <h2>1. 바이브 코딩이란?</h2>

          <p>
            바이브 코딩(Vibe Coding)은 개발자가 자연어로 원하는 기능을 설명하면
            AI가 코드를 생성하고 수정하여 개발을 돕는 새로운 개발 방식이다.
          </p>

          <p>
            기존 개발 방식에서는 개발자가 직접 코드를 작성해야 했지만,
            바이브 코딩은 ChatGPT, Claude, Cursor 같은 AI 도구와 협업하여
            더 빠르고 효율적으로 프로그램을 개발할 수 있다.
          </p>

          <h3>기존 개발 방식과의 차이점</h3>

          <ul>
            <li>기존 방식 : 개발자가 직접 코드 작성</li>
            <li>바이브 코딩 : AI가 코드 생성 및 수정 지원</li>
            <li>개발 속도 향상</li>
            <li>비전공자도 개발 가능</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>2. 주요 기능</h2>

          <div className="about-grid">

            <div className="about-card">
              <h3>자연어 기반 코드 생성</h3>
              <p>
                원하는 기능을 설명하면 AI가 자동으로 코드를 생성한다.
              </p>
            </div>

            <div className="about-card">
              <h3>코드 자동 수정</h3>
              <p>
                기존 코드를 분석하여 기능을 추가하거나 수정한다.
              </p>
            </div>

            <div className="about-card">
              <h3>버그 탐지 및 개선</h3>
              <p>
                오류를 찾고 해결 방법을 제안한다.
              </p>
            </div>

            <div className="about-card">
              <h3>UI 생성 지원</h3>
              <p>
                웹페이지 디자인과 레이아웃을 자동 생성한다.
              </p>
            </div>

            <div className="about-card">
              <h3>코드 리팩토링</h3>
              <p>
                코드를 더 효율적이고 유지보수하기 쉽게 개선한다.
              </p>
            </div>

          </div>
        </section>

        <section className="about-section">
          <h2>3. 기술 스택</h2>

          <div className="about-grid">

            <div className="about-card">
              <h3>ChatGPT</h3>
              <p>자연어 기반 코드 생성</p>
            </div>

            <div className="about-card">
              <h3>Cursor</h3>
              <p>AI 통합 코드 편집기</p>
            </div>

            <div className="about-card">
              <h3>Claude</h3>
              <p>대규모 코드 분석 및 생성</p>
            </div>

            <div className="about-card">
              <h3>GitHub Copilot</h3>
              <p>실시간 코드 추천</p>
            </div>

            <div className="about-card">
              <h3>HTML</h3>
              <p>웹페이지 구조 작성</p>
            </div>

            <div className="about-card">
              <h3>CSS</h3>
              <p>디자인 및 스타일 구성</p>
            </div>

            <div className="about-card">
              <h3>JavaScript</h3>
              <p>동적 기능 구현</p>
            </div>

          </div>
        </section>

        <section className="about-section">
          <h2>4. 프로젝트 구조</h2>

          <div className="about-card">
            <ul>
              <li><strong>index.html</strong> : 웹페이지 진입점</li>
              <li><strong>style.css</strong> : 디자인 및 레이아웃</li>
              <li><strong>script.js</strong> : 동작 기능 구현</li>
              <li><strong>images 폴더</strong> : 이미지 저장</li>
              <li><strong>assets 폴더</strong> : 기타 리소스 저장</li>
            </ul>
          </div>
        </section>

        <section className="about-section">
          <h2>5. 개발 과정</h2>

          <div className="about-grid">

            <div className="about-card">
              <h3>1단계</h3>
              <p>요구사항 작성</p>
            </div>

            <div className="about-card">
              <h3>2단계</h3>
              <p>AI에게 기능 요청</p>
            </div>

            <div className="about-card">
              <h3>3단계</h3>
              <p>코드 생성</p>
            </div>

            <div className="about-card">
              <h3>4단계</h3>
              <p>테스트 진행</p>
            </div>

            <div className="about-card">
              <h3>5단계</h3>
              <p>수정 및 개선</p>
            </div>

            <div className="about-card">
              <h3>6단계</h3>
              <p>배포 완료</p>
            </div>

          </div>
        </section>

        <section className="about-section">
          <h2>6. 장점과 단점</h2>

          <div className="about-grid">

            <div className="about-card">
              <h3>장점</h3>
              <ul>
                <li>개발 속도 향상</li>
                <li>초보자도 쉽게 개발 가능</li>
                <li>반복 작업 감소</li>
              </ul>
            </div>

            <div className="about-card">
              <h3>단점</h3>
              <ul>
                <li>코드 이해 부족 가능성</li>
                <li>AI 오류 검증 필요</li>
                <li>보안 문제 고려 필요</li>
              </ul>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};



export default About;
