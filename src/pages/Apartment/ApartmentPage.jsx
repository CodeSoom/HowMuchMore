import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import ApartmentNavigation from './ApartmentNavigation';
import ApartmentContainer from './ApartmentsContainer';

export default function ApartmentPage({ params }) {
  const history = useHistory();

  const { id } = params || useParams();

  const handleClick = useCallback(({ url }) => {
    history.push(url);
  }, [history]);

  return (
    <section>
      <header>거주하고 싶은신 아파트를 선택해주세요</header>
      <ApartmentNavigation onClick={handleClick} />
      <ApartmentContainer
        apartmentCategory={id}
        onClick={handleClick}
      />
    </section>
  );
}
