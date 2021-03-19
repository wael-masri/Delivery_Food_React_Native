//import React from 'react';
import {add_to_cart,  clear_all_cart} from './Reduceritemstype';




 export const addToCart = ( product , quantity) => {
  const action = {
      type : add_to_cart,
      product,
      quantity
  }
  console.log("from action add",action);
  return action;
}



  // clear all
export const clearToCart = () => {
    const action = {
        type:clear_all_cart
        
        
    }
    console.log("from action clear",action);
    return action
  }




