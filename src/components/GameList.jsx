import React from 'react';
import Proptypes from 'prop-types';
import Game from './Game';


function GameList(props){
  return(
    <div>
      props.gameListPropperty.map((game)=>
      <div>
        <Game
          name: {game.name}
          rate: {game.rate}
          >
      </div>
    )

    </div>

  );
}

GameList.propTypes = {
  gameListPropperty: PropTypes.array
}

export default GameList;
