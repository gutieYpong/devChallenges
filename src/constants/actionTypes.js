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
  "GET_TODO",
  "UPDATE_TODO",
  "DELETE_TODO",
  "ADD_DONE",
  "GET_DONE",
  "DELETE_DONE",
  "ADD_TODO_TO_DOING",
  "RESET_TODO_TO_DOING",
]);

export default actionTypes;