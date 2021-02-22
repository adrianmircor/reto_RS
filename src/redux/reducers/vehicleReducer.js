import {
    LISTAR_VEHICULOS,
    BANDERA_LISTAR_VEHICULOS
} from "../types";
  
  const initialState = {
    listaVehiculos: null,
    banderaListaVehiculos: false
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case LISTAR_VEHICULOS:
        return {
          ...state,
          listaVehiculos: action.payload,
        };
        case BANDERA_LISTAR_VEHICULOS:
        return {
          ...state,
          banderaListaVehiculos: action.payload,
        };
      default:
        return state;
    }
  }
  