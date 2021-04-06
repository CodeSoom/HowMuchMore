import React from 'react';

import LinkField from '../../components/LinkField';

import Profile from '../Profile/Profile';

import ApartmentDetail from './ApartmentDetail';
import Estimation from './Estimation';

export default function Result({
  profile, apartment, estimation, onClick, goBack,
}) {
  if (profile.isNew) {
    return (
      <>
        <p>
          정보를 아직 입력하지 않으셨습니다.
        </p>
        <LinkField
          url="/profile/new"
          title="내 정보 입력 하러가기"
          onClick={onClick}
        />
      </>
    );
  }

  return (
    <>
      <LinkField
        url="/apartments"
        title="뒤로가기"
        onClick={goBack}
      />

      {apartment
        && (
          <ApartmentDetail apartment={apartment} />
        )}

      <Profile
        profile={profile}
        onClickNewProfile={onClick}
      />

      {estimation && (
        <Estimation estimation={estimation} />
      )}

    </>
  );
}
