import React from 'react';
import PropTypes from 'prop-types';
import { MDBBtn } from "mdbreact";


class AllOrders extends React.Component{
    constructor(props){
    super(props);
  };


  render(){
    return(
      <div class="container">

        <div class="row">
          {
             this.props.orderListDb.map((order,index)=>






            <div class="col-md-4">






                    <hr />
                    <p>
                    {order.firstname}


                    </p>
                      <MDBBtn color="unique">Complete</MDBBtn>
                    <hr />





            </div>
              )}






        </div>
    </div>

  );
}
};

AllOrders.propTypes = {
  orderListDb: PropTypes.array
}

export default AllOrders;
