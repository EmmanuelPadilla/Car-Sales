import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../actions";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.deleteItem(props.feature)}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return null;
};

export default connect(mapStateToProps, { deleteItem })(AddedFeature);
