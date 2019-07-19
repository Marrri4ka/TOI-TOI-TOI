import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Demo from './components/Demo';
import HowItWorks from './components/HowItWorks';
import {Switch, Route, Redirect} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";




class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (

    <div>
      <Demo/>
      <Switch>
        <Route path='/about' component={AboutUs}/>
        <Route path='/howitworks' component={HowItWorks}/>
      </Switch>
      <Header/>
      <Footer/>
    </div>
    );
  }
}

export default App;
