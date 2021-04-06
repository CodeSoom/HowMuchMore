import React from 'react';

import LinkField from '../../components/LinkField';

import Greet from './Greet';

export default function Home({ profile, onClick }) {
  return (
    <section>
      <header>꿈꾸는 삶을 살기 위해 얼마나 많은 돈을 더 벌어야 될까요?</header>

      {profile && (
        <Greet
          profile={profile}
          onClick={onClick}
        />
      )}

      <LinkField
        url="/apartments/riverside"
        title="거주하고 싶은 아파트 둘러보기"
        onClick={onClick}
      />
    </section>
  );
}
