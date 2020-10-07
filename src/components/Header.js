import React from "react";
import { connect } from "react-redux";

const Header = (props) => {
  // console.log(props);
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.car} />
      </figure>
      <h2>{props.car}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    price: state.car.price,
    car: state.car.name,
    image: state.car.image,
  };
};

export default connect(mapStateToProps, {})(Header);
