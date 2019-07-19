import React, { Fragment } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBCol, MDBIcon,MDBBtn} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom';
import pic from '../assets/img/mahjong.jpeg';
import './styles.css';



class Header extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
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

            <MDBNavbar color="indigo" dark expand="md" fixed="top">

              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>

                 <a className="btn-floating btn-lg btn-fb" type="button" role="button"><i className="fab fa-facebook-f"></i></a>


                 <a className="btn-floating btn-lg btn-tw" type="button" role="button"><i className="fab fa-twitter"></i></a>

                 <a className="btn-floating btn-lg btn-gplus" type="button" role="button"><i className="fab fa-google-plus-g"></i></a>

                </MDBNavbarNav>

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
                <Fragment>
                  <MDBBtn gradient="purple">Filter</MDBBtn>
                </Fragment>
              </MDBCol>

            </div>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default Header;
