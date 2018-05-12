import React from 'react';
import inputs from './inputs';

const SplashScreen = props => (
  <div className={props.splashAnimate ? 'splashScreenContainer shrink' : 'splashScreenContainer'} style={{backgroundImage: `url(${inputs.splashScreen})`}}>
    <button className={props.splashAnimate ? 'enterButton hidden' : 'enterButton'} onClick={props.enterSite}>{inputs.buttonText} <img src="clickHere.png" height="32px" width="32px"/></button>
  </div>
);

export default SplashScreen;