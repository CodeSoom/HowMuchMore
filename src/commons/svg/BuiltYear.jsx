import * as React from 'react';

function BuiltYear() {
  return (
    <svg
      className="icon icon-tabler icon-tabler-bulldozer"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#3182F6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <circle cx={4} cy={17} r={2} />
      <circle cx={13} cy={17} r={2} />
      <path d="M18 13v6h3" />
      <path d="M13 19L4 19" />
      <path d="M4 15L13 15" />
      <path d="M8 12V7h2a3 3 0 013 3v5" />
      <path d="M5 15v-2a1 1 0 011-1h7" />
      <path d="M18 17L15 17" />
    </svg>
  );
}

export default BuiltYear;
