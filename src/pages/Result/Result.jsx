import React from 'react';

import styled from '@emotion/styled';

import { colors, fontWeights } from '../../designSystem';

import { LinkField } from '../../commons/Fields';
import { Share, SocialMediaButtons } from '../../commons/Share';

import ApartmentDetail from './ApartmentDetail';
import Estimation from './Estimation';

const Guest = styled.article({
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '& p': {
    fontWeight: fontWeights.bold,
    marginBottom: '3rem',
  },
});

const Section = styled.section({
  '& button': {
    marginBottom: '1rem',
    textAlign: 'center',

    color: colors.orange,
    fontSize: '.75rem',

    border: `1px solid ${colors.orange}`,
    backgroundColor: colors.white,

    '&:hover': {
      color: colors.white,
      backgroundColor: colors.orange,
    },
  },

  '& article': {
    marginBottom: '1rem',
  },
});

const Heading = styled.h2({
  marginBottom: '1rem',
  padding: '.25rem 0',

  color: colors.orange,
  fontSize: '1.22rem',
  fontWeight: fontWeights.bold,
});

const ShareTargets = styled.article({
  display: 'flex',
  alignItems: 'center',

  '& button': {
    marginRight: '1.5rem',
  },
});

const Back = styled.div({
  position: 'absolute',
  top: '0',
  right: '1.5rem',

  fontSize: '.69rem',
});

export default function Result({
  profile,
  apartment,
  estimation,
  onClick,
  goBack,
}) {
  if (profile.isNew) {
    return (
      <Guest>
        <p>
          제테크 정보가 아직 없어요!
        </p>
        <LinkField
          url="/profile/new"
          title="확인 하러가기"
          onClick={onClick}
        />
      </Guest>
    );
  }

  return (
    <Section>
      <Back>
        <LinkField
          url="/apartments"
          title="뒤로가기"
          onClick={goBack}
        />
      </Back>

      <article>
        {apartment
        && (
          <ApartmentDetail apartment={apartment} />
        )}
      </article>

      <article>
        <Heading>
          구매까지...
        </Heading>

        {estimation && (
          <Estimation
            profile={profile}
            apartment={apartment}
            estimation={estimation}
          />
        )}
      </article>

      <ShareTargets>
        <LinkField
          url="/profile/new"
          title="저축 수정 하러가기"
          onClick={onClick}
        />
        <Share />
        <SocialMediaButtons />
      </ShareTargets>
    </Section>
  );
}
