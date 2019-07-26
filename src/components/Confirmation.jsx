import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class Confirmation extends React.Component{
  constructor(props){
    super(props);
  };
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



  return (
    <div>

    <div class="content confirmationForm">
<div class="container">
 <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="box">
                      <center><h3 class="box-title">Thank you for the renting!</h3></center>
                      <div class="plan-selection">
                          <div class="plan-data">

                              <label for="question1">Games</label>
                                                              {
                                    this.props.rentlist.map((game)=>
                                    <li>{game.name}</li>
                                  )
                                  }


                              <span class="plan-price"></span>
                          </div>
                      </div>
                      <div class="plan-selection">
                          <div class="plan-data">

                              <label for="question3">Time and Date</label>

                              <li>{this.props.time}</li>
                              <li>{this.props.date}</li>


                              <span class="plan-price"></span>
                          </div>
                      </div>
                      <div class="plan-selection">
                          <div class="plan-data">

                              <label for="question2">Address</label>
                              <li>{this.props.firstname}</li>
                              <li>{this.props.lastname}</li>
                              <li>{this.props.address}</li>
                              <span class="plan-price"></span>
                          </div>
                      </div>
                      <div class="plan-selection">
                          <div class="plan-data">

                              <label for="question2">Rules Explanation</label>
                                <p>{explainMe}</p>
                              <span class="plan-price"></span>
                          </div>
                      </div>
                      <div class="plan-selection">
                          <div class="plan-data">

                              <label for="question3">Delivery</label>
                              <p>{pickup}</p>
                              <p>{delivery}</p>


                              <span class="plan-price"></span>
                          </div>
                      </div>
                  </div>





                  <Link to='/'><a href="#" class="btn btn-grey btn-lg mb30">Home</a></Link>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-5 col-xs-12">



              </div>
          </div>
<div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  text-center mt20">

            </div></div>





</div>
</div>


    </div>


  );
}
}

Confirmation.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  address: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
  rentlist: PropTypes.array,
  saveShippingInfo: PropTypes.func,
  isPickup: PropTypes.bool,
  explainRules: PropTypes.bool,
  seattleArea: PropTypes.bool

}

export default Confirmation;
