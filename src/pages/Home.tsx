import { type ReactElement } from 'react';

const cardStyle = {
  background: '#ffffff',
  padding: '20px',
  borderRadius: '16px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  marginBottom: '20px'
};

const Home = (): ReactElement => {
  return (
    <div
      style={{
        background: '#f4f8ff',
        minHeight: '100vh',
        padding: '40px'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <section
          style={{
            textAlign: 'center',
            marginBottom: '50px'
          }}
        >
          <h1
            style={{
              color: '#2563eb',
              fontSize: '48px'
            }}
          >
            바이브 코딩 (Vibe Coding)
          </h1>

          <p
            style={{
              fontSize: '20px'
            }}
          >
            AI와 함께 개발하는 새로운 프로그래밍 방식
          </p>
        </section>

        <div style={cardStyle}>
          <h2>1. 바이브 코딩이란?</h2>

          <p>
            바이브 코딩(Vibe Coding)은 개발자가 자연어로 원하는 기능을 설명하면
            AI가 코드를 생성하고 수정해주는 개발 방식이다.
          </p>

          <p>
            기존에는 개발자가 직접 코드를 작성했지만,
            이제는 ChatGPT, Claude, Cursor 등의 AI를 활용하여
            더 빠르고 효율적으로 개발할 수 있다.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>2. 주요 기능</h2>

          <ul>
            <li>자연어 기반 코드 생성</li>
            <li>코드 자동 수정</li>
            <li>버그 탐지 및 개선</li>
            <li>UI 생성 지원</li>
            <li>코드 리팩토링</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2>3. 기술 스택</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
              gap: '15px'
            }}
          >
            {[
              'ChatGPT',
              'Cursor',
              'Claude',
              'GitHub Copilot',
              'HTML',
              'CSS',
              'JavaScript'
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: '#2563eb',
                  color: 'white',
                  padding: '15px',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={cardStyle}>
          <h2>4. 프로젝트 구조</h2>

          <ul>
            <li>index.html - 웹페이지 시작 파일</li>
            <li>style.css - 디자인 담당</li>
            <li>script.js - 동작 기능 구현</li>
            <li>images 폴더 - 이미지 저장</li>
            <li>assets 폴더 - 리소스 저장</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2>5. 개발 과정</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
              gap: '15px'
            }}
          >
            {[
              '요구사항 작성',
              'AI 기능 요청',
              '코드 생성',
              '테스트',
              '수정 및 개선',
              '배포'
            ].map((step, index) => (
              <div
                key={index}
                style={{
                  background: '#dbeafe',
                  padding: '15px',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}
              >
                <h3>{index + 1}단계</h3>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={cardStyle}>
          <h2>6. 장점과 단점</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}
          >
            <div>
              <h3>장점</h3>
              <ul>
                <li>개발 속도 향상</li>
                <li>초보자도 개발 가능</li>
                <li>반복 작업 감소</li>
              </ul>
            </div>

            <div>
              <h3>단점</h3>
              <ul>
                <li>코드 이해 부족 가능성</li>
                <li>AI 오류 검증 필요</li>
                <li>보안 문제 고려 필요</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
