
const filterReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "CLEAR_ALL":
      return {
        dining: false,
        holiday: false,
        rooms: false,
        spa: false,
        starRating: '',
        sortBy: '',
        priceRange: 5000,
    }
    case "DINING":
      return { ...state, dining: !state.dining };
    case "HOLIDAY":
      return { ...state, holiday: !state.holiday };
      case "ROOMS":
      return { ...state, rooms: !state.rooms };
      case "SPA":
      return { ...state, spa: !state.spa };
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
      case "PRICE_RANGE":
        return {...state, priceRange: action.payload }  
                   
    default:
      return state;
  }
};  

export {filterReducer}