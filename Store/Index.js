
import {createStore,combineReducers} from 'redux';


import reducerItems from '../Reducers/Reduceritems';


//for multi reducers
const rootReducer = combineReducers({
    items : reducerItems 
    
  })

 export const store = createStore(rootReducer)

