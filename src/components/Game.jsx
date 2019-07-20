import React from 'react';
import Proptypes from 'prop-types';
import { Link } from  'react-router-dom';

function Game(props){
  return(
    <div>
      <h4>{props.name}</h4>
      <h4>{props.rate}</h4>
    </div>

  );
}

Game.propTypes = {
  img: Proptypes.string,
  name: Proptypes.string,
  rate: Proptypes.number
}

export default Game;
