import React from 'react';

import LinkField from '../../components/LinkField';

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
            <dl>
              <dd>이름:</dd>
              <dt>{profile.name}</dt>
              <dd>나이:</dd>
              <dt>{profile.age}</dt>
              <dd>월 저축 금액(만원):</dd>
              <dt>{profile.monthlySavings}</dt>
              <dd>현재 은행 잔액(만원):</dd>
              <dt>{profile.currentBalance}</dt>
            </dl>
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
