import { combineReducers } from "redux";

import userReducer from './userReducer';
import vehicleReducer from './vehicleReducer';
import observationReducer from './observationReducer';

export default combineReducers({
  //Pueden haber varios Reducer... poryectoReducer, tareaReducer, etc
  //1er Reducer
  user: userReducer,
  vehicle: vehicleReducer,
  observation: observationReducer
});