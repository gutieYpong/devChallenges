import { layoutState } from "./initState";
import { SET_POP_UP, SET_ACTIVE_ID } from "../actions/actions"

const layoutReducer = ( layout = layoutState, { type, payload } ) => {
  switch( type ) {
    case SET_POP_UP: 
      return {
        ...layout,
        isPopUp: ( payload ? true : false ),
      }
    case SET_ACTIVE_ID:
      return {
        ...layout,
        activeId: payload,
      }
    default:
      return layout;
  }
};

export default layoutReducer;