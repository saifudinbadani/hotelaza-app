
const filterReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "DINING":
      return { ...state, dining: !state.dining };
    case "HOLIDAY":
      return { ...state, holiday: !state.holiday };
      case "ROOMS":
      return { ...state, rooms: !state.rooms };
      case "SPA":
      return { ...state, holiday: !state.spa };
      case "FOURSTARS":
      return {...state, starRating: "FOURSTARS"}
      case "THREESTARS":
      return {...state, starRating: "THREESTARS"}
      case "TWOSTARS":
      return {...state, starRating: "TWOSTARS"} 
      case "ONESTAR":
      return {...state, starRating: "ONESTAR"} 
      case "priceLowToHigh":
      return {...state, sortBy: "priceLowToHigh"} 
      case "priceHighToLow":
      return {...state, sortBy: "priceHighToLow"}
      case "ratingLowToHigh":
      return {...state, sortBy: "ratingLowToHigh"}
      case "ratingHighToLow":
      return {...state, sortBy: "ratingHighToLow"}  
                   
    default:
      return state;
  }
};  

export {filterReducer}