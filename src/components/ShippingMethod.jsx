import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function ShippingMethod(props){

  let _pickUp = null;

  function handleSaveShippingInfo(){
    alert(_pickUp.checked);
    props.saveShippingInfo(_pickUp.checked);

  }
  return(
    <div class="container">
      	<div class="row">
        	<div class="boxes">
          <input type="checkbox" id="box-1" ref ={(input)=>{_pickUp=input;}}/>
          <label for="box-1">Pick-up from store FREE </label>

          <input type="checkbox" id="box-2" />
          <label for="box-2">Seattle area $5 </label>

          <input type="checkbox" id="box-3"/>
          <label for="box-3">We can explain reules for extra $5</label>
          <Link to='/address'><button onClick={()=> handleSaveShippingInfo()} class="btn btn-grey pull-left btn-fyi"><span class="glyphicon glyphicon-chevron-left"></span> Continue</button></Link>


        </div>


      	</div>
    </div>
  );
}

ShippingMethod.propTypes={
  saveShippingInfo: PropTypes.func
}

export default ShippingMethod;
