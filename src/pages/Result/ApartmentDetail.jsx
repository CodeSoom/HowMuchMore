import React from 'react';

export default function ApartmentDetail({ apartment }) {
  const {
    name,
    size,
    price,
    date,
    district,
    lotNumber,
  } = apartment;

  return (
    <>
      <dl>
        <dd>아파트명:</dd>
        <dt>
          {name}
        </dt>

        <dd>전용면적:</dd>
        <dt>
          {size}
        </dt>

        <dd>거래금액:</dd>
        <dt>
          {`${price.toLocaleString()} 만원`}
        </dt>

        <dd>매매일자:</dd>
        <dt>
          {date}
        </dt>

        <dd>법정동:</dd>
        <dt>
          {district}
        </dt>

        <dd>지번:</dd>
        <dt>
          {lotNumber}
        </dt>
      </dl>
    </>
  );
}
