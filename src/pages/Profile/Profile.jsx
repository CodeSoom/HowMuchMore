import React from 'react';

import LinkField from '../../components/LinkField';

import User from './User';

export default function Profile({ profile, onClickNewProfile }) {
  if (profile.isNew) {
    return (
      <>
        <p>
          아직 정보를 입력하지 않으셨습니다.
        </p>
        <LinkField
          url="/profile/new"
          title="내 정보 입력하러가기"
          onClick={onClickNewProfile}
        />
      </>
    );
  }

  return (
    <div>
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
    </div>
  );
}
