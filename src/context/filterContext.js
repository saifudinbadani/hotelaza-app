import { useContext, createContext, useReducer } from "react";
import { categoryFn, ratingFilterFn, sortingFn } from "../utils/filterFunctions";
import { filterReducer } from "../reducer/filterReducer";

const filterContext = createContext();

const FilterProvider = ({children}) => {
    
    const [state, dispatch ] = useReducer(filterReducer,{
        dining: false,
        holiday: false,
        rooms: false,
        spa: false,
        fourStars: false,
        threeStars: false,
        twoStars: false,
        oneStar: false,
        sortBy: ''
    } );
    
    return <filterContext.Provider value={{state, dispatch, categoryFn, ratingFilterFn, sortingFn}}>
        {children}
    </filterContext.Provider>
}

const useFilter = () => useContext(filterContext);

export { useFilter, FilterProvider};