import React from 'react';
import LinkField from '../../components/LinkField';

export default function ApartmentNavigation({ onClick }) {
  return (
    <nav>
      <ul>
        <li>
          <button type="button">
            <LinkField
              url="/apartment/riverside"
              title="한강 뷰"
              onClick={onClick}
            />
          </button>
        </li>
        <li>
          <button type="button">
            <LinkField
              url="/apartment/businessdistrict"
              title="우수 상권"
              onClick={onClick}
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}
