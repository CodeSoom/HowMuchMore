import React from 'react';

import styled from '@emotion/styled';

import CATEGORIES from '../../fixtures/apartments';

import { LinkField } from '../../commons/Fields';

import { colors } from '../../designSystem';

const Navigation = styled.nav({
  minHeight: '5vh',
  marginBottom: '1.2rem',

  color: colors.white,
  fontSize: '.8rem',
  whiteSpace: 'nowrap',

  backgroundColor: colors.white,
  borderBottom: `1px solid ${colors.themeBorder}`,
});

const List = styled.ul({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  padding: '0 0 1rem',
});

const Item = styled.li(({ path, category }) => ({
  color: path === category ? colors.white : colors.themeColor,

  '&:not(:last-of-type)': {
    marginRight: '.3rem',
    paddingBottom: '.3rem',
  },

  '& button': {
    border: `.3px solid ${colors.themeColor}`,
    backgroundColor: path === category || colors.white,

    '&: hover': {
      color: colors.white,
      backgroundColor: colors.themeColor,
    },
  },
}));

export default function ApartmentNavigation({ apartmentCategory, onClick }) {
  return (
    <Navigation>
      <List>
        {
          CATEGORIES.map(({ title, url }) => (
            <Item
              key={title}
              path={apartmentCategory}
              category={url}
            >
              <LinkField
                url={`/apartments/${url}`}
                title={title}
                onClick={onClick}
              />
            </Item>
          ))
        }
      </List>
    </Navigation>
  );
}
