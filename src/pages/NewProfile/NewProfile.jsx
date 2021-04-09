import React from 'react';

import TextField from '../../components/TextField';

export default function NewProfile({ onChange, onSubmit, profile }) {
  const {
    name, age, monthlySavings, currentBalance,
  } = profile;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          label="이름를 입력해주세요!"
          placeholder="이름"
          name="name"
          value={name}
          onChange={onChange}
        />

        <TextField
          label="나이를 입력해주세요!"
          type="number"
          placeholder="나이"
          name="age"
          value={age}
          onChange={onChange}
        />

        <TextField
          label="월 저축 금액을 입력해주세요! (단위: 만원)"
          type="number"
          placeholder="저축"
          name="monthlySavings"
          value={monthlySavings}
          onChange={onChange}
        />

        <TextField
          label="현재 은행 잔액를 입력해주세요! (단위: 만원)"
          type="number"
          placeholder="잔액"
          name="currentBalance"
          value={currentBalance}
          onChange={onChange}
        />

        <button type="submit">
          저장
        </button>
      </form>
    </div>
  );
}
