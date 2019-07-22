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
          variant="primary"
          dismissible
          onClose={() => this.setShowMessage(false)}
        >
          <Alert.Heading>
            Filters
          </Alert.Heading>
          <p>
            <div class="support-menu">
      <nav class="vertical">
      <ul><li>
      <a href="#">SparkkTV.com</a>
      <div><ul>
      <li><a href="#">General</a></li>
      <li><a href="#">My Account</a></li>
      <li><a href="#">Watching</a></li>
      <li><a href="#">How To's</a></li>
      <li><a href="#">Site Features</a></li>
      <li><a href="#">Submissions</a></li>
      </ul></div></li>
      <li>
      <a href="#">Mobile App</a>
      <div><ul>
      <li><a href="#">iOS</a></li>
      <li><a href="#">Android</a></li>
      <li><a href="#">Amazon</a></li>
      <li><a href="#">Windows</a></li>
      <li><a href="#">Chrome OS</a></li>
      </ul></div></li>
      <li>
      <a href="#">Smart TV's</a>
      <div><ul>
      <li><a href="#">Roku</a></li>
      <li><a href="#">Amazon Fire TV</a></li>
      </ul></div></li>
      <li>
      <a href="#">Support Forum</a>
      </li>
      <li>
      <a href="#">Contact Us</a>
      </li>
      </ul></nav></div>
          </p>
          <Button onClick={() => this.setShowMessage(false)}>
            Close
          </Button>
        </Alert>
      </CSSTransition>

    </Container>

        <main>
          <MDBContainer className="text-center my-5">
          {
          this.props.gameListDb.map((game,index)=>


            <img src = {game.image} height='100px' width='100px'/>

          )
          }
          </MDBContainer>
        </main>
      </div>
    );
  }
}

Header.propTypes={
  gameListDb: PropTypes.array
}

export default Header;
