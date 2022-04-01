import { useContext, createContext, useReducer } from "react";
import { categoryFn, ratingFilterFn, sortingFn, priceRangeFn } from "../utils/filterFunctions";
import { filterReducer } from "../reducer/filterReducer";

const filterContext = createContext();

const FilterProvider = ({children}) => {
    
    const [state, dispatch ] = useReducer(filterReducer,{
        dining: false,
        holiday: false,
        rooms: false,
        spa: false,
        starRating: '',
        sortBy: '',
        priceRange: 5000,
    } );
    
    return <filterContext.Provider value={{state, dispatch, categoryFn, ratingFilterFn, sortingFn, priceRangeFn}}>
        {children}
    </filterContext.Provider>
}

const useFilter = () => useContext(filterContext);

export { useFilter, FilterProvider};