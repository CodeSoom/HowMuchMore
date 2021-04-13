import React, { useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Share() {
  // Full URL:
  // https://howmuchmore.xyz/?utm_source=google&utm_medium=cpc&utm_campaign=howmuchmore&utm_term=life
  const [copy, setCopy] = useState({
    URL: 'https://bit.ly/2PXrH0t',
    copied: false,
  });

  return (
    <section>
      <CopyToClipboard
        text={copy.URL}
        onCopy={() => setCopy({
          ...copy,
          copied: true,
        })}
      >
        <button type="button">
          {!copy.copied ? (
            <>
              Copy URL
            </>
          ) : (
            <>
              Copied
            </>
          )}
        </button>
      </CopyToClipboard>
    </section>
  );
}
