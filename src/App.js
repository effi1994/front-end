import {  Route,Switch,Redirect } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import React, { Fragment } from 'react';
import auth from "../src/services/authService";
import NotFound from './components/notFound';
import NavBar from './components/navbar';
import LoginForm from './components/loginForm';
import Register from './components/register';
import Home from '../src/components/home';
import './App.css';
import Logout from './components/logout';
import ForgotPassword from './components/forgotPassword';
//

class App extends React.Component {
  state = {  } 
  componentDidMount() {
    const user =auth.getCurrentUser();
    this.setState({user});
   }
  render() { 
    const {user} =this.state;
    return ( <Fragment>
      <ToastContainer />
      <NavBar user={user} />
      <main className="container">
        <Switch>
          <Route path={"/market-place"} component={Home} />
          <Route path={"/register"} component={Register} />
          <Route path={"/login"} component={LoginForm} />
          <Route path={"/forgot-password"} component={ForgotPassword} />
          <Route path={"/logout"} component={Logout} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to={"/market-place"} />
        </Switch>
      </main>
    </Fragment>);
  }
}
 
export default App;
