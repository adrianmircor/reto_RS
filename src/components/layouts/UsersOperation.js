import React, { useState, useEffect } from "react";

//REDUX
import { useSelector, useDispatch } from "react-redux";

import {
  getListaUsuarios,
  modifBanderaListaUsuarios,
} from "../../redux/actions/userAction.js";

import Table from "react-bootstrap/Table";

import ModalCreateUser from "../modals/ModalCreateUser";
import Navigation from "./Navigation";

const UsersOperation = () => {
  const dispatch = useDispatch();

  const _listaUsuarios = useSelector((state) => state.user.listaUsuarios);
  const _banderaListaUsuarios = useSelector(
    (state) => state.user.banderaListaUsuarios
  );

  useEffect(() => {
    dispatch(getListaUsuarios());
    console.log("Trae API USUARIOS");
    if (_banderaListaUsuarios) {
      dispatch(modifBanderaListaUsuarios(false));
    } 
  }, [_banderaListaUsuarios === true ]);

  const [modalShow, setModalShow] = useState(false);

  const addUser = () => {
    setModalShow(true);
  };

  console.log("LISTA DE USUARIOS(scope general): ", _listaUsuarios);

  return (
    <div>
      <Navigation></Navigation>
      <main className="main-user-vehicle">
        <div className="contenedor-add">
          <div className="header-contenedor-add">
            <div>
              <h4>Usuarios registrados</h4>
            </div>
            <div className="div-btn-agregar">
              <button onClick={() => addUser()} className="btn-agregar">
                +  Nuevo
              </button>
            </div>
          </div>
          <Table bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Empleado</th>
              </tr>
            </thead>
            <tbody>
              {_listaUsuarios == null ? (
                <tr>
                  <td>cargando...</td>
                  <td>cargando...</td>
                </tr>
              ) : (
                _listaUsuarios.map((el, key) => (
                  <tr key={key}>
                    <td>{el.id}</td>
                    <td>{el.nombre_usuario}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </main>

      <ModalCreateUser show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default UsersOperation;

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
