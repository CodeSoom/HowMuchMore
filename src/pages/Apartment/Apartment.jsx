import React from 'react';

import styled from '@emotion/styled';

import { colors } from '../../designSystem';

import {
  District,
  BuiltYear,
  Size,
} from '../../commons/svg';

const Header = styled.header({
  padding: '.5rem',

  color: colors.white,

  backgroundColor: colors.orange,
});

const List = styled.dl({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

const Item = styled.div({
  display: 'inline-flex',
  padding: '.5rem',

  '& dd': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '.4rem',
  },

  '& svg': {
    marginRight: '.4rem',
  },
});

export default function Apartment({ apartment, isPyeong }) {
  const {
    name,
    district,
    builtYear,
    size,
    pyeong,
  } = apartment;

  return (
    <>
      <Header>
        {name}
      </Header>
      <List>
        <Item>
          <dd>
            <District />
            법정동:
          </dd>
          <dt>
            {district}
          </dt>
        </Item>

        <Item>
          <dd>
            <BuiltYear />
            건축년도:
          </dd>
          <dt>
            {`${builtYear} 년`}
          </dt>
        </Item>

        <Item>
          <dd>
            <Size />
            전용면적:
          </dd>
          <dt>
            {isPyeong ? (
              <>
                {pyeong}
                {' '}
                평
              </>
            ) : (
              <>
                {size}
                <var>
                  m
                  <sup>
                    2
                  </sup>
                </var>
              </>
            )}

          </dt>
        </Item>
      </List>
    </>
  );
}
