import React from 'react';
import {Link} from 'react-router-dom';

function ShippingMethod(){
  return(
    <div class="container">
      	<div class="row">
        	<div class="boxes">
          <input type="checkbox" id="box-1"/>
          <label for="box-1">Pick-up from store FREE </label>

          <input type="checkbox" id="box-2" />
          <label for="box-2">Seattle area $5 </label>

          <input type="checkbox" id="box-3"/>
          <label for="box-3">We can explain reules for extra $5</label>
          <Link to='/address'><button>Checkout</button></Link>
        </div>


      	</div>
    </div>
  );
}


export default ShippingMethod;
