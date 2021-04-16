import React, { useCallback } from 'react';

import styled from '@emotion/styled';

const Field = styled.div({
  marginBottom: '2rem',
});

const Label = styled.label({
  display: 'block',
  padding: '.4rem 0',

  color: 'rgb(150, 159, 170)',
  fontWeight: '500',
  lineHeight: '1.6',
});

const Input = styled.input({
  padding: '1rem',

  outline: 'none',
  border: 'none',
  borderRadius: '.8rem',
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',

  '&:focus': {
    border: '1.5px solid rgba(255, 138, 61, 0.95)',
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
        onChange={handleChange}
        autoFocus={focus}
      />
    </Field>
  );
});

export default TextField;
