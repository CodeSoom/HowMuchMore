import React from 'react';

import styled from '@emotion/styled';

import { translateNumericToKor } from '../../utils/utils';

import {
  Currency,
  Calendar,
  Age,
} from '../../commons/svg';

import { Header } from '../../commons/styles';

const List = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const Item = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '.5rem 0',

  '& span': {
    display: 'flex',
    alignItems: 'center',
    padding: '.4rem',
  },

  '& svg': {
    marginRight: '.4rem',
  },
});

export default function Estimation({ profile, estimation }) {
  const { monthlySavings } = profile;
  const { price, year, age } = estimation;

  return (
    <List>
      <Item>
        <Header>
          필요하신 금액은...
        </Header>
        <span>
          <Currency />
          {`${translateNumericToKor(price)} 원`}
        </span>
      </Item>

      <Item>
        <Header>
          {`월 ${monthlySavings} 만원 저축으로는...`}
        </Header>
        <span>
          <Calendar />
          {`${year.toLocaleString()} 년 걸립니다.`}
        </span>
      </Item>

      <Item>
        <Header>구매 하실 때 나이는...</Header>
        <span>
          <Age />
          {`${age.toLocaleString()} 세`}
        </span>
      </Item>
    </List>
  );
}
