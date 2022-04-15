import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "dining",
    
  },
  {
    _id: uuid(),
    categoryName: "spa",
  },
  {
    _id: uuid(),
    categoryName: "holiday",
  
  },
  {
    _id: uuid(),
    categoryName: "rooms",
  
  }
];
