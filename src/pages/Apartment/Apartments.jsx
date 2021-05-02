import React from 'react';

import styled from '@emotion/styled';

import {
  colors,
  borderRadius,
  shadows,
} from '../../designSystem';

import { Button } from '../../commons/styles';
import { LinkField } from '../../commons/Fields';
import { Loading } from '../../commons/svg';

import Apartment from './Apartment';

const LoadingWrapper = styled.div({
  minHeight: '75vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& svg': {
    width: '40%',
  },
});

const Section = styled.section({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1.5rem',
});

const SwitchWrapper = styled.div({
  display: 'flex',
  justifyContent: 'end',
  marginBottom: '1.2rem',

  '& button': {
    color: colors.themeColor,
    fontSize: '.69rem',

    border: `1.5px solid ${colors.themeColor}`,
    backgroundColor: colors.white,

    '&:hover': {
      color: colors.white,
      backgroundColor: colors.themeColor,
    },
  },
});

const Article = styled.article({
  '& img': {
    width: '100%',

    objectFit: 'cover',
    borderRadius: borderRadius.box,
  },
});

const ApartmentInfo = styled.div({
  position: 'relative',
  marginBottom: '1.5rem',

  borderRadius: borderRadius.box,
  boxShadow: shadows.article,

  '& button': {
    position: 'absolute',
    top: '.2rem',
    right: '.2rem',

    color: colors.themeColor,
    fontSize: '.69rem',

    backgroundColor: colors.white,

    '&:hover': {
      color: colors.black,
    },
  },
});

const Footer = styled.footer({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',

  borderTop: `1px solid ${colors.themeBorder}`,

  color: colors.themeColor,

  '& p': {
    padding: '2rem',
  },
});

export default function Apartments({
  profile,
  apartments,
  isPyeong,
  onClick,
  changeApartment,
  switchSizeUnit,
}) {
  if (!apartments.length) {
    return (
      <LoadingWrapper aria-label="loading">
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <Section>
      <SwitchWrapper>
        <Button
          type="button"
          onClick={switchSizeUnit}
        >
          {isPyeong ? '제곱미터로 전환하기' : '평으로 전환하기' }
        </Button>
      </SwitchWrapper>

      {apartments?.map((apartment) => (
        <Article key={apartment.name}>
          <img
            src={apartment.imgSrc}
            alt={apartment.name}
          />
          <ApartmentInfo>
            <Apartment
              apartment={apartment}
              isPyeong={isPyeong}
            />

            <LinkField
              url={profile?.isNew ? '/profile' : '/result'}
              title="구매 해보기"
              onClick={onClick}
              apartment={apartment}
              changeApartment={changeApartment}
            />
          </ApartmentInfo>
        </Article>
      ))}
      <Footer>
        <p>보여드릴 아파트가 더 이상 없네요. 😭</p>
      </Footer>
    </Section>
  );
}
