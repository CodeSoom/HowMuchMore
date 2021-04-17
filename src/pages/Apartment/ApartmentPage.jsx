import React from 'react';
import { useParams } from 'react-router-dom';

import useLink from '../../helpers/useLink';

import ApartmentNavigation from './ApartmentNavigation';
import ApartmentContainer from './ApartmentsContainer';

export default function ApartmentPage({ params }) {
  const { id } = params || useParams();

  const { goTo } = useLink();

  return (
    <section style={{ position: 'relative' }}>
      <ApartmentNavigation
        apartmentCategory={id}
        onClick={goTo}
      />
      <ApartmentContainer
        apartmentCategory={id}
        onClick={goTo}
      />
    </section>
  );
}
