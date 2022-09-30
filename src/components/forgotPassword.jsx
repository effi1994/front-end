import React from "react";
import Form from "./common/form";
//import auth from "../services/authService";
import Joi from "joi-browser";

class ForgotPassword extends Form {
  state = {
    data: { email: "" },
    errors: {},
  };

  schema = {
       email: Joi.string().email().required().label("Email"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <div>
        <h1>Forgot Password</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="col-md-4">
            {this.renderInput("email", "Email", "email", "", "")}
          </div>
          <div className="col-12">
              <br/>
              {this.renderButton("Send Password")}
              </div>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
