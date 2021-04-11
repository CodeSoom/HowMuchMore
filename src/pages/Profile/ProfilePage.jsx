import React from 'react';

import useLink from '../../helpers/useLink';

import ProfileContainer from './ProfileContainer';

export default function ProfilePage() {
  const { goTo } = useLink();

  return (
    <section>
      <ProfileContainer onClickNewProfile={goTo} />
    </section>
  );
}
