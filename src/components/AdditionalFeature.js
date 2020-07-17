import React from "react";
import { connect, useDispatch } from "react-redux";
import { addToggle } from "../actions/actions";

const AdditionalFeature = (props) => {
  const dispatch = useDispatch();
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => dispatch(addToggle(props.feature))}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
