import { createGlobalStyle } from 'styled-components';
import HelveticaNowDisplayBoldttf from './HelveticaNowDisplay-Bold.ttf';
import HelveticaNowDisplayMediumttf from './HelveticaNowDisplay-Medium.ttf';
import HelveticaNowDisplayBlackttf from './HelveticaNowDisplay-Black.ttf';

export default createGlobalStyle`
  
    @font-face {
      font-family: 'HelveticaNowDisplayBold';
      src: local("HelveticaNowDisplayBold"), url(${HelveticaNowDisplayBoldttf}) format('ttf');
    }

    @font-face {
      font-family: 'HelveticaNowDisplayMedium';
      src: url(${HelveticaNowDisplayMediumttf}) format('ttf'),
      url(${HelveticaNowDisplayMediumtff}) format('ttf');
    }

	@font-face {
		font-family: 'HelveticaNowDisplay-Black';
		src: url(${HelveticaNowDisplayBlackttf}) format('ttf'),
		url(${HelveticaNowDisplayBlacktff}) format('ttf');
	}
    
`;