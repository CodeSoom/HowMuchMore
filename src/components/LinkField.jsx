import React, { useCallback } from 'react';

export default function LinkField({
  url, title, onClick, apartment, changeApartment,
}) {
  const handleClick = useCallback((event) => {
    event.preventDefault();
    if (title === '보기') {
      changeApartment(apartment);
    }
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
