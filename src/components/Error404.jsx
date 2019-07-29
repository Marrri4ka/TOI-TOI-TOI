import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props){
  return (
      <div class="container full-height">
    <div>The page {props.location.pathname} does not exist!</div>
  <h3>Would you like return  <Link to='/'> home?</Link></h3>
    </div>
  );

}

Error404.propTypes = {
  location: PropTypes.object
}

export default Error404;
