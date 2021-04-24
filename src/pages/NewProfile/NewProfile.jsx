import React from 'react';

import styled from '@emotion/styled';

import { translateNumericToKor } from '../../utils/utils';

import { colors } from '../../designSystem';

import { TextField } from '../../commons/Fields';
import { Button } from '../../commons/styles';

const Layout = styled.div({
  display: 'flex',
  justifyContent: 'center',

  color: colors.white,
});

const Form = styled.form({
  '& button': {
    width: '80%',
    display: 'block',
    margin: '3rem auto 0',
    textAlign: 'center',
  },
});

const Label = styled.label({
  display: 'block',
  marginTop: '-1.2rem',

  color: colors.themeColor,
});

export default function NewProfile({ onChange, onSubmit, profile }) {
  const {
    name, age, monthlySavings, currentBalance,
  } = profile;

  return (
    <Layout>
      <Form onSubmit={onSubmit}>
        <TextField
          label="이름"
          placeholder="김철수"
          name="name"
          value={name}
          onChange={onChange}
          focus
        />

        <TextField
          label="나이"
          type="number"
          placeholder="29"
          name="age"
          value={age}
          onChange={onChange}
        />

        <TextField
          label="월 저축 금액 (단위: 만원)"
          type="number"
          placeholder="100"
          name="monthlySavings"
          value={monthlySavings}
          onChange={onChange}
        />
        {monthlySavings > 0 ? (
          <Label id="input-monthlySavings">
            {`${translateNumericToKor(monthlySavings)} 원`}
          </Label>
        ) : (
          <>
            <Label id="input-monthlySavings">
              최소 1 이상 😘
            </Label>
          </>
        )}

        <TextField
          label="은행 잔고 (단위: 만원)"
          type="number"
          placeholder="10,000"
          name="currentBalance"
          value={currentBalance}
          onChange={onChange}
        />
        {currentBalance > 0 ? (
          <Label id="input-currentBlance">
            {`${translateNumericToKor(currentBalance)} 원`}
          </Label>
        ) : (
          <Label id="input-currentBlance">
            최소 1 이상 😘
          </Label>
        )}

        <Button type="submit">
          저장하기
        </Button>
      </Form>
    </Layout>
  );
}
