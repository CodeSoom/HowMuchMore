import React from 'react';

export default function NewProfilePage() {
  return (
    <form>
      <label htmlFor="user_age">
        나이를 입력해주세요!
      </label>
      <input
        type="date"
        id="user_age"
        placeholder="나이"
      />
      <label htmlFor="user_annual_salary">
        연봉을 입력해주세요! (단위: 만원)
      </label>
      <input
        type="number"
        id="user_annual_salary"
        placeholder="연봉"
      />
      <label htmlFor="user_asset">
        자산을 입력해주세요! (단위: 만원)
      </label>
      <input
        type="number"
        id="user_asset"
        placeholder="자산"
      />
      <button type="submit">
        저장
      </button>
    </form>
  );
}
