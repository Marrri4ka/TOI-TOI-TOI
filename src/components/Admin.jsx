import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import './styles.css';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';


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

      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
render(){


  return(
    <div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h3>Login for Form 1</h3>
                    <form  onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <input  onChange={this.handleChange}  name="email" placeholder="E-mail" class="form-control"  type="text" type="text" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input  onChange={this.handleChange} type="password" class="form-control" placeholder="Your Password *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Login" />
                        </div>
                        <div class="form-group">
                            <a href="#" class="ForgetPwd">Forget Password?</a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
  );
}
}


export default  withRouter(Admin);
