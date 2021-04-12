import React from 'react';
import { convertToKRW } from '../../utils/utils';

export default function Estimation({ estimation }) {
  const { price, year, age } = estimation;

  return (
    <dl>
      <dd>필요 금액(만원):</dd>
      <dt>
        {convertToKRW(price)}
      </dt>
      <dd>소요 기간(년):</dd>
      <dt>
        {year.toLocaleString()}
      </dt>
      <dd>구매 할 때 나이: </dd>
      <dt>
        {age.toLocaleString()}
      </dt>
    </dl>
  );
}
