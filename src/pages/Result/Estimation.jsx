import React from 'react';

export default function Estimation({ estimation }) {
  const { price, year, age } = estimation;

  return (
    <dl>
      <dd>필요 금액:</dd>
      <dt>
        {`${price.toLocaleString()} 만원`}
      </dt>
      <dd>소요 기간:</dd>
      <dt>
        {`${year.toLocaleString()} 년`}
      </dt>
      <dd>구매 할 때 나이: </dd>
      <dt>
        {`${age.toLocaleString()} 살`}
      </dt>
    </dl>
  );
}
