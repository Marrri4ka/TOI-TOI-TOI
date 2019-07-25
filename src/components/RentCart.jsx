import React from 'react';
import './styles.css';
import {
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  withRouter
} from 'react-router';

class RentCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let index = this.props.match.params.index;
    let totalPrice = 5 * this.props.rentlist.length;

    return (
      <div class="container">
        <div class="row">
      	  <br/>
          <div class="col-md-12">
            <div class="col-md-8 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
              <div class="panel panel-default">
                <div class="panel-heading text-center">
                  <h4>Current Cart</h4>
                </div>
                <div class="panel-body">
                  <table class="table borderless">
          					<tbody>
                      {
                        this.props.rentlist.map((m,index)=>
          							  <tr>
            								<td class="col-md-3">
            								    <div class="media">
            								         <a class="thumbnail pull-left" href="#">
                                       <img class="media-object" src={m.image} height='200px' width='200px' />
                                     </a>
            								         <div class="media-body">
            								             <h5 class="media-heading rentCartText"> {m.name}</h5>
            								         </div>
            								    </div>
            								</td>
            								<td class="col-md-3">
                              <div class="media">
                                <div class="media-body">
                                  <h5 class="media-heading rentCartText">$5.00</h5>
                                </div>
                              </div>
                            </td>
            								<td class="text-right">
                              <button
                                onClick={()=>this.props.removeFromList(index)}
                                type="button"
                                class="btn btn-danger">
                                Remove
                              </button>
                            </td>
          							</tr>
                        )}

          					</tbody>
                    <div class="col-md-12">
                      <strong>Order Total</strong>
                      <div class="pull-right">
                        <span>$</span>
                        <span>{totalPrice}.00</span>
                      </div>
                      <hr/>
                    </div>
                    <Link to='/shippingmethod'>
                      <button
                        type="button"
                        class="btn btn-grey btn-lg btn-block">
                        Checkout
                      </button>
                    </Link>
                    <Link to='/'>
                      <button
                        type="button"
                        class="btn btn-grey btn-lg btn-block">
                        Continue shopping
                      </button>
                    </Link>
          				</table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RentCart.propTypes = {
  masterGameList: PropTypes.array,
  rentlist: PropTypes.array,
  removeFromList: PropTypes.func
}



export default withRouter(RentCart);