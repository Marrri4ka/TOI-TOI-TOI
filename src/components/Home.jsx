import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';

function Home(props){
  return(
    <div>
      <Header  gameList={props.gameList} filterMore10={props.filterMore10} />
      <Footer/>
    </div>

  );

}

Home.propTypes = {
  gameList: PropTypes.array,
  filterMore10: PropTypes.func
}

export default Home;
