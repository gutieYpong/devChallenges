import { fromJS } from "immutable";

import { getTodoList, getDoneList } from "../../utils/localStorage";


export const todoListState = fromJS({
  todoList: getTodoList(),
  doneList: getDoneList(),
})