import React from 'react';
import './App.css'

import { Route, Routes } from 'react-router-dom';

import UseState from './react-study/A_useState';
import Container from './layouts/Container';

function App() {
  return (
    <>
      {/* 빈 Fragment: 최상위 단일 노드를 위한 틀 */}
      <Routes>
        <Route element={<Container />}>
          {/* 
          Route 컴포넌트의 index 속성
          : 상위 컴포넌트의 경로로 출력 (기본 자식 라우트)
          */}
          <Route path={MAIN_PATH} element={<UseState />} />

          {/* 로그인 + 회원가입 화면 */}
          <Route path="/auth" element={<UseState />} />
          
          {/* 게시글 상세 보기 화면 */}
          <Route path="/board/detail/:boardNumber" element={<UseState />} />

          {/* 게시글 작성 화면 */}
          <Route path="/board/write" element={<UseState />} />

          {/* 게시글 수정 화면 */}
          <Route path="/board/update" element={<UseState />} />

          {/* 마이페이지 */}
          <Route path="/user" element={<UseState />} />

          {/* 리액트 학습 */}
          <Route path="/user" element={<UseState />} />
        </Route>
      </Routes>
      <UseState />
    </>
  );
}

export default App;
