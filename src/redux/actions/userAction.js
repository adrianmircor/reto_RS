import {
  ASIGNAR_USUARIO,
  LISTAR_USUARIOS,
  BANDERA_LISTAR_USUARIOS,
} from "../types";
import axios from "axios";

export function verificarUsuario(user) {
  return async (dispatch) => {
    let usuarios;
    let usuarioVerificado;
    let bandera = false;

    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        usuarios = res.data;
        usuarios.forEach((element) => {
          if (
            element.nombre_usuario === user.usuario &&
            element.password === user.contrasena
          ) {
            bandera = true;
            console.log("USUARIO ENCONTRADO POR GET: ",element)
            usuarioVerificado = element;
            //return bandera;
          }
        });
        if (bandera) {
          console.log("BIENVENIDO");
          dispatch({
            type: ASIGNAR_USUARIO,
            payload: usuarioVerificado,
          });
          console.log("Ir al main");
        } else {
          console.log("EL USUARIO NO EXISTE");
        }
        /* console.log("Servidor responde: ", res.data);
        console.log("Usuario que llega: ", usuario); */
        /* if (res.data === usuario) {
          dispatch({
            type: ASIGNAR_USUARIO,
            payload: res.data,
          });
        } else {
          console.log("NO ES EL USUARIO");
        } */
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function asignarUsuario() {
  return async (dispatch) => {
    dispatch({
      type: ASIGNAR_USUARIO,
      payload: null,
    });
  };
}

export function crearUsuario(user) {
  return async (dispatch) => {
    axios
      .post("http://localhost:3000/users/create", user)
      .then((res) => {
        console.log("Post: ", res);
        dispatch({
          type: BANDERA_LISTAR_USUARIOS,
          payload: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getListaUsuarios() {
  return async (dispatch) => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        console.log("USUARIOS: ", res.data);
        dispatch({
          type: LISTAR_USUARIOS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function modifBanderaListaUsuarios(bandera) {
  return (dispatch) => {
    console.log("modifBanderaListaUsuarios");
    dispatch({
      type: BANDERA_LISTAR_USUARIOS,
      payload: bandera,
    });
  };
}

//http://localhost:3000/
//vehiculos/list
