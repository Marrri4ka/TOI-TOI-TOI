import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import  {withRouter} from 'react-router';



class RentCart extends React.Component{
  constructor(props){
    super(props);
  }
  render(){

    let index = this.props.match.params.index;
  return(



    <div class="container">
	<div class="row">
		<div class="col-xs-8">
			<div class="panel panel-info">
				<div class="panel-heading">
					<div class="panel-title">
						<div class="row">
							<div class="col-xs-6">
								<h5><span class="glyphicon glyphicon-shopping-cart"></span> Rent Cart</h5>
							</div>

						</div>
					</div>
				</div>
				<div class="panel-body">
        {
          this.props.rentlist.map((m,index)=>

					<div class="row">
						<div class="col-xs-2"><img class="img-responsive" src="http://placehold.it/100x70"/>
						</div>
						<div class="col-xs-4">
							<h4 class="product-name"><strong>Product name</strong></h4><h4><small>{m.name}</small></h4>
						</div>
						<div class="col-xs-6">
							<div class="col-xs-6 text-right">
								<h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
							</div>
							<div class="col-xs-4">
								<input type="text" class="form-control input-sm" value="1"/>
							</div>
							<div class="col-xs-2">
								<button type="button" class="btn btn-link btn-xs">
									<span class="glyphicon glyphicon-trash"> </span>
								</button>
							</div>
						</div>
					</div>
			)}

				</div>
				<div class="panel-footer">
					<div class="row text-center">
						<div class="col-xs-9">
							<h4 class="text-right">Total <strong>$50.00</strong></h4>
						</div>

            <div class="col-xs-3">
              <Link to='/'><button type="button" class="btn btn-success btn-block">
                Continue renting
              </button></Link>
            </div>
						<div class="col-xs-3">
							<Link to='/shippingmethod'><button type="button" class="btn btn-success btn-block">
								Checkout
							</button></Link>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</div>


  );
}
}

RentCart.propTypes={
  masterGameList: PropTypes.array,
  rentlist: PropTypes.array
}



export default withRouter(RentCart);
