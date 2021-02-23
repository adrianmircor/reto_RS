import { 
  LISTAR_OBSERVACIONES, 
  BANDERA_LISTAR_OBSERVACIONES 
} from "../types";

const initialState = {
  listaObservaciones: null,
  banderaListaObservaciones: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LISTAR_OBSERVACIONES:
      return {
        ...state,
        listaObservaciones: action.payload,
      };
    case BANDERA_LISTAR_OBSERVACIONES:
      return {
        ...state,
        banderaListaObservaciones: action.payload,
      };
    default:
      return state;
  }
}
