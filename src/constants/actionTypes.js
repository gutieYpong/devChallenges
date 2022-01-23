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
  "DELETE_TODO",
  "ADD_DONE",
  "DELETE_DONE",
]);

export default actionTypes;