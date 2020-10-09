export const ADD_FEATURE = "ADD_FEATURE";
export const DELETE_FEATURE = "DELETE_FEATURE";

export const addItem = (feature) => {
  return {
    type: ADD_FEATURE,
    payload: feature,
  };
};

export const deleteItem = (feature) => {
  return {
    type: DELETE_FEATURE,
    payload: feature,
  };
};
