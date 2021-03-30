import React from 'react';

export default function MyPage({ profile, onClickNewProfile }) {
  if (profile.isNew) {
    return (
      <>
        <p>
          아직 정보를 입력하지 않으셨습니다.
        </p>
        <a
          href="/profile/new"
          onClick={() => onClickNewProfile()}
        >
          내 정보 입력하러가기
        </a>
      </>
    );
  }

  return (
    <div>
      {
        !profile.isNew && (
          <>
            <dl>
              <dd>이름:</dd>
              <dt>{profile.name}</dt>
              <dd>나이:</dd>
              <dt>{profile.age}</dt>
              <dd>연봉:</dd>
              <dt>{profile.salary}</dt>
              <dd>자산:</dd>
              <dt>{profile.asset}</dt>
            </dl>
          </>
        )
      }
    </div>
  );
}
