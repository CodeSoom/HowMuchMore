import React, { useCallback } from 'react';

import { Button } from '../styles';

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
      <Button
        type="button"
        onClick={handleClick}
      >
        <a href={url}>
          {title}
        </a>
      </Button>
    </div>
  );
}
