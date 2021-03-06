import React, { useState } from "react";

import { useSelector } from "react-redux";

import { Modal } from "react-bootstrap";

import axios from "axios";

const ModalAddObservation = (props) => {
  const { props_idvehiculo } = props;

  const _usuario = useSelector((state) => state.user.usuario);

  //console.log("USUARIO TRAIDO DE STORE ES: ", _usuario);
  //console.log("VEHICULO TRAIDO DE VehiclesOperation ES: ", props_idvehiculo);

  const [observacion, setObservacion] = useState({
    detalle: "",
    idvehiculo: "",
    creado_por: "",
    idestado: "1",
  });

  const handleChange = (e) => {
    setObservacion({
      ...observacion,
      [e.target.name]: e.target.value,
      creado_por: _usuario.id , //¡GUIARSE DEL API!
      idvehiculo: props_idvehiculo,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Crear observacion
    axios
      .post("http://localhost:3000/observaciones/create", observacion)
      .then((res) => {
        console.log("Post de observacion: ", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //console.log("SE AGREGARÍA ESTO A OBSERVACIÓN: ", observacion);

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
            <h3>Agregar observación</h3>
          </div>

          <div className="body-login">
            <div className="label-input">
              <label htmlFor="">Observación: </label>
              <input type="text" name="detalle" onChange={handleChange} />
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

export default ModalAddObservation;
