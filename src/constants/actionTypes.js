const createTypes = array =>
  array.reduce(( currTypes, nextType ) => {
    // return a JSON object
    return {
      ...currTypes,
      [nextType]: nextType,
    }
  }, {});

const actionTypes = createTypes([
  "ADD_TODO",
  "UPDATE_TODO",
  "DELETE_TODO",
  "ADD_DONE",
  "DELETE_DONE",
  "DELETE_DONE_LIST"
]);

export default actionTypes;