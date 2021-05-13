import React from 'react';

import styled from '@emotion/styled';

import { colors } from '../../designSystem';

const FooterWrapper = styled.footer({
  position: 'absolute',
  width: '100%',
  left: '0',
  bottom: '0',

  borderTop: `1px solid ${colors.themeBorder}`,

  opacity: '0.8',

  '& p': {
    padding: '0.5rem 0',
    textAlign: 'center',

    color: colors.themeColor,
    fontSize: '0.8rem',
  },
});

export default function Footer() {
  return (
    <FooterWrapper>
      <p>ⓒ 2021 HMM. All Rights Reserved.</p>
    </FooterWrapper>
  );
}
