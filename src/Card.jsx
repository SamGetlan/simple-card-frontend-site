import React from 'react';
import ReactDOM from 'react-dom';

const Card = props => (
  <div className="cardContainerWrapper">
    <div className="cardContainer">
      <div className="card">
        <div className="face front">
          {props.frontImage !== undefined &&
            <img src={props.frontImage} height="100%" width="100%" />
          }
          {props.frontText !== undefined &&
            <p>{props.frontText}</p>
          }
        </div>
        <div className="face back">
          {props.backImage !== undefined &&
            <img src={props.backImage} height="100%" width="100%" />
          }
          {props.backText !== undefined &&
            <p>{props.backText}</p>
          }
        </div>
      </div>
      
    </div>
  </div>
);

export default Card;