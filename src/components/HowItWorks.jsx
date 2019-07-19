import React , {useState}from 'react';
import {  Link } from 'react-router-dom';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './styles.css';



function HowItWorks (props){

  const [showButton, setShowButton] = useState(true);
const [showMessage, setShowMessage] = useState(false);
  return(
    <Container style={{ paddingTop: '2rem' }}>
  {showButton && (
    <Button
      onClick={() => setShowMessage(true)}
      size="lg"
    >
      Show Message
    </Button>
  )}
  <CSSTransition
    in={showMessage}
    timeout={300}
    classNames="alert"
    unmountOnExit
    onEnter={() => setShowButton(false)}
    onExited={() => setShowButton(true)}
  >
    <Alert
      variant="primary"
      dismissible
      onClose={() => setShowMessage(false)}
    >
      <Alert.Heading>
        Filters
      </Alert.Heading>
      <p>
        <table class="table">
    <thead>
      <tr>

        <th scope="col">First</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">12</th>

      </tr>
      <tr>
        <th scope="row">21</th>

      </tr>
      <tr>
        <th scope="row">30</th>

      </tr>
    </tbody>
    <thead>
      <tr>

        <th scope="col">First</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">12</th>

      </tr>
      <tr>
        <th scope="row">21</th>

      </tr>
      <tr>
        <th scope="row">30</th>

      </tr>
    </tbody>
    <thead>
      <tr>

        <th scope="col">First</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">12</th>

      </tr>
      <tr>
        <th scope="row">21</th>

      </tr>
      <tr>
        <th scope="row">30</th>

      </tr>
    </tbody>
  </table>
      </p>
      <Button onClick={() => setShowMessage(false)}>
        Close
      </Button>
    </Alert>
  </CSSTransition>
  
</Container>




  );
}



export default HowItWorks;
