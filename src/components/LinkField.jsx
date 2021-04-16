import React, { useCallback } from 'react';

import styled from '@emotion/styled';

const Button = styled.button({
  padding: '.5rem 1rem',

  backgroundColor: 'rgb(255, 138, 61, 0.95)',

  color: 'inherit',
  fontWeight: 'bold',

  borderRadius: '.2rem',
  boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
});

export default function LinkField({
  url, title, onClick, apartment, changeApartment,
}) {
  const handleClick = useCallback((event) => {
    event.preventDefault();
    changeApartment?.(apartment);
    onClick({ url });
  }, [onClick]);

  return (
    <div>
      <Button type="button">
        <a
          href={url}
          onClick={handleClick}
        >
          {title}
        </a>
      </Button>
    </div>
  );
}
