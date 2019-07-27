import React, {
  Fragment,
  useState
} from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBCol,
  MDBIcon,
  MDBBtn
} from 'mdbreact';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import {
  Link
} from 'react-router-dom';
import pic from '../assets/img/mahjong.jpeg';
import './styles.css';
import {
  Container,
  Button,
  Alert
} from 'react-bootstrap';
import {
  CSSTransition
} from 'react-transition-group';
import PropTypes from 'prop-types';

import { auth } from "../firebase/firebase.utils";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      showButton: true,
      showMessage: false,
      poetFilter: ""


    };
    this.onClick = this.onClick.bind(this);
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

                    {this.props.currentUser ? (
                      <div className="nav-item nav-link" onClick={() => auth.signOut()}>
                        Sign out
                      </div>
                    ) : (
                        <MDBNavItem>
                          <MDBNavLink to="/admin">Admin</MDBNavLink>
                        </MDBNavItem>
                    )}
                    {this.props.currentUser &&
                      <div>
                      <MDBNavItem>
                        <MDBNavLink to="/allorders">Orders</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="/newGame">New Game</MDBNavLink>
                      </MDBNavItem>
                    </div>
                    }
                  </MDBNavbarNav>


              </MDBCollapse>
            </MDBNavbar>


          <MDBView src={pic}>
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
              <div className="d-flex align-items-center">.
              <MDBCol md="12">
                <center>
                  <h1 className="App-header-text">Board Game Rent</h1>
                  <h5 className="App-header-text">
                    It will always stay visible on the top, even when you scroll down
                  </h5>
                  <br />
                </center>

                <form onChange={this.props.handleChange} className="form-inline mt-4 mb-4 searchForm">
                  <MDBIcon icon="search" />
                  <input
                    className="form-control form-control-sm ml-4 w-75"
                    align="center"
                    type="text"
                    placeholder="Search"
                    id="filter"
                    defaultValue={this.state.poetFilter}

                     aria-label="Search" />
                </form>
              </MDBCol>
            </div>
            </MDBMask>
          </MDBView>
        </header>
        <Container style={{ paddingTop: '2rem' }}>
          {this.state.showButton && (
            <center>
            <Fragment>
              <MDBBtn gradient="purple"
                onClick={() => this.setShowMessage(true)}
                size="lg"
                >
                Filter
              </MDBBtn>

            </Fragment>
          </center>
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
              <ul>
                <li>
                  <a href="#">Rating</a>
                    <div><ul>
                      <li onClick={() => this.props.filterMore10(5,7,0,400,0,10)}><a href="#">5-7 </a></li>
                      <li onClick={() => this.props.filterMore10(8,9,0,400,0,60)}><a href="#">8-9 </a></li>
                    </ul></div>
                  </li>
                  <li>
                    <a href="#">Playtime</a>
                    <div><ul>
                      <li   onClick={() => this.props.filterMore10(0,10,30,60,0,10)}><a href="#">30-60 min </a></li>
                      <li   onClick={() => this.props.filterMore10(0,10,60,500,0,20)}><a href="#"> more than 60 min </a></li>
                    </ul></div></li>
                  <li>
                    <a href="#">Players</a>
                    <div><ul>
                      <li onClick={() => this.props.filterMore10(0,10,0,400,1,2)}><a href="#">1-2</a></li>
                      <li onClick={() => this.props.filterMore10(0,10,0,400,2,6)}><a href="#">2-6</a></li>
                      <li onClick={() => this.props.filterMore10(0,10,0,400,6,80)}><a href="#">more than 6</a></li>
                    </ul></div>
                  </li>
              </ul>
            </nav>
          </div>
          </p>

          <Fragment>
        <MDBBtn onClick={() => this.setShowMessage(false)} gradient="purple">Close</MDBBtn>
         </Fragment>
        </Alert>
      </CSSTransition>
    </Container>
        <main>
          <MDBContainer className="text-center my-5">
             <div class="container gradient-background">
             <div class="row">
             {
               this.props.gameList.map((game,index)=>
                 <div class="col-lg-4">

                 <div class="our-team-main">

                 <div class="team-front">
                    <img src = {game.image} height='100px' width='100px'/>
                 <h6>{game.name}</h6>

                 </div>

                 <div class="team-back">
                 <center>
                 <span>
                 <h6>Players: {game.minPlayers} - {game.maxPlayers}</h6>
                  <h6>Playtime: {game.playingTime} minutes</h6>
                  <h6>Rate: {Math.round(game.averageRating * 10) / 10}</h6>
                  <Fragment>
                   <Link to={'/rentcart/'+index}><center><MDBBtn onClick={()=>this.props.rent(index)}gradient="peach">Rent</MDBBtn></center></Link>
                 </Fragment>

                 </span>
                  </center>
                 </div>


                 </div>

                </div>
            )}

            </div>
          </div>
        </MDBContainer>
      </main>
    </div>
    );
  }
}

Header.propTypes = {
  gameList: PropTypes.array,
  rent: PropTypes.func,
  filterMore10: PropTypes.func,
  handleChange: PropTypes.func

}

export default Header;
