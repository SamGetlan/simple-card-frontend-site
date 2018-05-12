import React from 'react';
import ReactDOM from 'react-dom';
import inputs from './inputs';

const SplashScreen = props => (
  <div className={props.splashAnimate ? 'splashScreenContainer shrink' : 'splashScreenContainer'} style={{backgroundImage: `url(${inputs.splashScreen})`}}>
    <button className={props.splashAnimate ? 'enterButton hidden' : 'enterButton'} onClick={props.enterSite}>Happy Mother's Day! <img src="clickHere.png" height="32px" width="32px"/></button>
  </div>
);

export default SplashScreen;