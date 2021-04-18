import * as React from 'react';

function Calendar() {
  return (
    <svg
      className="icon icon-tabler icon-tabler-calendar"
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
      <rect x={4} y={5} width={16} height={16} rx={2} />
      <path d="M16 3L16 7" />
      <path d="M8 3L8 7" />
      <path d="M4 11L20 11" />
      <path d="M11 15L12 15" />
      <path d="M12 15L12 18" />
    </svg>
  );
}

export default Calendar;
