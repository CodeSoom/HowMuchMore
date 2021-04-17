import React from 'react';

import styled from '@emotion/styled';

import { LinkField } from '../../commons/Fields';

const Navigation = styled.nav({
  minHeight: '5vh',
  position: 'sticky',
  top: '5vh',

  color: 'white',
  fontSize: '.8rem',
  whiteSpace: 'nowrap',

  zIndex: '1',
  overflow: 'hidden',
  opacity: '0.88',
});

const List = styled.ul({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  flexWrap: 'no-wrap',
  padding: '0 0 1rem',

  overflowX: 'scroll',
  scrollbarWidth: 'thin',
});

const Item = styled.li(
  {
    '&:not(:last-of-type)': {
      marginRight: '.3rem',
    },
  },
  ({ path, category }) => ({
    color: path === category ? 'white' : 'rgba(255, 138, 61, 0.95)',

    '& button': {
      backgroundColor: path === category || 'white',
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
