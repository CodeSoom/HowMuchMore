import React from 'react';

import styled from '@emotion/styled';

import {
  colors,
  fontWeights,
  borderRadius,
} from '../../designSystem';

import { LinkField } from '../../commons/Fields';
import { Footer } from '../../commons/Footer';

const HomeLayout = styled.section({
  display: 'flex',
  flexDirection: 'column',
});

const Heading = styled.h2({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '2rem',

  color: colors.bluishGray,
  fontSize: '1.5rem',
  fontWeight: fontWeights.bold,
  lineHeight: '1.66',
});

const Article = styled.article({
  maxWidth: '639px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  color: colors.white,

  '& p': {
    padding: '2rem',

    color: colors.bluishGray,
    fontSize: '1.2rem',
    fontWeight: fontWeights.bold,
  },

  '& div': {
    padding: '2rem',
  },

  '& img': {
    width: '100%',
    objectFit: 'cover',

    borderRadius: borderRadius.box,
  },
});

export default function Home({ onClick }) {
  return (
    <>
      <HomeLayout>
        <Heading>
          돈을 얼마나 더 벌어야,
          <br />
          꿈 꾸시는 삶을 살 수 있는지,
          <br />
          알려드립니다.
        </Heading>

        <Article>
          <p>
            한강 뷰 아파트에 살아볼려면?
          </p>
          <img
            src="http://webzine.seoulmetro.co.kr/images/0969565312_041/%EC%9E%A0%EC%8B%A4%EC%B2%A0%EA%B5%903.JPG"
            alt="hanriver"
          />
          <LinkField
            url="/apartments/riverside"
            title="알아 보러가기"
            onClick={onClick}
          />
        </Article>
      </HomeLayout>

      <Footer />
    </>
  );
}
