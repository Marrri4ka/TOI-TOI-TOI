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

import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import axios from './axios-db';




class App extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      masterGameList: [],
      filteredList:[]

    };

    let gameListDb = [];
    let thisObj = this;
    axios.get('.json').then(function(response){
      Object.keys(response.data).forEach(function(key){
        gameListDb.push(response.data[key]);
      })

      thisObj.setState({masterGameList: gameListDb, filteredList: gameListDb});
    });

    this.handleAddNewGame=this.handleAddNewGame.bind(this);
    this.filterMore10=this.filterMore10.bind(this);
  }





  handleAddNewGame(newGame){
    var gameListDb = this.state.masterGameList.slice();
    gameListDb.push(newGame);
    this.setState({masterGameList: gameListDb});
  }


    filterMore10(){
      let filtered = this.state.masterGameList.filter(m=>
      (m.averageRating)>8);
      this.setState({masterGameList: this.state.masterGameList, filteredList:filtered});

    }
  render() {
    return (

    <div>
        <Switch>
        <Route  exact path='/' render={()=><Home gameListDb={this.state.masterGameList} filterMore10={this.filterMore10} gameList={this.state.filteredList}/>}/>
        <Route path='/about' component={AboutUs}/>
        <Route path='/howitworks' component={HowItWorks}/>
        <Route path='/rentcart' component={RentCart}/>
        <Route path='/pay' component={PaymentMethod}/>
        <Route path='/newGame' render={()=><NewGame onNewCreation={this.handleAddNewGame}/>}/>
        <Route path='/allgames' render={()=><GameList gameListPropperty={this.state.filteredList}/>}/>

        </Switch>




    </div>
    );
  }
}

export default App;
