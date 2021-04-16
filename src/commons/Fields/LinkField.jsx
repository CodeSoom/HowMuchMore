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
