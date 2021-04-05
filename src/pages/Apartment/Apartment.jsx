import React from 'react';

export default function Apartment({ apartments }) {
  if (!apartments.length) {
    return (
      <p>loading</p>
    );
  }

  return (
    <>
      {apartments?.map((apartment) => (
        <div key={apartment.name}>
          <dl>
            <dd>아파트명:</dd>
            <dt>{apartment.name}</dt>
            <dd>법정동:</dd>
            <dt>{apartment.district}</dt>
            <dd>전용면적:</dd>
            <dt>{apartment.area}</dt>
          </dl>
        </div>
      ))}
    </>
  );
}
