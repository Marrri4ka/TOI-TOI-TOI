import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Demo from './components/Demo';
import HowItWorks from './components/HowItWorks';
import RentCart from './components/RentCart';
import PaymentMethod from './components/PaymentMethod';
import NewGame from './components/NewGame';
import GameList from './components/GameList';
import Confirmation from './components/Confirmation';

import {
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import ShippingMethod from './components/ShippingMethod';
import Address from './components/Address';
import Admin from './components/Admin';
import Error404 from './components/Error404';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import axios from './axios-db';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      masterGameList: [],
      filteredList: [],
      rentlist: [],
      isPickup: false,
      seattleArea: false,
      explainRules: false,
      firstname: null,
      lastname: null,
      address: null,
      time: null,
      date: null,
      poetFilter: ''

    };

    let gameListDb = [];
    let thisObj = this;
    axios.get('/games.json').then(function(response) {

      Object.keys(response.data).forEach(function(key) {
        gameListDb.push(response.data[key]);

      })

      thisObj.setState({
        masterGameList: gameListDb,
        filteredList: gameListDb
      });
    });

    this.handleAddNewGame = this.handleAddNewGame.bind(this);
    this.filterMore10 = this.filterMore10.bind(this);
    this.rent = this.rent.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
    this.saveShippingInfo = this.saveShippingInfo.bind(this);
    this.saveAddress = this.saveAddress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddNewGame(newGame) {
    var gameListDb = this.state.masterGameList.slice();
    gameListDb.push(newGame);
    this.setState({
      masterGameList: gameListDb
    });
  }

  filterMore10(minRating, maxRating, minTime, maxTime, minPlayers, maxPlayers, word) {
    let filtered = this.state.masterGameList.filter(m =>
      (m.averageRating) >= minRating && (m.averageRating) <= maxRating &&
      (m.playingTime) >= minTime && (m.playingTime) <= maxTime &&
      (m.minPlayers) >= minPlayers && (m.maxPlayers) <= maxPlayers

    );
    this.setState({
      masterGameList: this.state.masterGameList,
      filteredList: filtered
    });
  }

  rent(index) {
    var newRentList = this.state.rentlist.slice();
    newRentList.push(this.state.masterGameList[index]);
    this.setState({
      rentlist: newRentList
    });

  }

  removeFromList(index) {
    var listAfterRemove = this.state.rentlist.slice();
    listAfterRemove.splice(index, 1);
    this.setState({
      rentlist: listAfterRemove
    });
  }

  saveShippingInfo(isPickupNew, seattleAreaNew, explainRulesNew) {
    this.setState({
      isPickup: isPickupNew,
      seattleArea: seattleAreaNew,
      explainRules: explainRulesNew
    });
  }

  saveAddress(_firstname, _lastname, _address, _time, _date) {
    this.setState({
      firstname: _firstname,
      lastname: _lastname,
      address: _address,
      time: _time,
      date: _date
    });
  }

  handleChange = (e) => {
    var newList = this.state.masterGameList.filter(m =>
      m.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      masterGameList: newList
    });
  }

  render() {
    return (

      <div>
        <Switch>
        <Route  exact path='/' render={()=><Home handleChange = {this.handleChange} rent = {this.rent}  gameListDb={this.state.masterGameList} filterMore10={this.filterMore10} gameList={this.state.filteredList} />}/>
        <Route path='/about' component={AboutUs}/>
        <Route path='/howitworks' component={HowItWorks}/>
        <Route path='/rentcart/:index' render={()=><RentCart masterGameList={this.state.masterGameList} rentlist={this.state.rentlist} removeFromList={this.removeFromList} />}/>

        <Route path='/newGame' render={()=><NewGame onNewCreation={this.handleAddNewGame}/>}/>
        <Route path='/allgames' render={()=><GameList gameListPropperty={this.state.filteredList}/>}/>
        <Route path='/shippingmethod' render={()=><ShippingMethod saveShippingInfo={this.saveShippingInfo}/>}/>
        <Route path='/address' render={()=><Address saveAddress={this.saveAddress} firstname={this.state.firstname} lastname={this.state.lastname} address={this.state.address} time={this.state.time} date={this.state.date}/>}/>
        <Route path='/pay' render={()=><PaymentMethod rentlist={this.state.rentlist} isPickup={this.state.isPickup}  seattleArea={this.state.seattleArea}  explainRules={this.state.explainRules}  firstname={this.state.firstname} lastname={this.state.lastname} address={this.state.address} time={this.state.time} date={this.state.date}/>}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/confirmation' render={()=><Confirmation isPickup={this.state.isPickup}  seattleArea={this.state.seattleArea}  explainRules={this.state.explainRules}  saveShippingInfo={this.saveShippingInfo} rentlist={this.state.rentlist} firstname={this.state.firstname} lastname={this.state.lastname} address={this.state.address} time={this.state.time} date={this.state.date} />}/>
        <Route component={Error404}/>

        </Switch>
      </div>
    );
  }
}

export default App;
