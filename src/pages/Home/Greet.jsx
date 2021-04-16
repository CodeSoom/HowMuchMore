import React from 'react';

import { LinkField } from '../../commons/Fields';

export default function Greet({ profile, onClick }) {
  const { isNew, name } = profile;

  if (!isNew) {
    return (
      <>
        <p>{`${name}님의 제테크 현황`}</p>
        <LinkField
          url="/profile"
          title="확인 하러가기"
          onClick={onClick}
        />
      </>
    );
  }
  return (
    <>
      <p>
        XXX님!
        <br />
        제테크는 하고 계신가요?
      </p>
      <LinkField
        url="/profile/new"
        title="알아 보러가기"
        onClick={onClick}
      />
    </>
  );
}
