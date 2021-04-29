import * as React from 'react';

import styled from '@emotion/styled';

import { colors, fontWeights } from '../../designSystem';

const LoadingWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& p': {
    marginTop: '.5rem',

    color: colors.themeColor,
    fontSize: '1.2rem',
    fontWeight: fontWeights.bold,
    letterSpacing: '0.2rem',
  },
});

function Loading() {
  return (
    <LoadingWrapper>
      <svg
        id="eoda40guyruh1"
        viewBox="0 0 50 50"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <style>
          {
            '@keyframes eoda40guyruh2_ts__ts{0%{transform:translate(25.016343px,24.671509px) scale(.316961,.362003)}15%{transform:translate(25.016343px,24.671509px) scale(.21179,.230573)}30%{transform:translate(25.016343px,24.671509px) scale(.326867,.36499)}45%{transform:translate(25.016343px,24.671509px) scale(.197482,.242522)}60%{transform:translate(25.016343px,24.671509px) scale(.329488,.378959)}80%{transform:translate(25.016343px,24.671509px) scale(.210922,.260924)}to{transform:translate(25.016343px,24.671509px) scale(.317587,.391065)}}'
          }
        </style>
        <g
          transform="matrix(.31696 0 0 .362 25.016 24.672)"
          style={{
            animation:
            'eoda40guyruh2_ts__ts 4000ms linear infinite normal forwards',
          }}
        >
          <g id="eoda40guyruh2" transform="translate(-62.55 -61.6)">
            <g id="eoda40guyruh3">
              <rect
                id="eoda40guyruh4"
                width={52}
                height={83.8}
                rx={0}
                ry={0}
                transform="translate(36.45 20.6)"
                fill="#E0E0E0"
                stroke="none"
                strokeWidth={1}
              />
              <path
                id="eoda40guyruh5"
                transform="translate(12.45 13.4)"
                fill="none"
                stroke="#E0E0E0"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M16.8 91L83.3 91"
              />
            </g>
            <g id="eoda40guyruh6" fill="rgb(27, 100, 218, 0.65)" stroke="none" strokeWidth={1}>
              <rect
                id="eoda40guyruh7"
                width={9}
                height={18.2}
                rx={0}
                ry={0}
                transform="translate(39.95 24.6)"
              />
              <rect
                id="eoda40guyruh8"
                width={9}
                height={18.2}
                rx={0}
                ry={0}
                transform="translate(51.95 24.6)"
              />
              <rect
                id="eoda40guyruh9"
                width={9}
                height={18.2}
                rx={0}
                ry={0}
                transform="translate(63.95 24.6)"
              />
              <rect
                id="eoda40guyruh10"
                width={9}
                height={18.2}
                rx={0}
                ry={0}
                transform="translate(75.95 24.6)"
              />
            </g>
            <g id="eoda40guyruh11" fill="rgb(27, 100, 218, 0.65)" stroke="none" strokeWidth={1}>
              <rect
                id="eoda40guyruh12"
                width={9}
                height={18.2}
                rx={0}
                ry={0}
                transform="translate(39.95 45.8)"
              />
              <rect
                id="eoda40guyruh13"
                width={9}
                height={18.2}
                rx={0}
                ry={0}
                transform="translate(51.95 45.8)"
              />
              <rect
                id="eoda40guyruh14"
                width={9}
                height={18.2}
                rx={0}
                ry={0}
                transform="translate(63.95 45.8)"
              />
              <rect
                id="eoda40guyruh15"
                width={9}
                height={18.2}
                rx={0}
                ry={0}
                transform="translate(75.95 45.8)"
              />
            </g>
            <g id="eoda40guyruh16" fill="rgb(27, 100, 218, 0.65)" stroke="none" strokeWidth={1}>
              <rect
                id="eoda40guyruh17"
                width={9}
                height={18.2}
                rx={0}
                ry={0}
                transform="translate(39.95 67)"
              />
              <rect
                id="eoda40guyruh18"
                width={9}
                height={18.2}
                rx={0}
                ry={0}
                transform="translate(51.95 67)"
              />
              <rect
                id="eoda40guyruh19"
                width={9}
                height={18.2}
                rx={0}
                ry={0}
                transform="translate(63.95 67)"
              />
              <rect
                id="eoda40guyruh20"
                width={9}
                height={18.2}
                rx={0}
                ry={0}
                transform="translate(75.95 67)"
              />
            </g>
            <g id="eoda40guyruh21" stroke="none" strokeWidth={1}>
              <rect
                id="eoda40guyruh22"
                width={45}
                height={15}
                rx={0}
                ry={0}
                transform="translate(39.95 87.9)"
                fill="rgb(27, 100, 218, 0.65)"
              />
              <rect
                id="eoda40guyruh23"
                width={7.9}
                height={11.3}
                rx={0}
                ry={0}
                transform="translate(72.55 91.6)"
                fill="#666"
              />
            </g>
          </g>
        </g>
      </svg>
      <p>🚧 아파트 불러오는 중 🚧</p>
    </LoadingWrapper>
  );
}

export default Loading;
