import React from 'react';
import LinkField from '../../components/LinkField';

export default function ApartmentNavigation({ onClick }) {
  return (
    <nav>
      <ul>
        <li>
          <LinkField
            url="/apartments/riverside"
            title="한강 뷰"
            onClick={onClick}
          />
        </li>
        <li>
          <LinkField
            url="/apartments/businessdistrict"
            title="우수 상권"
            onClick={onClick}
          />
        </li>
      </ul>
    </nav>
  );
}
