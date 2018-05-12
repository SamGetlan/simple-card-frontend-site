import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SplashScreen from './SplashScreen.jsx';
import Card from './Card.jsx';
import inputs from './inputs.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashAnimate: false,
      splashScreen: true,
    }
    this.enterSite = this.enterSite.bind(this);
  }


  enterSite() {
    this.setState({
      splashAnimate: true,
    })
    setTimeout((() => App.setState({
      splashScreen: false,
    }), 1000))
  }

  render() {
    return (
      <div className="App" style={{backgroundImage: `url(${inputs.background})`, }}>
        {this.state.splashScreen &&
          <SplashScreen splashAnimate={this.state.splashAnimate} enterSite={this.enterSite}/>
        }
        <Card frontImage={inputs.mainCardImage} backText={inputs.mainCardText}/>
        <div className="subCardsWrapper">
        {inputs.subCards.map(card => (
          <Card frontImage={card.frontImage} backImage={card.backImage}/>
        ))}
        </div>
      </div>
    );
  }
}

export default App;
