import React from 'react';

import LinkField from '../../components/LinkField';

import Apartment from './Apartment';

export default function Apartments({ apartments, onClick, changeApartment }) {
  if (!apartments.length) {
    return (
      <p>loading</p>
    );
  }

  return (
    <>
      {apartments?.map((apartment) => (
        <article key={apartment.name}>
          <Apartment apartment={apartment} />
          <LinkField
            url="/result"
            title="보기"
            onClick={onClick}
            apartment={apartment}
            changeApartment={changeApartment}
          />
        </article>
      ))}
    </>
  );
}
