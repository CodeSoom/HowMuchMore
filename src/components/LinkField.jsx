import React from 'react';

export default function LinkField({ url, title, onClick }) {
  return (
    <div>
      <a
        href={url}
        onClick={() => onClick({ url })}
      >
        {title}
      </a>
    </div>
  );
}
