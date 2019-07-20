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




class App extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      masterGameList: []
    };

    this.handleAddNewGame=this.handleAddNewGame.bind(this);
  }


  handleAddNewGame(newGame){
    var newGameList = this.state.masterGameList.slice();
    newGameList.push(newGame);
    this.setState({masterGameList: newGameList});
  }
  render() {
    return (

    <div>
        <Switch>
        <Route  exact path='/' component={Home}/>
        <Route path='/about' component={AboutUs}/>
        <Route path='/howitworks' component={HowItWorks}/>
        <Route path='/rentcart' component={RentCart}/>
        <Route path='/pay' component={PaymentMethod}/>
        <Route path='/newGame' render={()=><NewGame onNewCreation={this.handleAddNewGame}/>}/>
        <Route path='/allgames' render={()=><GameList gameListPropperty={this.state.masterGameList}/>}/>

        </Switch>




    </div>
    );
  }
}

export default App;
