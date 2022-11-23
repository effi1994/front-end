import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import { Link, Redirect } from "react-router-dom";
import mockDb from '../services/mokDb';
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Passwoed"),
  };

  doSubmit = async () => {
     mockDb.login(this.state.data.username,this.state.data.password);
  /*   try {
      const { data } = this.state;
      await auth.login(data.username,data.password);
      const {state} =this.props.location;
      window.location = state ? state.from.pathname : '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    } */
  };

  render() {
    if(auth.getCurrentUser()) return <Redirect to={"/"}/>
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="col-md-4">
            {this.renderInput(
              "username",
              "Username/Email",
              "text",
              "username or email",
              ""
            )}
          </div>
          <div className="col-md-4">
            {" "}
            {this.renderInput("password", "Password", "password", "", "")}
          </div>
          <div className="col-12">
            <br/>
            {this.renderButton("Login")} 
            <br/>
            <Link to={"/forgot-password"}>Forgot Password</Link>
            <br/>
            <Link to={"/register"}>Register</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
