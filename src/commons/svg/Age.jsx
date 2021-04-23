import * as React from 'react';

function Age() {
  return (
    <svg
      className="icon icon-tabler icon-tabler-old"
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
      <path d="M11 21l-1-4-2-3V8" />
      <path d="M5 14l-1-3 4-3 3 2 3 .5" />
      <circle cx={8} cy={4} r={1} />
      <path d="M7 17l-2 4M16 21v-8.5a1.5 1.5 0 013 0v.5" />
    </svg>
  );
}

export default Age;
