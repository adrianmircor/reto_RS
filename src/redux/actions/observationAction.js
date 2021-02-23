import { 
    LISTAR_OBSERVACIONES,
    BANDERA_LISTAR_OBSERVACIONES 
} 
from "../types";

import axios from "axios";

export function getListaObservaciones() {
  return async (dispatch) => {
    axios
      .get("https://test-sonr.herokuapp.com/observaciones/list")
      .then((res) => {
        console.log("OBSERVACIONES: ", res.data);
        dispatch({
          type: LISTAR_OBSERVACIONES,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function modifBanderaListaObservaciones(bandera) {
  return (dispatch) => {
    console.log("modifBanderaListaVehiculos");
    dispatch({
      type: BANDERA_LISTAR_OBSERVACIONES,
      payload: bandera,
    });
  };
}