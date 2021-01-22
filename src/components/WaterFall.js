import React from "react";
class WaterFall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
    };
  }

  handleDrag = () => {
    this.setState({
      price: this.state.price > 100000 ? 0 : this.state.price + 5000,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 work-heading">
            <h2 className="working-heading" id="work-one">
              Water Fall Fee Structure
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-12 work-slider">
            <div className="estimated-price">
              <span className="waterfall-price">${this.state.price}</span>
              <br></br>Estimated Grand Total
            </div>
            <div className="range">
              <div className="slidecontainer">
                <input
                  type="range"
                  min="0"
                  max="100000"
                  className="slider"
                  id="myRange"
                  onInput={this.handleDrag}
                />
                <div className="row justify-content-evenly">
                  <div className="col">
                    <ul className="list-group list-group-horizontal price-list">
                      <li className="col">
                        <span>|</span>
                        <br />
                        $0
                      </li>
                      <li className="col">
                        <span>|</span>
                        <br />
                        $250,000
                      </li>
                      <li className="col">
                        <span>|</span>
                        <br />
                        $500,000
                      </li>
                      <li className="col">
                        <span>|</span>
                        <br />
                        $750,000
                      </li>
                      <li className="col">
                        <span>|</span>
                        <br />
                        $1M+
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center slider-text">
          <div className="col-md-6">
            <p className="cost-text">
              Drag the slider around based on what you think it will cost to
              repair the property. Move forward based on the estimated fee
              structure below.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-2 cost-pill">
            <i className="popup">
              i
              <span className="popuptext">
                Fee Structure Example: An estimate grand total of $100k will
                result in a fee of $7,360. The $750 deposit will be collected
                upon submission and applied toward the overarching fee.
              </span>
            </i>
            <label className="water-percent">{this.state.price}</label>
            <br></br>
            <span className="water-fee">mpartial Fee</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2 min">
            <p className="minimum-price">[$750 Minimum]</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WaterFall;
