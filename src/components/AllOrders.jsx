import React from 'react';
import PropTypes from 'prop-types';
import { MDBBtn } from "mdbreact";
import {Link} from 'react-router-dom';
import {
  withRouter
} from 'react-router';



class AllOrders extends React.Component{
    constructor(props){
    super(props);



  };

  componentDidMount(){
    this.props.getInfo();
  }





  render(){


    let index = this.props.match.params.index;
    let pickup="";
    let explainMe ="";
    let delivery ="";
    if(this.props.isPickup===true){
        pickup+="I'll pick up games from store!"
      }




      if(this.props.seattleArea===true){
          delivery+="Please deliver to address you see above!"
        }



        if(this.props.explainRules===true){
            explainMe+="Please explain us the rules!"
          }

          if(this.props.explainRules===false) {
              explainMe+="Reading rules is a part of gaming!"
          }



    return(
      <div class="container full-height">

      <div class="row">
        {
           this.props.orderListDb.map((order,index)=>



          <div class="col-md-4">






                  <hr />

                  <li>{order.firstname}{order.lastname}</li>
                  <li>{order.address}</li>
                  <li>{order.time}</li>
                  <li>{order.date}</li>
                  <p>{pickup}</p>


                  <p>{explainMe}</p>
                  <p>{delivery}</p>





                    <MDBBtn onClick={()=>this.props.deleteOrder(index)} color="unique">Complete</MDBBtn>
                  <hr />





          </div>
            )}






      </div>
  </div>


  );
}
};

AllOrders.propTypes = {
  orderListDb: PropTypes.array,
  isPickup: PropTypes.bool,
  explainRules: PropTypes.bool,
  seattleArea: PropTypes.bool,
  deleteOrder: PropTypes.func
}

export default withRouter(AllOrders);
