import { LISTAR_VEHICULOS, BANDERA_LISTAR_VEHICULOS } from "../types";

import axios from "axios";

export function getListaVehiculos() {
  return async (dispatch) => {
    axios
      .get("https://test-sonr.herokuapp.com/vehiculos/list")
      .then((res) => {
        console.log("VEHICULOS: ", res.data);
        dispatch({
          type: LISTAR_VEHICULOS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function modifBanderaListaVehiculos(bandera) {
  return (dispatch) => {
    console.log("modifBanderaListaVehiculos");
    dispatch({
      type: BANDERA_LISTAR_VEHICULOS,
      payload: bandera,
    });
  };
}

export function crearVehiculo(vehicle) {
  return async (dispatch) => {
    axios
      .post("https://test-sonr.herokuapp.com/vehiculos/create", vehicle)
      .then((res) => {
        console.log("Post: ", res);
        dispatch({
          type: BANDERA_LISTAR_VEHICULOS,
          payload: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

//https://test-sonr.herokuapp.com/
//vehiculos/list
