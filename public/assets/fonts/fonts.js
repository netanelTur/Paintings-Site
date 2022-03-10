import { createGlobalStyle } from 'styled-components';

import HelveticaNowDisplayBoldWoff from './HelveticaNowDisplay/HelveticaNowDisplayBold.woff';
import HelveticaNowDisplayBoldWoff2 from './HelveticaNowDisplay/HelveticaNowDisplayBold.woff2';

import HelveticaNowDisplayMediumWoff from './HelveticaNowDisplay/HelveticaNowDisplayMedium.woff';
import HelveticaNowDisplayMediumWoff2 from './HelveticaNowDisplay/HelveticaNowDisplayMedium.woff2';

export default createGlobalStyle`
  
    @font-face {
      font-family: 'HelveticaNowDisplayBold';
      src: url(${HelveticaNowDisplayBoldWoff2}) format('woff2'),
      url(${HelveticaNowDisplayBoldWoff}) format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'HelveticaNowDisplay';
      src: url(${HelveticaNowDisplayMediumWoff2}) format('woff2'),
      url(${HelveticaNowDisplayMediumWoff}) format('woff');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
`;