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
import ModalEditObservation from '../modals/ModalEditObservation'

import axios from "axios";
import ModalDeleteObservation from "../modals/ModalDeleteObservation.js";

const ObservationsOperation = () => {
  const dispatch = useDispatch();

  const _listaObservaciones = useSelector(
    (state) => state.observation.listaObservaciones
  );

  useEffect(() => {
    //console.log("SE EJECUTA 1 VEZ, ASI NO CUMPLA CON EL INPUT");
    dispatch(getListaObservaciones());
    console.log("Trae API OBSERVACIONES");
    /*before: 
    if (_banderaListaObservaciones) {
      dispatch(modifBanderaListaObservaciones(false));
    } */
  }, [/*before: _banderaListaObservaciones === true */]);

  const [modalShowEdit, setModalShowEdit] = useState(false);
  const [modalShowDelete, setModalShowDelete] = useState(false);
  const [idObservacion, setIdObservacion] = useState(''); //¡!


 // console.log("LISTA DE observaciones(scope general): ", _listaObservaciones);

  const aceptarObs = (param_idObservacion) => {
    console.log("Acepta", idObservacion);

    //11: aceptada
    //21: rechazada
    let obsActualizada = {
        id       : param_idObservacion,
        idestado : '11'
    }

    axios
      .put("http://localhost:3000/observaciones/state", obsActualizada)
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

  const rechazarObs = (param_idObservacion) => {
    console.log("Rechaza");

    let obsActualizada = {
        id       : param_idObservacion,
        idestado : '21'
    }

    axios
      .put("http://localhost:3000/observaciones/state", obsActualizada)
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

  };

  const editarObs = (param_idObservacion) => {
    console.log("Edita");
    setModalShowEdit(true);
    setIdObservacion(param_idObservacion);

    
  };
  const eliminarObs = (param_idObservacion) => {
    console.log("Elimina");
    setModalShowDelete(true);
    setIdObservacion(param_idObservacion);
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
                    <td>{el.resuelto_por == null ? null : el.resuelto_por.nombre_usuario}</td>

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
                          <Dropdown.Item onClick={() => editarObs(el.id)}>
                            Editar
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => eliminarObs(el.id)}>
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

      <ModalEditObservation
                    show={modalShowEdit}
                    onHide={() => setModalShowEdit(false)}
                    props_idobservacion={idObservacion}></ModalEditObservation>            
      
      <ModalDeleteObservation
                    show={modalShowDelete}
                    onHide={() => setModalShowDelete(false)}
                    props_idobservacion={idObservacion}></ModalDeleteObservation>
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
