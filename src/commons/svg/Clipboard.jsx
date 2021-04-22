import * as React from 'react';

function Clipboard() {
  return (
    <svg
      className="icon icon-tabler icon-tabler-link"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#FFF"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M10 14a3.5 3.5 0 005 0l4-4a3.5 3.5 0 00-5-5l-.5.5" />
      <path d="M14 10a3.5 3.5 0 00-5 0l-4 4a3.5 3.5 0 005 5l.5-.5" />
    </svg>
  );
}

export default Clipboard;
