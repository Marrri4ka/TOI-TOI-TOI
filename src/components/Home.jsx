import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';

function Home(props){
  return(
    <div>
      <Header  currentUser = {props.currentUser}  handleChange = {props.handleChange} gameList={props.gameListDb} filterMore10={props.filterMore10} rent = {props.rent} removeFromList={props.removeFromList}/>
      <Footer/>
    </div>

  );

}

Home.propTypes = {
  gameList: PropTypes.array,
  filterMore10: PropTypes.func,
  rent: PropTypes.func,
  removeFromList: PropTypes.func,
  handleChange: PropTypes.func


}

export default Home;
