import React, { useCallback } from 'react';

import styled from '@emotion/styled';

import {
  colors,
  fontWeights,
  borderRadius,
  shadows,
} from '../../designSystem';

const Field = styled.div({
  marginBottom: '2rem',
});

const Label = styled.label({
  display: 'block',
  padding: '.4rem 0',

  color: colors.black,
  fontWeight: fontWeights.medium,
  lineHeight: '1.6',
});

const Input = styled.input({
  padding: '1rem',

  outline: 'none',
  border: 'none',
  borderRadius: borderRadius.input,
  boxShadow: shadows.input,

  '&:focus': {
    border: `1.5px solid ${colors.themeColor}`,
  },
});

const TextField = React.memo(({
  label,
  type = 'text',
  placeholder,
  name,
  value,
  onChange,
  focus,
}) => {
  const id = `input-${name}`;

  const handleChange = useCallback((event) => {
    const { target } = event;
    onChange({ name, value: target.value });
  }, [onChange]);

  return (
    <Field>
      <Label htmlFor={id}>
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        min="1"
        onChange={handleChange}
        autoFocus={focus}
      />
    </Field>
  );
});

export default TextField;
