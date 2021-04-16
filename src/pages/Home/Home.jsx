import React from 'react';

import styled from '@emotion/styled';

import { LinkField } from '../../commons/Fields';

import Greet from './Greet';

const HomeLayout = styled.section({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '& article:first-of-type': {
    position: 'relative',

    '& ::before': {
      content: '""',

      display: 'block',
      position: 'absolute',
      inset: '0',

      backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

      opacity: '0.27',
      borderRadius: '1rem',
      zIndex: '-1',
    },
  },

  '& article:last-of-type': {
    position: 'relative',
    marginTop: '4.5rem',

    '& ::before': {
      content: '""',

      display: 'block',
      position: 'absolute',
      inset: '0',

      backgroundImage: 'url("http://webzine.seoulmetro.co.kr/images/0969565312_041/%EC%9E%A0%EC%8B%A4%EC%B2%A0%EA%B5%903.JPG")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

      opacity: '0.27',
      borderRadius: '1rem',
      zIndex: '-1',
    },
  },
});

const Heading = styled.h2({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '2.5rem',

  color: '#333d4b',
  fontSize: '1.5rem',
  fontWeight: '600',
  lineHeight: '1.66',
});

const Article = styled.article({
  maxWidth: '639px',
  minHeight: '200px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',

  color: '#FFF',

  borderRadius: '1rem',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',

  '& p': {
    marginTop: '-2rem',

    color: '#333d4b',
    fontsize: '3rem',
    fontWeight: '800',
    lineHeight: '2',
  },

  '& div': {
    marginBottom: '-0.7rem',
  },
});

export default function Home({ profile, onClick }) {
  return (
    <HomeLayout>
      <Heading>
        돈을 얼마나 더 벌어야,
        <br />
        꿈 꾸시는 삶을 살 수 있는지,
        <br />
        알려드립니다.
      </Heading>

      <Article>
        {profile && (
          <Greet
            profile={profile}
            onClick={onClick}
          />
        )}
      </Article>

      <Article>
        <p>
          한강 뷰 아파트에 살아볼려면?
        </p>
        <LinkField
          url="/apartments/riverside"
          title="알아 보러가기"
          onClick={onClick}
        />
      </Article>

    </HomeLayout>
  );
}
