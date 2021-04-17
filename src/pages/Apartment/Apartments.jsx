import React from 'react';

import styled from '@emotion/styled';

import { LinkField } from '../../commons/Fields';

import Apartment from './Apartment';

const Section = styled.section({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1.5rem',
  padding: '.5rem',
});

const Article = styled.article({
  position: 'relative',
  marginBottom: '1.5rem',

  borderRadius: '.5rem',
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',

  '& button': {
    position: 'absolute',
    top: '.2rem',
    right: '.2rem',

    color: 'rgba(255, 138, 61, 0.95)',
    fontSize: '.69rem',

    backgroundColor: '#FFF',

    '&:hover': {
      color: '#000',
    },
  },
});

export default function Apartments({ apartments, onClick, changeApartment }) {
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
            url="/result"
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
