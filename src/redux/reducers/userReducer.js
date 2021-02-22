import {
  ASIGNAR_USUARIO,
  LISTAR_USUARIOS,
  BANDERA_LISTAR_USUARIOS,
} from "../types";

const initialState = {
  usuario: null,
  listaUsuarios: null,
  banderaListaUsuarios: false, //objeto con username y password
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ASIGNAR_USUARIO:
      return {
        ...state,
        usuario: action.payload,
      };
    case LISTAR_USUARIOS:
      return {
        ...state,
        listaUsuarios: action.payload,
      };
    case BANDERA_LISTAR_USUARIOS:
      return {
        ...state,
        banderaListaUsuarios:  action.payload,
      };

    default:
      return state;
  }
}
