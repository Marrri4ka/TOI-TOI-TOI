import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import './styles.css';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
import {MDBBtn} from 'mdbreact';


class  Admin extends React.Component{
  constructor(props){
    super(props);

    this.state = {
    email: "",
    password: ""
  };
  }
  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });

      this.props.history.push('/allorders');
    } catch (error) {
    alert(error);
    }
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
render(){


  return(
    <div class="container login-container full-height">
            <div class="row">
                <div class="col-md-12 login-form-1">
                    <h3>Login for Form 1</h3>
                    <form  onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <input  onChange={this.handleChange}  name="email" placeholder="E-mail" class="form-control"  type="text" type="text" class="form-control" placeholder="Your Email *" />
                        </div>
                        <div class="form-group">
                            <input  onChange={this.handleChange} name="password" type="password" class="form-control" placeholder="Your Password *"  />
                        </div>
                        <div class="form-group">
                          <center>  <MDBBtn gradient='purple' type="submit" >Login</MDBBtn></center>
                        </div>
                        <div class="form-group">
                            <center><a class="ForgetPwd">Forget Password?</a></center>
                        </div>
                    </form>
                </div>

            </div>
        </div>
  );
}
}


export default  withRouter(Admin);
