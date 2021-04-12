import React from 'react';
import { convertToKRW } from '../../utils/utils';

export default function User({ profile }) {
  const {
    name, age, monthlySavings, currentBalance,
  } = profile;

  return (
    <dl>
      <dd>이름:</dd>
      <dt>{name}</dt>
      <dd>나이:</dd>
      <dt>{age}</dt>
      <dd>월 저축 금액(만원):</dd>
      <dt>
        {convertToKRW(monthlySavings)}
      </dt>
      <dd>현재 은행 잔액(만원):</dd>
      <dt>
        {convertToKRW(currentBalance)}
      </dt>
    </dl>
  );
}
