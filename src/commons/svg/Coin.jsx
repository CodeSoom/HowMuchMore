import * as React from 'react';

function Coin() {
  return (
    <svg
      className="icon icon-tabler icon-tabler-coin"
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
      <circle cx={12} cy={12} r={9} />
      <path d="M14.8 9A2 2 0 0013 8h-2a2 2 0 000 4h2a2 2 0 010 4h-2a2 2 0 01-1.8-1M12 6v2m0 8v2" />
    </svg>
  );
}

export default Coin;
