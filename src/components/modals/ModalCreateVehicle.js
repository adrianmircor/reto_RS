import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  crearVehiculo
} from "../../redux/actions/vehicleAction.js";

import { Modal, Button } from "react-bootstrap";

const ModalCreateVehicle = (props) => {
  const dispatch = useDispatch();

  const [vehicle, setVehicle] = useState({
    vim: "",
  });

  const handleChange = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(crearVehiculo(vehicle));
  };

  return (
    <Modal
      {...props}
      aria-labelledby="example-custom-modal-styling-title"
      centered
      dialogClassName="mi-modal"
    >
      <Modal.Body>
        <form className="form-modal-crearusuario" onSubmit={handleSubmit}>
          <div className="header-login">
            <h3>Creación</h3>
          </div>

          <div className="body-login">
            <div className="label-input">
              <label htmlFor="">VIM: </label>
              <input
                type="text"
                name="vim"
                onChange={handleChange}
              />
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
    </Modal>
  );
};

export default ModalCreateVehicle;
