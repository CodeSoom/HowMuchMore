import React from 'react';

export default function NewProfile({
  handleSubmit,
  onSubmit,
  register,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="user-name">
          이름를 입력해주세요!
        </label>
        <input
          type="text"
          id="user-name"
          placeholder="이름"
          name="name"
          ref={register({ required: true })}
        />

        <label htmlFor="user-age">
          나이를 입력해주세요!
        </label>
        <input
          type="month"
          id="user-age"
          placeholder="나이"
          name="age"
          ref={register({ required: true })}
        />

        <label htmlFor="user-annual-salary">
          연봉을 입력해주세요! (단위: 만원)
        </label>
        <input
          type="number"
          id="user-annual-salary"
          placeholder="연봉"
          name="salary"
          ref={register({ required: true })}
        />

        <label htmlFor="user-asset">
          자산을 입력해주세요! (단위: 만원)
        </label>
        <input
          type="number"
          id="user-asset"
          placeholder="자산"
          name="asset"
          ref={register({ required: true })}
        />

        <button type="submit">
          저장
        </button>
      </form>
    </div>
  );
}
