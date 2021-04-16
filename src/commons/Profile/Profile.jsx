import React from 'react';

import { LinkField } from '../Fields';

import User from './User';

export default function Profile({ profile, onClickNewProfile }) {
  if (profile.isNew) {
    return (
      <article>
        <p>
          아직 정보를 입력하지 않으셨습니다.
        </p>
        <LinkField
          url="/profile/new"
          title="내 정보 입력하러가기"
          onClick={onClickNewProfile}
        />
      </article>
    );
  }

  return (
    <article>
      {
        !profile.isNew && (
          <>
            <User profile={profile} />
            <LinkField
              url="/profile/new"
              title="수정"
              onClick={onClickNewProfile}
            />
          </>
        )
      }
    </article>
  );
}
