import React from 'react';

import LinkField from '../../components/LinkField';

export default function Greet({ profile, onClick }) {
  const { isNew, name } = profile;

  if (!isNew) {
    return (
      <article>
        <p>
          {name}
          님 안녕하세요!!
        </p>

        <LinkField
          url="/profile"
          title="내 정보 확인하러가기"
          onClick={onClick}
        />
      </article>
    );
  }
  return (
    <article>
      {isNew && (
        <>
          <LinkField
            url="/profile/new"
            title="내 정보 입력하러가기"
            onClick={onClick}
          />
        </>
      )}
    </article>
  );
}
