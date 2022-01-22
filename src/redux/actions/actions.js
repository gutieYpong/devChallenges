import types from '../../constants/actionTypes'


// task todo operations:
export const addTodoAction = payload => ({
  type: types.ADD_TODO,
  payload
});
export const updateTodoAction = payload => ({
  type: types.UPDATE_TODO,
  payload
});
export const deleteTodoAction = payload => ({
  type: types.DELETE_TODO,
  payload
});

// task done operations:
export const addDoneAction = payload => ({
  type: types.ADD_DONE,
  payload
});
export const deleteDoneAction = payload => ({
  type: types.DELETE_DONE,
  payload
});
export const deleteDoneListAction = () => ({
  type: types.DELETE_DONE_LIST,
})