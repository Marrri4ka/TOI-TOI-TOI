import React from 'react';
import {
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

function ShippingMethod(props) {
  let _pickUp = null;
  let _seattleArea = null;
  let _explainRules = null;

  function handleSaveShippingInfo() {
    props.saveShippingInfo(_pickUp.checked, _seattleArea.checked, _explainRules.checked);
  }

  return (
    <div class="shippingForm">
        <div class="formTitle"><h1>Shipping</h1></div><br/>
          <input type="checkbox" id="box-1" ref ={(input)=>{_pickUp=input;}} />
          <label for="box-1"><h5>Pick-up from store FREE</h5></label>

          <input type="checkbox" id="box-2" ref ={(input)=>{_seattleArea=input;}} />
          <label for="box-2"><h5>Seattle area $5</h5></label>

          <input type="checkbox" id="box-3" ref ={(input)=>{_explainRules=input;}}/>
          <label for="box-3"><h5>We can explain reules for extra $5</h5></label>
          <Link to='/address'>
            <button
              onClick={()=> handleSaveShippingInfo()}
              class="btn btn-grey btn-fyi btn-lg btn-block">
              <span class="glyphicon glyphicon-chevron-left"></span>
              Continue
            </button>
          </Link>
    </div>
  );
}

ShippingMethod.propTypes = {
  saveShippingInfo: PropTypes.func
}

export default ShippingMethod;
