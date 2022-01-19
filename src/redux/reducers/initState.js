// import { fromJS } from "immutable";

// export const layoutState = fromJS({
//   period: 'day',
//   activeId: 'clock',
// })
import { STAYS } from "../../constants/common"


export const searchState = ({
  isPopUp: false,
  locationInput: "",
  guestsInput: 0,
  searchResult: STAYS,
})