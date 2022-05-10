

 const categoryFn = (state, data) => {
    let filteredData = [];
    if (!state.dining && !state.holiday && !state.rooms && !state.spa) {
      return data;
    } else {
      if (state.dining) {
        filteredData = [
          ...filteredData,
          ...data.filter((item) => item.categoryName === "dining")
        ];
        
      }
      if (state.holiday) {
        filteredData = [
          ...filteredData,
          ...data.filter((item) => item.categoryName === "holiday")
        ];
       
        
      }
      if (state.rooms) {
        filteredData = [
          ...filteredData,
          ...data.filter((item) => item.categoryName === "rooms")
        ];
        
      }
      if (state.spa) {
        filteredData = [
          ...filteredData,
          ...data.filter((item) => item.categoryName === "spa")
        ];
    
      }
      return filteredData;
    }
  };

  const ratingFilterFn = (state, data) => {
    
    if(state.starRating === "FOURSTARS"){
          return [...data].filter((item) => item.starRating >= 4)
      }
    if(state.starRating === "THREESTARS"){
        return [...data].filter((item) => item.starRating >= 3)
    }
    if(state.starRating === "TWOSTARS"){
        return [...data].filter((item) => item.starRating >= 2)
    }
    if(state.starRating === "ONESTAR"){
        return [...data].filter((item) => item.starRating >= 1)
    }

    return data
  }

  const sortingFn = (state, data) => {
      
      if(state.sortBy === 'priceLowToHigh'){
        return [...data].sort((a, b) => a.price - b.price);
      }
      if(state.sortBy === 'priceHighToLow'){
        return [...data].sort((a, b) => b.price - a.price);
      }
      if(state.sortBy === 'ratingLowToHigh'){
        return [...data].sort((a, b) => a.starRating - b.starRating);
      }
      if(state.sortBy === 'ratingHighToLow'){
        return [...data].sort((a, b) => b.starRating - a.starRating);
      }
      return data
  }

  const priceRangeFn = (state, data) => {
    return [...data].filter((item) => item.price <= state.priceRange )
  }

  export { categoryFn, ratingFilterFn, sortingFn, priceRangeFn }