import {
    add_to_cart,
    clear_all_cart
  } from "./Reduceritemstype";

const initialState = {
    cart: [
      // {
      //   product: {
      //     key:"60",
      //     title: "Beef Strogonoff",
      //     price: 28
         
      //   },
      //   quantity: 1,
      // },
    ],
  };





const ItemReducer = (state=initialState,action) => {

  

  
  

  if (action.type == add_to_cart) {
    let new_state = {
      cart: [
        ...state.cart,
        {
          product: action.product,
          quantity: action.quantity,
        },
      ],
    };
   
    console.log("reducer add", new_state);

    return new_state;
  } 
  // clear all from cart
  else if (action.type == clear_all_cart) {
    let new_state = { ...state };
    new_state.cart = [];
    console.log("from reducer clear", new_state);

    return new_state;
  } else {
   
    return state;
  }
  
}

export default ItemReducer