import React from 'react';
import PropTypes from 'prop-types';
import { MDBBtn } from "mdbreact";


class AllOrders extends React.Component{
    constructor(props){
    super(props);

  };

  componentDidMount(){
    this.props.getInfo();
  }



  render(){



    let pickup="";
    let explainMe ="";
    let delivery ="";
    if(this.props.isPickup===true){
        pickup+="Pick up from store"
      }

      if(this.props.seattleArea===true){
          delivery+="Seattle area delivery"
        }

        if(this.props.explainRules===true){
            explainMe+="Oh yeah, please explain us the rules!"
          }

          if(this.props.explainRules===false) {
              explainMe+="No thanks, reading rules is a part of gaming!"
          }



    return(
      <div class="container">

      <div class="row">
        {
           this.props.orderListDb.map((order,index)=>



          <div class="col-md-4">






                  <hr />

                  <li>{order.firstname}{order.lastname}</li>
                  <li>{order.address}</li>
                  <li>{order.time}</li>
                  <li>{order.date}</li>
                  <li>{pickup}</li>


                  <li>{explainMe}</li>
                  <li>{delivery}</li>





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
