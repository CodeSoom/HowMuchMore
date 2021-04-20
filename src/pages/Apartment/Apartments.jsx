import React from 'react';

import styled from '@emotion/styled';

import {
  colors,
  borderRadius,
  shadows,
} from '../../designSystem';

import { LinkField } from '../../commons/Fields';

import Apartment from './Apartment';

const Section = styled.section({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1.5rem',
});

const Article = styled.article({
  position: 'relative',
  marginBottom: '1.5rem',

  borderRadius: borderRadius.box,
  boxShadow: shadows.article,

  '& button': {
    position: 'absolute',
    top: '.2rem',
    right: '.2rem',

    color: colors.orange,
    fontSize: '.69rem',

    backgroundColor: colors.white,

    '&:hover': {
      color: colors.black,
    },
  },
});

export default function Apartments({
  profile,
  apartments,
  onClick,
  changeApartment,
}) {
  if (!apartments.length) {
    return (
      <p>loading</p>
    );
  }

  return (
    <Section>
      {apartments?.map((apartment) => (
        <Article key={apartment.name}>
          <Apartment apartment={apartment} />
          <LinkField
            url={profile?.isNew ? '/profile' : '/result'}
            title="구매 해보기"
            onClick={onClick}
            apartment={apartment}
            changeApartment={changeApartment}
          />
        </Article>
      ))}
    </Section>
  );
}
