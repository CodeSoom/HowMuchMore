import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import ProfileContainer from './ProfileContainer';

export default function ProfilePage() {
  const history = useHistory();

  const handleClickNewProfile = useCallback(({ url }) => {
    history.push(url);
  }, [history]);

  return (
    <section>
      <ProfileContainer onClickNewProfile={handleClickNewProfile} />
    </section>
  );
}
