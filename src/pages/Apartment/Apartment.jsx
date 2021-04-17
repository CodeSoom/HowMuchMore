import React from 'react';

import styled from '@emotion/styled';

import {
  District,
  BuiltYear,
  Size,
} from '../../commons/svg';

const Header = styled.header({
  padding: '.5rem',

  color: '#FFF',

  backgroundColor: 'rgba(255, 138, 61, 0.95)',
  boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
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

export default function Apartment({ apartment }) {
  const {
    name,
    district,
    builtYear,
    size,
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
            {size}
            <var>
              m
              <sup>
                2
              </sup>
            </var>
          </dt>
        </Item>
      </List>
    </>
  );
}
