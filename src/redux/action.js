export const deleteRec = (payload) => {
  return {
    type: "DEL_REC",
    payload,
  };
};

export const editRec = (payload) => {
  return {
    type: "EDIT_REC",
    payload,
  };
};
export const updateRec = (payload) => {
  return {
    type: "UPDATE_REC",
    payload,
  };
};
export const show = (payload) => {
  return {
    type: "SHOW_REC",
    payload,
  };
};
export const submit = (payload) => {
  return {
    type: "SUBMIT_REC",
    payload,
  };
};
