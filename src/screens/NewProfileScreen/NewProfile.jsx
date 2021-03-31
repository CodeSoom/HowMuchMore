import React from 'react';

import TextField from '../../components/TextField';

export default function NewProfile({ onChange, onSubmit, profile }) {
  const {
    name, age, salary, asset,
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
          label="연봉을 입력해주세요! (단위: 만원)"
          type="number"
          placeholder="연봉"
          name="salary"
          value={salary}
          onChange={onChange}
        />

        <TextField
          label="자산을 입력해주세요! (단위: 만원)"
          type="number"
          placeholder="자산"
          name="asset"
          value={asset}
          onChange={onChange}
        />

        <button type="submit">
          저장
        </button>
      </form>
    </div>
  );
}
