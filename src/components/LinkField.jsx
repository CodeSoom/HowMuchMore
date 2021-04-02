import React, { useCallback } from 'react';

export default function LinkField({ url, title, onClick }) {
  const handleClick = useCallback((event) => {
    event.preventDefault();
    onClick({ url });
  }, [onClick]);

  return (
    <div>
      <a
        href={url}
        onClick={handleClick}
      >
        {title}
      </a>
    </div>
  );
}
