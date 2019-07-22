import React, { Fragment, useState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBCol, MDBIcon,MDBBtn} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom';
import pic from '../assets/img/mahjong.jpeg';
import './styles.css';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';



class Header extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      showButton: true,
      showMessage: false
    };
    this.onClick = this.onClick.bind(this);

  }
  setShowButton(newValue){
    this.setState({
      showButton: newValue
    });
  }

  setShowMessage(newValue){
    this.setState({
      showMessage: newValue

    });
  }


  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>

        <header>

            <MDBNavbar color="transparent" dark expand="md" fixed="top">

              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>


                <MDBNavbarNav right>
                    <MDBNavItem active>
                      <MDBNavLink to="/about">About us</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/howitworks">How it works</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/rentcart">Rent cart</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/pay">Pay</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/newGame">New Game</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>

              </MDBCollapse>
            </MDBNavbar>


          <MDBView src={pic}>
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
              <div className="d-flex align-items-center">.
              <MDBCol md="9">
                <h1>Board Game Rent</h1>
                <h5>It will always stay visible on the top, even when you scroll down</h5>
                <br />

                <form className="form-inline mt-4 mb-4">
                  <MDBIcon icon="search" />
                  <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                </form>






              </MDBCol>

            </div>
            </MDBMask>
          </MDBView>
        </header>
        <Container style={{ paddingTop: '2rem' }}>
      {this.state.showButton && (
        <Fragment>
        <MDBBtn gradient="purple"
          onClick={() => this.setShowMessage(true)}
          size="lg"
        >
        Filter
        </MDBBtn>

          </Fragment>
      )}
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
      <ul><li>
      <a href="#">Rating</a>
      <div><ul>
      <li   onClick={() => this.props.filterMore10()}><a href="#">5-7 </a></li>

      <li><a href="#">7-9</a></li>

      </ul></div></li>
      <li>
      <a href="#">Playtime</a>
      <div><ul>
      <li><a href="#">30-60 min</a></li>
      <li><a href="#"> more than 60 min</a></li>

      </ul></div></li>
      <li>
      <a href="#">Players</a>
      <div><ul>
      <li><a href="#">1-2</a></li>
      <li><a href="#">2-4</a></li>
      <li><a href="#">4-6</a></li>
      <li><a href="#">more than 6</a></li>
      </ul></div></li>
      </ul></nav></div>
          </p>

          <Fragment>
        <MDBBtn onClick={() => this.setShowMessage(false)} gradient="purple">Close</MDBBtn>
         </Fragment>
        </Alert>
      </CSSTransition>

    </Container>

        <main>
          <MDBContainer className="text-center my-5">

          <h1 class="text-center">Team Design Section with Pure CSS Effect</h1>


 <div class="container">
 <div class="row">


 {
         this.props.gameList.map((game,index)=>

<div class="col-lg-4">

 <div class="our-team-main">

 <div class="team-front">
    <img src = {game.image} height='100px' width='100px'/>
 <h3>{game.name}</h3>

 </div>

 <div class="team-back">
 <center>
 <span>
 <h4>Players: {game.minPlayers} - {game.maxPlayers}</h4>
  <h4>Playtime: {game.playingTime} minutes</h4>
  <h4>Rate: {game.averageRating}</h4>
  <Fragment>
   <Link to='/rentcart'><center><MDBBtn  gradient="peach">Rent</MDBBtn></center></Link>
 </Fragment>

 </span>
  </center>
 </div>


 </div>

</div>
)
}

 </div>
 </div>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

Header.propTypes={
  gameList: PropTypes.array,
  rent: PropTypes.func,
  filterMore10: PropTypes.func

}

export default Header;
