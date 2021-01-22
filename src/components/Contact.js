import React from "react";
import Form from "./Form";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      phone: "",
      message: "",
      formfilled: true,
    };
  }

  handleUser = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  handleValidation = () => {
    if (
      this.state.username === "" ||
      this.state.email === "" ||
      this.state.message === ""
    ) {
      this.setState({
        formfilled: true,
      });
    } else {
      this.setState({
        formfilled: false,
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 work-heading">
            <h2 className="working-heading">Contact Us</h2>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <Form
              username={this.state.username}
              email={this.state.email}
              phone={this.state.cell}
              message={this.state.message}
              formfilled={this.state.formfilled}
              handleUser={this.handleUser}
              handleEmail={this.handleEmail}
              handlePhone={this.handlePhone}
              handleMessage={this.handleMessage}
              handleSubmit={this.handleSubmit}
              handleValidation={this.handleValidation}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
