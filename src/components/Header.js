import React from "react";
import { connect } from "react-redux";
const Header = (props) => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={this.state.car.image} alt={this.state.car.name} />
      </figure>
      <h2>{this.state.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.car.price,
    car: state.car.name,
  };
};

export default connect(mapStateToProps, {})(Header);
