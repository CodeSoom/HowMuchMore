import React, { useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { GOOGLE_URL } from '../../fixtures/utm';

export default function Share() {
  const [copy, setCopy] = useState({
    URL: GOOGLE_URL,
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
