import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  asignarUsuario,
  crearUsuario,
} from "../../redux/actions/userAction.js";

import { Modal, Button } from "react-bootstrap";

const ModalCreateUser = (props) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    nombre_usuario: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(crearUsuario(user));
  };

  return (
    <Modal
      {...props}
      aria-labelledby="example-custom-modal-styling-title"
      centered
      dialogClassName="mi-modal"
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <form className="form-modal-crearusuario" onSubmit={handleSubmit}>
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
              <input type="text" name="password" onChange={handleChange} />
            </div>

            <div className="botones">
              <button type="submit" className="btn-login">
                Guardar
              </button>
              <button
                type="button"
                onClick={props.onHide}
                className="btn-login"
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default ModalCreateUser;
