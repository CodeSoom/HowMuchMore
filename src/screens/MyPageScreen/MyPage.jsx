import React from 'react';

export default function MyPage({ profile, onClickNewProfile }) {
  return (
    <div>
      {
        profile && profile.isNew ? (
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
        ) : (
          <>
            <p>
              <span>
                이름:
              </span>
              {profile.name}
            </p>
            <p>
              <span>
                나이:
              </span>
              {profile.age}
            </p>
            <p>
              <span>
                연봉:
              </span>
              {profile.salary}
            </p>
            <p>
              <span>
                자산:
              </span>
              {profile.asset}
            </p>
          </>
        )
      }
    </div>
  );
}
