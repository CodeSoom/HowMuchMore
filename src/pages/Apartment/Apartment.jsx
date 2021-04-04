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
        <div key={apartment.아파트}>
          <dl>
            <dd>아파트명:</dd>
            <dt>{apartment.아파트}</dt>
            <dd>법정동:</dd>
            <dt>{apartment.법정동}</dt>
            <dd>전용면적:</dd>
            <dt>{apartment.전용면적}</dt>
          </dl>
        </div>
      ))}
    </>
  );
}
