import React from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addItem(props.feature)} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = (state) => {
//   // console.log(state);
//   return {
//     additionalFeatures: state.additionalFeatures,
//   };

export default connect(null, { addItem })(AdditionalFeature);
