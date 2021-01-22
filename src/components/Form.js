import React from "react";

class Form extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            value={this.props.username}
            placeholder="Username"
            onChange={this.props.handleUser}
            onBlur={this.props.handleValidation}
          />
          <input
            type="email"
            className="form-control"
            value={this.props.email}
            placeholder="Email"
            onChange={this.props.handleEmail}
            onBlur={this.props.handleValidation}
          />
          <input
            type="tel"
            className="form-control"
            value={this.props.phone}
            placeholder="_ _-_ _ _-_ _ _ _ _"
            onChange={this.props.handlePhone}
            onBlur={this.props.handleValidation}
          />
        </div>

        <div className="col-md-6">
          <textarea
            className="form-control message"
            id="exampleFormControlTextarea1"
            placeholder="Write your message..."
            value={this.props.message}
            onChange={this.props.handleMessage}
            onBlur={this.props.handleValidation}
          ></textarea>
        </div>
        <div class="col-4 call-to-action">
          <a href="">
            <input
              type="submit"
              onChange={this.props.handleValidation}
              disabled={this.props.formfilled}
              class="btn btn-primary ctn"
              id={this.props.formfilled ? "block" : "activate"}
              onClick={this.props.handleSubmit}
            />
          </a>
        </div>
      </>
    );
  }
}

export default Form;
