import React from "react";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { asignarUsuario } from "../../redux/actions/userAction.js";

import { Link, Redirect, useHistory } from "react-router-dom";

const Navigation = () => {
  const dispatch = useDispatch();

  const _usuario = useSelector((state) => state.user.usuario);

  const btnCerrarSesion = () => {
    console.log("Cerrar sesion");
    dispatch(asignarUsuario());
    return <Redirect to="/" />;
  };

  if (_usuario === null) {
    return <Redirect to="/" />;
  }

  console.log("EL USUARIO EN SESION: ",_usuario);

  return (
    <div>
      <nav>
        <div className="pag-principal contenedor-opcion">
          <Link to="/main">
            <h5>Página Principal</h5>
          </Link>
        </div>
        <div className="opciones">
          <div className="contenedor-opcion">
            <Link to="/main/users">
              <h5>Usuarios</h5>
            </Link>
          </div>
          <div className="contenedor-opcion">
            <Link to="/main/vehicles">
              <h5>Vehiculos</h5>
            </Link>
          </div>
          <div className="contenedor-opcion">
            <Link to="/main/observations">
              <h5>Observaciones</h5>
            </Link>
          </div>
        </div>
        <div className="div-btn-cerrarsesion ">
          <button
            className="btn-cerrarsesion"
            onClick={() => btnCerrarSesion()}
          >
            Cerrar Sesión
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
