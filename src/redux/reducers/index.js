import { combineReducers } from "redux";

import userReducer from './userReducer';
import vehicleReducer from './vehicleReducer';

export default combineReducers({
  //Pueden haber varios Reducer... poryectoReducer, tareaReducer, etc
  //1er Reducer
  user: userReducer,
  vehicle: vehicleReducer
});