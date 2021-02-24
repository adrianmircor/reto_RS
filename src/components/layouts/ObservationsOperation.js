import React, { useState, useEffect } from "react";

//REDUX
import { useSelector, useDispatch } from "react-redux";

import {
  getListaObservaciones
} from "../../redux/actions/observationAction.js";

import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";

//import ModalCreateUser from "../modals/ModalCreateUser";
import Navigation from "./Navigation";

import axios from "axios";

const ObservationsOperation = () => {
  const dispatch = useDispatch();

  const _listaObservaciones = useSelector(
    (state) => state.observation.listaObservaciones
  );

  useEffect(() => {
    console.log("SE EJECUTA 1 VEZ, ASI NO CUMPLA CON EL INPUT");
    dispatch(getListaObservaciones());
    /*before: 
    if (_banderaListaObservaciones) {
      dispatch(modifBanderaListaObservaciones(false));
    } */
  }, [/*before: _banderaListaObservaciones === true */]);

  console.log("LISTA DE observaciones(scope general): ", _listaObservaciones);

  const aceptarObs = (idObservacion) => {
    console.log("Acepta", idObservacion);

    //11: aceptada
    //21: rechazada
    let obsActualizada = {
        id       : `${idObservacion}`,
        idestado : '11'
    }

    axios
      .put("https://test-sonr.herokuapp.com/observaciones/state", obsActualizada)
      .then((res) => {
        console.log("PUT: ", res);
        /*Modifica el state de la lista, y como se hace uso del selector
        se renderiza este componente */
        dispatch(getListaObservaciones());
      })
      .catch((error) => {
        console.log(error);
      });

  };

  const rechazarObs = (idObservacion) => {
    console.log("Rechaza");

    let obsActualizada = {
        id       : `${idObservacion}`,
        idestado : '21'
    }

    axios
      .put("https://test-sonr.herokuapp.com/observaciones/state", obsActualizada)
      .then((res) => {
        console.log("PUT: ", res);
        /*before:
        //Cambiar bandera a true
        dispatch(modifBanderaListaObservaciones(true));
        */

        /*Modifica el state de la lista, y como se hace uso del selector
        se renderiza este componente */
        dispatch(getListaObservaciones());
      })
      .catch((error) => {
        console.log(error);
      });

    //Cambiar bandera a true
  };

  const editarObs = () => {
    console.log("Edita");
  };
  const eliminarObs = () => {
    console.log("Elimina");
  };

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
                <th>Registrada por</th>
                <th>Actualizada por</th>
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

                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                          <i className="fas fa-list-ul"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => aceptarObs(el.id)}>
                            Aceptar
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => rechazarObs(el.id)}>
                            Rechazar
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => editarObs()}>
                            Editar
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => eliminarObs()}>
                            Eliminar
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
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
