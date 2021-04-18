import React, { useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Button } from '../styles';

import { GOOGLE_URL } from '../../fixtures/utm';

export default function Share() {
  const [copy, setCopy] = useState({
    URL: GOOGLE_URL,
    copied: false,
  });

  return (
    <>
      <CopyToClipboard
        text={copy.URL}
        onCopy={() => setCopy({
          ...copy,
          copied: true,
        })}
      >
        <Button type="button">
          {!copy.copied ? (
            <>
              Copy URL
            </>
          ) : (
            <>
              Copied
            </>
          )}
        </Button>
      </CopyToClipboard>
    </>
  );
}
