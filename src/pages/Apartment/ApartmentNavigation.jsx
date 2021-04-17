import React from 'react';

import styled from '@emotion/styled';

import { LinkField } from '../../commons/Fields';

const Navigation = styled.nav({
  minHeight: '5vh',

  color: '#FFF',
  fontSize: '.8rem',
  whiteSpace: 'nowrap',

  backgroundColor: '#FFF',
});

const List = styled.ul({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  padding: '0 0 1rem',
});

const Item = styled.li(
  ({ path, category }) => ({
    color: path === category ? '#FFF' : 'rgba(255, 138, 61, 0.95)',

    '&:not(:last-of-type)': {
      marginRight: '.3rem',
      paddingBottom: '.3rem',
    },

    '& button': {
      border: '.3px solid rgba(255, 138, 61, 0.95)',
      backgroundColor: path === category || '#FFF',

      '&: hover': {
        color: '#FFF',
        backgroundColor: 'rgba(255, 138, 61, 0.95)',
      },
    },
  }),
);

export default function ApartmentNavigation({ apartmentCategory, onClick }) {
  return (
    <Navigation>
      <List>
        <Item
          path={apartmentCategory}
          category="riverside"
        >
          <LinkField
            url="/apartments/riverside"
            title="#한강 뷰"
            onClick={onClick}
          />
        </Item>
        <Item
          path={apartmentCategory}
          category="commercial"
        >
          <LinkField
            url="/apartments/commercial"
            title="#주변 상권 우수"
            onClick={onClick}
          />
        </Item>
        <Item
          path={apartmentCategory}
          category="landscape"
        >
          <LinkField
            url="/apartments/landscape"
            title="#조경 우수"
            onClick={onClick}
          />
        </Item>
        <Item
          path={apartmentCategory}
          category="commute_gangnam"
        >
          <LinkField
            url="/apartments/commute_gangnam"
            title="#강낭 출퇴근 편리"
            onClick={onClick}
          />
        </Item>
        <Item
          path={apartmentCategory}
          category="commute_gwanghwamun"
        >
          <LinkField
            url="/apartments/commute_gwanghwamun"
            title="#광화문 출퇴근 편리"
            onClick={onClick}
          />
        </Item>
        <Item
          path={apartmentCategory}
          category="commute_yeouido"
        >
          <LinkField
            url="/apartments/commute_yeouido"
            title="#여의도 출퇴근 편리"
            onClick={onClick}
          />
        </Item>
      </List>
    </Navigation>
  );
}
