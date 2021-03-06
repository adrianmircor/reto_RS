import React from "react";

import { useDispatch } from "react-redux";

import { getListaObservaciones } from "../../redux/actions/observationAction";

import { Modal } from "react-bootstrap";

import axios from "axios";

const ModalDeleteObservation = (props) => {
  const { props_idobservacion } = props;

  const dispatch = useDispatch();

  //console.log("id OBSERVACION traido por props ES: ", props_idobservacion);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Eliminar observacion
    axios
      .delete("http://localhost:3000/observaciones/delete", {
        data: { id: props_idobservacion },
      })
      .then((res) => {
        console.log("Delete de observacion: ", res);
        dispatch(getListaObservaciones());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //console.log("SE ELIMINARÍA LA OBSERVACIÓN: ", props_idobservacion);

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
            <h3>Eliminar</h3>
          </div>

          <div className="body-login">
            <div className="">
              <p>Observación {props_idobservacion} </p>
              <h5>¿Estás seguro que deseas eliminar esta observación?</h5>
            </div>

            <div className="botones">
              <button type="submit" className="btn-login">
                Confirmar
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

export default ModalDeleteObservation;
