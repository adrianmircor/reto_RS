import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";

const store = createStore(

  reducer,//pokemonReducer
  compose(
    applyMiddleware(thunk),

    //El siguiente codigo es para que se ejecute en navegadores que no se tiene instalado
    //REDUX dev tools
    typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;