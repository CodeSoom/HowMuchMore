import React from 'react';

import styled from '@emotion/styled';

import { translateNumericToKor, isExist } from '../../utils/utils';

import {
  colors,
  fontWeights,
  borderRadius,
} from '../../designSystem';

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

const NotComplete = styled.div({
  width: '90%',
  margin: '3rem auto 0',
  padding: '.5rem 1rem',
  textAlign: 'center',

  color: colors.white,
  fontWeight: fontWeights.bold,

  backgroundColor: colors.orange,

  borderRadius: borderRadius.box,
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

        {
          isExist(profile) ? (
            <>
              <Button type="submit">
                저장하기 👌
              </Button>
            </>
          ) : (
            <>
              <NotComplete>
                😱 정보가 아직 덜 채워졌어요! 😱
              </NotComplete>
            </>
          )
        }
      </Form>
    </Layout>
  );
}
