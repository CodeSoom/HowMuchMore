import React from 'react';

import { LinkField } from '../../commons/Fields';

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
            url="/apartments/commercial"
            title="주변 상권 우수"
            onClick={onClick}
          />
        </li>
        <li>
          <LinkField
            url="/apartments/landscape"
            title="조경 우수"
            onClick={onClick}
          />
        </li>
        <li>
          <LinkField
            url="/apartments/commute_gangnam"
            title="강낭 출퇴근 편리"
            onClick={onClick}
          />
        </li>
        <li>
          <LinkField
            url="/apartments/commute_gwanghwamun"
            title="광화문 출퇴근 편리"
            onClick={onClick}
          />
        </li>
        <li>
          <LinkField
            url="/apartments/commute_yeouido"
            title="여의도 출퇴근 편리"
            onClick={onClick}
          />
        </li>
      </ul>
    </nav>
  );
}
