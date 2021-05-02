import React from 'react';

import styled from '@emotion/styled';

import { translateNumericToKor } from '../../utils/utils';

import {
  Currency,
  District,
  Size,
  Calendar,
  BuiltYear,
  Location,
} from '../../commons/svg';

import { Header } from '../../commons/styles';

import { borderRadius } from '../../designSystem';

const ApartmentWrapper = styled.article({
  '& img': {
    width: '100%',

    objectFit: 'cover',
    borderRadius: borderRadius.box,
  },
});

const List = styled.dl({
  display: 'flex',
  flexDirection: 'column',
});

const Item = styled.div({
  display: 'inline-flex',
  padding: '.5rem',

  '& dd': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '.4rem',
  },

  '& svg': {
    marginRight: '.4rem',
  },
});

export default function ApartmentDetail({ apartment, isPyeong }) {
  const {
    imgSrc,
    name,
    price,
    size,
    pyeong,
    date,
    district,
    lotNumber,
    builtYear,
  } = apartment;

  return (
    <ApartmentWrapper>
      <img
        src={imgSrc}
        alt={name}
      />
      <Header>
        {name}
      </Header>
      <List>
        <Item>
          <dd>
            <Currency />
            거래금액:
          </dd>
          <dt>
            {`${translateNumericToKor(price)} 원`}
          </dt>
        </Item>

        <Item>
          <dd>
            <Size />
            전용면적:
          </dd>
          <dt>
            {isPyeong ? (
              <>
                {`${pyeong} 평 (${size} m²)`}
              </>
            ) : (
              <>
                {`${size} m² (${pyeong} 평)`}
              </>
            )}
          </dt>
        </Item>

        <Item>
          <dd>
            <Calendar />
            최근 매매일자:
          </dd>
          <dt>
            {date}
          </dt>
        </Item>

        <Item>
          <dd>
            <District />
            법정동:
          </dd>
          <dt>
            {district}
          </dt>
        </Item>

        <Item>
          <dd>
            <Location />
            지번:
          </dd>
          <dt>
            {lotNumber}
          </dt>
        </Item>

        <Item>
          <dd>
            <BuiltYear />
            건축년도:
          </dd>
          <dt>
            {`${builtYear} 년`}
          </dt>
        </Item>
      </List>
    </ApartmentWrapper>
  );
}
