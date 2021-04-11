import React from 'react';
import { useParams } from 'react-router-dom';

import useLink from '../../helpers/useLink';

import ApartmentNavigation from './ApartmentNavigation';
import ApartmentContainer from './ApartmentsContainer';

export default function ApartmentPage({ params }) {
  const { id } = params || useParams();

  const { goTo } = useLink();

  return (
    <section>
      <header>거주하고 싶은신 아파트를 선택해주세요</header>
      <ApartmentNavigation onClick={goTo} />
      <ApartmentContainer
        apartmentCategory={id}
        onClick={goTo}
      />
    </section>
  );
}
