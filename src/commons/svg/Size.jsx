import * as React from 'react';

function Size() {
  return (
    <svg
      className="icon icon-tabler icon-tabler-dimensions"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#ff4500"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M3 5h11M12 7l2-2-2-2M5 3L3 5l2 2M19 10v11M17 19l2 2 2-2M21 12l-2-2-2 2" />
      <rect x={3} y={10} width={11} height={11} rx={2} />
    </svg>
  );
}

export default Size;
