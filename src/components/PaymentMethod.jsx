import React, {
  Fragment,
  useState
} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Confirmation from './Confirmation';
import axios from '../axios-db';
import {withRouter} from 'react-router-dom';
import {
  Container,
  Button,
  Alert
} from 'react-bootstrap';
import {
  CSSTransition
} from 'react-transition-group';
import {

  MDBBtn
} from 'mdbreact';

class PaymentMethod extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      collapse: false,
      isWideEnough: false,
      showButton: true,
      showMessage: false,



    };

  }

 saveOrder(){
    const newOrder = {
     firstname: this.props.firstname,
     lastname: this.props.lastname,
     address: this.props.address,
     time: this.props.time,
     date: this.props.date,
     rentlist: this.props.rentlist,
     isPickup: this.props.isPickup,
     explainRules: this.props.explainRules,
     seattleArea: this.props.seattleArea
   };
   axios
     .post("/orders.json", newOrder)
     .then(response => this.props.history.push('/confirmation'))
     .catch(error => console.log(error));
  }

  setShowButton(newValue) {
    this.setState({
      showButton: newValue
    });
  }

  setShowMessage(newValue) {
    this.setState({
      showMessage: newValue

    });
  }


  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }





  render(){
    let totalGames = 5 * this.props.rentlist.length;
    let totalShipping = 0;

    if(this.props.isPickup === true){
      totalShipping+=0;
    }
    if(this.props.explainRules===true){
      totalShipping+=5;
    }

    if(this.props.seattleArea === true){
      totalShipping+=5;
    }
    let total = totalGames + totalShipping;
  return(
    <div class="content full-height">
      <div class="container">
	     <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-7 col-xs-12">
          <div class="container">
         	<div class="row">
                  		<div class="paymentCont">
                  						<div class="headingWrap">
                  								<h3 class="headingTop text-center">Select Your Payment Method</h3>

                  						</div>
                  						<div class="paymentWrap">
                  							<div class="btn-group paymentBtnGroup btn-group-justified" data-toggle="buttons">
                  					            <label class="btn paymentMethod active">
                  					            	<div    onClick={() => this.setShowMessage(true)} class="method visa"></div>
                  					                <input type="radio" name="options"/>
                  					            </label>
                  					            <label class="btn paymentMethod">
                  					            	<div   onClick={() => this.setShowMessage(true)} class="method master-card"></div>
                  					                <input type="radio" name="options"/>
                  					            </label>
                  					            <label class="btn paymentMethod">
                  				            		<div    onClick={() => this.setShowMessage(true)}class="method amex"></div>
                  					                <input type="radio" name="options"/>
                  					            </label>
                  					             <label class="btn paymentMethod">
                  				             		<div    onClick={() => this.setShowMessage(true)}class="method vishwa"></div>
                  					                <input type="radio" name="options"/>
                  					            </label>
                  					            <label class="btn paymentMethod">
                  				            		<div   onClick={() => this.setShowMessage(true)} class="method ez-cash"></div>
                  					                <input type="radio" name="options"/>
                  					            </label>

                  					        </div>
                  						</div>
                  						<div class="footerNavWrap clearfix" align="center">
                  							<Link to='/'><div class="btn btn-grey pull-left btn-fyi"><span class="glyphicon glyphicon-chevron-left"></span> CONTINUE SHOPPING</div></Link>
                  							<div onClick={()=> this.saveOrder()}class="btn btn-grey pull-right btn-fyi">CHECKOUT<span class="glyphicon glyphicon-chevron-right"></span></div>
                  						</div>
                  		</div>
                    </div>

                    <Container style={{ paddingTop: '2rem' }}>

                    <CSSTransition
                      in={this.state.showMessage}
                      timeout={300}
                      classNames="alert"
                      unmountOnExit
                      onEnter={() => this.setShowButton(false)}
                      onExited={() => this.setShowButton(true)}
                    >
                    <Alert
                      variant="red"
                      dismissible
                      onClose={() => this.setShowMessage(false)}
                    >

                      <p>
                        <div class="support-menu">
                          <nav class="vertical">
                            <div class="container">
  <div class="row">
    <div class="span12">
      <form class="form-horizontal span6">
        <fieldset>
          <legend>Payment</legend>

          <div class="control-group">
            <label class="control-label">Card Holder's Name</label>
            <div class="controls">
              <input type="text" class="input-block-level" pattern="\w+ \w+.*" title="Fill your first and last name" required/>
            </div>
          </div>

          <div class="control-group">
            <label class="control-label">Card Number</label>
            <div class="controls">
              <div class="row-fluid">
                <div class="span">
                  <input type="text" class="input-block-level" autocomplete="off" maxlength="" pattern="\d{4}" title="First four digits" required/>
                </div>

              </div>
            </div>
          </div>

          <div class="control-group">
            <label class="control-label">Card Expiry Date</label>
            <div class="controls">
              <div class="row-fluid">
                <div class="span9">
                  <select class="input-block-level">
                    <option>January</option>
                    <option>February</option>
                    <option>December</option>
                  </select>
                </div>
                <div class="span3">
                  <select class="input-block-level">
                    <option>2013</option>
                    <option>...</option>
                    <option>2015</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="control-group">
            <label class="control-label">Card CVV</label>
            <div class="controls">
              <div class="row-fluid">
                <div class="span3">
                  <input type="text" class="input-block-level" autocomplete="off" maxlength="3" pattern="\d{3}" title="Three digits at back of your card" required/>
                </div>
                <div class="span8">

                </div>
              </div>
            </div>
          </div>

          <div class="form-actions">
                <Fragment>
            <MDBBtn gradient="purple"  onClick={()=> this.saveOrder()} type="submit">Submit</MDBBtn>
            <MDBBtn  onClick={() => this.setShowMessage(false)}  gradient="purple" type="button" class="btn">Cancel</MDBBtn>
                   </Fragment>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</div>


                        </nav>
                      </div>
                      </p>


                    </Alert>
                  </CSSTransition>
                </Container>

                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-5 col-xs-12">

                    <div class="widget">
                        <h4 class="widget-title">Order Summary</h4>
                        <div class="summary-block">
                            <div class="summary-content">
                                <div class="summary-head"><h5 class="summary-title">Games</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">${totalGames}.00</p>
                                    <span class="summary-small-text pull-right"></span>
                                </div>
                            </div>
                        </div>
                        <div class="summary-block">
                            <div class="summary-content">
                               <div class="summary-head"> <h5 class="summary-title">Shipping</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">${totalShipping}.00</p>
                                    <span class="summary-small-text pull-right"></span>
                                </div>
                            </div>
                        </div>
                        <div class="summary-block">
                            <div class="summary-content">
                               <div class="summary-head"> <h5 class="summary-title">Total</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">$ {total}.00</p>
                                    <span class="summary-small-text pull-right"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="widget">
                        <h4 class="widget-title">Shipping Address</h4>
                        <div class="summary-block">
                            <div class="summary-content">
                                <div class="summary-head"><h5 class="summary-title">Name</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">{this.props.firstname} {this.props.lastname}</p>

                                </div>
                            </div>
                        </div>
                        <div class="summary-block">
                            <div class="summary-content">
                               <div class="summary-head"> <h5 class="summary-title">Address</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">{this.props.address}</p>
                                    <span class="summary-small-text pull-right"></span>
                                </div>
                            </div>
                        </div>
                        <div class="summary-block">
                            <div class="summary-content">
                               <div class="summary-head"> <h5 class="summary-title">Time</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">{this.props.time}</p>
                                    <span class="summary-small-text pull-right"></span>
                                </div>
                            </div>
                        </div>
                        <div class="summary-block">
                            <div class="summary-content">
                               <div class="summary-head"> <h5 class="summary-title">Date</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">{this.props.date}</p>
                                    <span class="summary-small-text pull-right"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </div>
    </div>
  )
};
}



PaymentMethod.propTypes = {
  isPickup: PropTypes.bool,
  explainRules: PropTypes.bool,
  seattleArea: PropTypes.bool,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  address: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
  rentlist: PropTypes.array,

}


export default withRouter( PaymentMethod);
