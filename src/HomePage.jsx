import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h2>꿈꾸는 삶을 살기 위해 얼마나 많은 돈을 더 벌어야 될까요?</h2>
      <Link to="/profile/new">
        내 정보 입력하러가기
      </Link>
    </div>
  );
}
