import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
    getListaObservaciones
} from '../../redux/actions/observationAction';

import { Modal } from "react-bootstrap";

import axios from "axios";

const ModalEditObservation = (props) => {
  const { props_idobservacion } = props;

  const dispatch = useDispatch();
  const _usuario = useSelector((state) => state.user.usuario);

  console.log("USUARIO TRAIDO DE STORE ES: ", _usuario);
  console.log("id OBSERVACION traido por props ES: ", props_idobservacion);

  const [observacionEditada, setObservacionEditada] = useState({
    id: "",
    detalle: "",
    resuelto_por: "",
  });

  const handleChange = (e) => {
    setObservacionEditada({
      ...observacionEditada,
      id: props_idobservacion,
      [e.target.name]: e.target.value,
      resuelto_por: _usuario.id,  //¡GUIARSE DEL API!
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Editar observacion
    axios
      .put("https://test-sonr.herokuapp.com/observaciones/observation", observacionEditada)
      .then((res) => {
        console.log("Se editó la observacion: ", res);
        dispatch(getListaObservaciones());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("SE MODIFICARIA LA OBSERVACIÓN: ", observacionEditada);

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
            <h3>Editar</h3>
          </div>

          <div className="body-login">
            <div className="label-input">
              <label htmlFor="">Observación {props_idobservacion}: </label>
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

export default ModalEditObservation;
