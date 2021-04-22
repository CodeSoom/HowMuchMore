import React, { useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Button } from '../styles';

import { Clipboard, UnLink } from '../svg';

import { GOOGLE_URL } from '../../fixtures/utm';

const style = {
  width: '32px',
  minHeight: '32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0',

  backgroundColor: '#000',
  border: 'none',
  boxShadow: 'none',

  borderRadius: '50%',
  overflow: 'hidden',
};

export default function LinkURL() {
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
        <Button
          type="button"
          aria-label="clipboard"
          style={style}
        >
          {!copy.copied ? (
            <>
              <Clipboard />
            </>
          ) : (
            <>
              <UnLink />
            </>
          )}
        </Button>
      </CopyToClipboard>
    </>
  );
}
