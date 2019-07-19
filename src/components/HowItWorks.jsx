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
      <Button onClick={() => setShowMessage(false)}>
        Close
      </Button>
    </Alert>
  </CSSTransition>

</Container>




  );
}



export default HowItWorks;
