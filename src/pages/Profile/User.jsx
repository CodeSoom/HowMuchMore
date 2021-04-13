import React from 'react';

export default function User({ profile }) {
  const {
    name, age, monthlySavings, currentBalance,
  } = profile;

  return (
    <dl>
      <dd>이름:</dd>
      <dt>{name}</dt>
      <dd>나이:</dd>
      <dt>{`${age} 살`}</dt>
      <dd>월 저축 금액:</dd>
      <dt>
        {`${monthlySavings.toLocaleString()} 만원`}
      </dt>
      <dd>현재 은행 잔액:</dd>
      <dt>
        {`${currentBalance.toLocaleString()} 만원`}
      </dt>
    </dl>
  );
}
