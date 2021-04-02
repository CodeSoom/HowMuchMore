import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import MyPageContainer from './MyPageContainer';

export default function MyPage() {
  const history = useHistory();

  const handleClickNewProfile = useCallback(({ url }) => {
    history.push(url);
  }, [history]);

  return (
    <MyPageContainer onClickNewProfile={handleClickNewProfile} />
  );
}
