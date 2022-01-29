import { generateSuccess } from ".";
import { QUESTION_TYPE } from "../../constants/common";


export const generateQuestAction = payload => {
  // decide which type of question
  const typeSeed = Math.floor( Math.random() * QUESTION_TYPE.length );
  let question, flag, answer, seed;
  let options = new Set();
  let list = [];

  while( options.size < 4 ) {
    seed = Math.floor( Math.random() * ( payload.data.length ) );
    if( options.has( payload.data[seed].name.common ) === false )
    {
      options.add( payload.data[seed].name.common );
      list.push( payload.data[seed] );
    }
  }

  while( true )
  {
    seed = Math.floor( Math.random() * ( list.length ) );

    if( localStorage.getItem( list[seed].name.common ) === null )
      break;
  }

  switch( QUESTION_TYPE[typeSeed].type ) {
    case 'flag':
      answer = list[seed].name.common;
      question = QUESTION_TYPE[typeSeed].question;
      flag = list[seed].flags.svg;
      break;
    case 'capital':
      answer = list[seed].name.common;
      question = `${ list[seed].capital !== "" ? list[seed].capital : list[seed].name.common } ${ QUESTION_TYPE[typeSeed].question }`; // if no capital found then just use common name
      flag = "";
      break;
    default: break;
  }

  localStorage.setItem( question, question );

  return dispatch => {
    // [...options] <- transform from Set() to Array
    dispatch( generateSuccess( question, flag, answer, [...options].reduce(( prev, curr ) => {
      return [
        ...prev,
        { 
          option: {
            "value": curr,
            "isAns": curr === answer,
          }
        }
      ]
    }, []) ) ); 
  }
}