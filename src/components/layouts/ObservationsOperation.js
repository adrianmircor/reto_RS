import React, { useState, useEffect } from "react";

//REDUX
import { useSelector, useDispatch } from "react-redux";

import {
  getListaObservaciones,
  modifBanderaListaObservaciones,
} from "../../redux/actions/observationAction.js";

import Table from "react-bootstrap/Table";

//import ModalCreateUser from "../modals/ModalCreateUser";
import Navigation from "./Navigation";

const ObservationsOperation = () => {
  const dispatch = useDispatch();

  const _listaObservaciones = useSelector(
    (state) => state.observation.listaObservaciones
  );
  const _banderaListaObservaciones = useSelector(
    (state) => state.observation.banderaListaObservaciones
  );

  useEffect(() => {
    console.log("SE EJECUTA 1 VEZ, ASI NO CUMPLA CON EL INPUT");
    dispatch(getListaObservaciones());
    if (_banderaListaObservaciones) {
      dispatch(modifBanderaListaObservaciones(false));
    }
  }, [_banderaListaObservaciones === true]);

  console.log("LISTA DE observaciones(scope general): ", _listaObservaciones);

  return (
    <div>
      <Navigation></Navigation>
      <main className="main-user-vehicle">
        <div className="contenedor-add">
          <div className="header-contenedor-add">
            <div>
              <h4>Observaciones registradas</h4>
            </div>
          </div>
          <Table bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Descripción</th>
                <th>VIM</th>
                <th>Estado</th>
                <th>Registrado por</th>
                <th>Actualizado por</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {_listaObservaciones == null ? (
                <tr>
                  <td>cargando...</td>
                  <td>cargando...</td>
                  <td>cargando...</td>
                  <td>cargando...</td>
                  <td>cargando...</td>
                  <td>cargando...</td>
                  <td>cargando...</td>
                </tr>
              ) : (
                _listaObservaciones.map((el, key) => (
                  <tr key={key}>
                    <td>{el.id}</td>
                    <td>{el.detalle}</td>
                    <td>{el.idvehiculo.vim}</td>
                    <td>{el.idestado.nombre}</td>
                    <td>{el.creado_por.nombre_usuario}</td>
                    <td>{el.resueto_por}</td>
                    <td>| | | |</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default ObservationsOperation;

/*

<section>
            <div className="contenedor">
              <form className="login" onSubmit={handleSubmit}>
                <div className="header-login">
                  <h3>Creación</h3>
                </div>

                <div className="body-login">
                  <div className="label-input">
                    <label htmlFor="">Nombre de usuario: </label>
                    <input
                      type="text"
                      name="nombre_usuario"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="label-input">
                    <label htmlFor="">Contraseña: </label>
                    <input
                      type="text"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="botones">
                    <button type="submit" className="btn-login">
                      Guardar
                    </button>
                    <button
                      type="button"
                      onClick={() => fueCerrado()}
                      className="btn-login"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>

*/
