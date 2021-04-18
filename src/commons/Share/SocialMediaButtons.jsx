import React from 'react';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

import { FACEBOOK_URL, TWITTER_URL } from '../../fixtures/utm';

export default function SocialMediaButtons() {
  return (
    <>
      <div>
        <FacebookShareButton url={FACEBOOK_URL}>
          <FacebookIcon
            size={32}
            round
          />
        </FacebookShareButton>
      </div>
      <div>
        <TwitterShareButton url={TWITTER_URL}>
          <TwitterIcon
            size={32}
            round
          />
        </TwitterShareButton>
      </div>
    </>
  );
}
