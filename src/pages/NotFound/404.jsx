import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { colors, fontWeights } from '../../designSystem';

import { Button } from '../../commons/styles';

const Layout = styled.div({
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  letterSpacing: '0.2rem',

  '& h1': {
    color: colors.bluishGray,
    fontWeight: fontWeights.medium,
  },

  '& span': {
    marginBottom: '1rem',

    color: colors.themeColor,
    fontSize: '3rem',
  },

  '& a': {
    borderBottom: `.2rem solid ${colors.themeBorder}`,
  },

  '& button': {
    color: colors.white,
  },

  '& ::before': {
    content: '""',

    display: 'block',
    position: 'absolute',
    inset: '0',

    backgroundImage: 'url("https://images.unsplash.com/photo-1575916167835-a26dc9a826fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    opacity: '0.06',
    borderRadius: '1rem',
    zIndex: '-1',
  },

});

export default function NotFoundPage() {
  return (
    <Layout>
      <span>
        <strong>
          <a
            href="https://youtu.be/M9tsm6S9v1g"
            target="_blank"
            rel="noreferrer"
          >
            와르르
          </a>
        </strong>
      </span>
      <h1>
        404: 찾고 계시는 페이지가 없습니다.
      </h1>
      <span role="img">
        😭
      </span>
      <Link to="/">
        <Button>
          홈페이지로 가기
        </Button>
      </Link>
    </Layout>
  );
}
