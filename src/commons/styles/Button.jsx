import styled from '@emotion/styled';

import {
  colors,
  fontWeights,
  borderRadius,
  shadows,
} from '../../designSystem';

const Button = styled.button({
  padding: '.5rem 1rem',

  backgroundColor: colors.orange,

  fontWeight: fontWeights.bold,

  borderRadius: borderRadius.box,
  boxShadow: shadows.button,
});

export default Button;
