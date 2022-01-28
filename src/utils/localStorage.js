import { isEmpty } from "lodash";


// init states
const QUEST_LIST_KEY = "QUEST_LIST_KEY";

// actions
export const getQuestList = () => {
  const questListStr = localStorage.getItem( QUEST_LIST_KEY );

  if( isEmpty(questListStr) ) return [];
  return JSON.parse( questListStr );
}

export const saveQuestList = payload => {
  localStorage.setItem( QUEST_LIST_KEY, JSON.stringify(payload) );
}

export const deleteQuestList = () => localStorage.removeItem( QUEST_LIST_KEY );