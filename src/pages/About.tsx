import { type ReactElement } from 'react';

const About = (): ReactElement => {
  return (
    <div className="about-page">

      <section className="page-header">
        <div className="container">
          <h1>바이브 코딩(Vibe Coding)</h1>
          <p>AI와 함께하는 새로운 소프트웨어 개발 방식</p>
        </div>
      </section>

      <div className="container">

        <section className="about-section">
          <h2>1. 바이브 코딩이란?</h2>

          <p>
            바이브 코딩(Vibe Coding)은 인공지능(AI)에게 자연어로 원하는 기능을 설명하고,
            AI가 생성한 코드를 활용하여 프로그램을 개발하는 새로운 개발 방식이다.
          </p>

          <p>
            기존 개발 방식에서는 개발자가 직접 코드를 작성해야 했지만,
            바이브 코딩은 ChatGPT, Claude, Cursor 등의 AI 도구를 활용하여
            더 빠르고 효율적으로 개발할 수 있다.
          </p>
        </section>

        <section className="about-section">
          <h2>2. 주요 기능</h2>

          <div className="about-grid">

            <div className="about-card">
              <h3>자연어 기반 코드 생성</h3>
              <p>원하는 기능을 설명하면 AI가 자동으로 코드를 생성한다.</p>
            </div>

            <div className="about-card">
              <h3>코드 자동 수정</h3>
              <p>기존 코드를 분석하여 새로운 기능을 추가하거나 수정한다.</p>
            </div>

            <div className="about-card">
              <h3>버그 탐지 및 개선</h3>
              <p>오류를 발견하고 해결 방법을 제안한다.</p>
            </div>

            <div className="about-card">
              <h3>UI 생성 지원</h3>
              <p>웹페이지 레이아웃과 디자인을 자동 생성할 수 있다.</p>
            </div>

            <div className="about-card">
              <h3>코드 리팩토링</h3>
              <p>코드를 더 효율적이고 유지보수하기 쉽게 개선한다.</p>
            </div>

          </div>
        </section>

        <section className="about-section">
          <h2>3. 기술 스택</h2>

          <div className="about-grid">
            <div className="about-card">ChatGPT</div>
            <div className="about-card">Cursor</div>
            <div className="about-card">Claude</div>
            <div className="about-card">GitHub Copilot</div>
            <div className="about-card">HTML</div>
            <div className="about-card">CSS</div>
            <div className="about-card">JavaScript</div>
          </div>
        </section>

        <section className="about-section">
          <h2>4. 프로젝트 구조</h2>

          <div className="about-card">
            <ul>
              <li>index.html : 웹페이지 진입점</li>
              <li>main.tsx : React 애플리케이션 실행</li>
              <li>App.tsx : 전체 애플리케이션 구성</li>
              <li>pages : 화면 페이지 관리</li>
              <li>components : 재사용 가능한 UI 컴포넌트 관리</li>
              <li>assets : 이미지 및 리소스 관리</li>
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
              <p>테스트</p>
            </div>

            <div className="about-card">
              <h3>5단계</h3>
              <p>수정 및 개선</p>
            </div>

            <div className="about-card">
              <h3>6단계</h3>
              <p>배포</p>
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
                <li>AI 결과 검증 필요</li>
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
