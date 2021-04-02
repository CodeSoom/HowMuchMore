import React from 'react';

import LinkField from '../../components/LinkField';

export default function Home({ profile, onClick }) {
  if (!profile.isNew) {
    return (
      <>
        <p>
          {profile.name}
          님 안녕하세요!
        </p>

        <LinkField
          url="/profile"
          title="내 정보 확인하러가기"
          onClick={onClick}
        />

        <LinkField
          url="/apartment"
          title="거주하고 싶은 아파트 둘러보기"
          onClick={onClick}
        />
      </>
    );
  }

  return (
    <div>
      <h2>꿈꾸는 삶을 살기 위해 얼마나 많은 돈을 더 벌어야 될까요?</h2>
      {
        profile?.isNew && (
          <LinkField
            url="/profile/new"
            title="내 정보 입력하러가기"
            onClick={onClick}
          />
        )
      }
    </div>
  );
}
