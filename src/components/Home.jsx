import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';

function Home(props){
  return(
    <div>
      <Header gameListDb={props.gameListDb}/>
      <Footer/>
    </div>

  );

}

Home.propTypes = {
  gameListDb: PropTypes.array
}

export default Home;
