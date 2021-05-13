import React from 'react';

import styled from '@emotion/styled';

import CATEGORIES from '../../fixtures/apartments';

import {
  colors,
  fontWeights,
  borderRadius,
} from '../../designSystem';

import { LinkField } from '../../commons/Fields';
import { Footer } from '../../commons/Footer';

const HomeLayout = styled.section({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gridAutoRows: '1fr',
  gap: '3rem 1rem',
  marginBottom: '2rem',
});

const Heading = styled.h2({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '1rem',

  color: colors.bluishGray,
  fontSize: '1.5rem',
  fontWeight: fontWeights.bold,
  lineHeight: '1.66',

  borderBottom: `1px solid ${colors.bluishGray}`,
});

const Header = styled.header({
  padding: '1rem 0',

  color: colors.bluishGray,
  fontSize: '1.2rem',
  fontWeight: fontWeights.bold,
});

const Article = styled.article({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  color: colors.white,

  '& button': {
    marginBottom: '.5rem',

    '&:hover': {
      color: colors.themeColor,
      backgroundColor: colors.white,
    },
  },

  '& img': {
    width: '100%',
    height: '200px',
    objectFit: 'cover',

    borderRadius: borderRadius.box,
  },
});

export default function Home({ onClick }) {
  return (
    <>

      <Heading>
        돈을 얼마나 더 벌어야,
        <br />
        꿈 꾸시는 삶을 살 수 있는지,
        <br />
        알려드립니다.
      </Heading>

      <Header>
        XXX 아파트에 살아볼려면?
      </Header>

      <HomeLayout>
        {
          CATEGORIES.map(({ title, url, imgSrc }) => (
            <Article key={title}>
              <LinkField
                url={`/apartments/${url}`}
                title={title}
                onClick={onClick}
              />
              <img
                src={imgSrc}
                alt={title}
              />
            </Article>
          ))
        }
      </HomeLayout>

      <Footer />
    </>
  );
}
