import React, { useCallback } from 'react';

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
      <button type="button">
        <a
          href={url}
          onClick={handleClick}
        >
          {title}
        </a>
      </button>
    </div>
  );
}
