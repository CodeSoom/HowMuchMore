import React from 'react';

export default function Home({ profile, onClick }) {
  return (
    <div>
      <h2>꿈꾸는 삶을 살기 위해 얼마나 많은 돈을 더 벌어야 될까요?</h2>
      {
        profile && profile.isNew ? (
          <a
            href="/profile/new"
            onClick={() => onClick({ url: '/profile/new' })}
          >
            내 정보 입력하러가기
          </a>
        )
          : (
            <>
              <p>
                {profile.name}
                님 안녕하세요!
              </p>

              <a
                href="/profile"
                onClick={() => onClick({ url: '/profile"' })}
              >
                내 정보 확인하러가기
              </a>
            </>
          )
      }
    </div>
  );
}
