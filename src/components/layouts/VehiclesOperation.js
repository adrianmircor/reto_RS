import React, { useState, useEffect } from "react";

//REDUX
import { useSelector, useDispatch } from "react-redux";

import {
  getListaVehiculos,
  modifBanderaListaVehiculos
} from "../../redux/actions/vehicleAction.js";

import Table from "react-bootstrap/Table";

import Navigation from './Navigation';
import ModalCreateVehicle from '../modals/ModalCreateVehicle';
import ModalAddObservation from '../modals/ModalAddObservation';

const VehiclesOperation = () => {
  const dispatch = useDispatch();

  const _listaVehiculos = useSelector((state) => state.vehicle.listaVehiculos);
  const _banderaListaVehiculos = useSelector((state) => state.vehicle.banderaListaVehiculos);


  useEffect(() => {
    dispatch(getListaVehiculos());
    if (_banderaListaVehiculos) {
      dispatch(modifBanderaListaVehiculos(false));
    }
  }, [_banderaListaVehiculos === true]);

  const [modalShow, setModalShow] = useState(false);
  const [modalShowObservation, setModalShowObservation] = useState(false);
  const [idVehiculo, seteIdVehiculo] = useState({
    id: ''
  });

  const addVehicle = () => {
    setModalShow(true);
  };

  const agregarObservacion = (e, id_vehiculo) => {
    e.preventDefault();
    setModalShowObservation(true);
    console.log("Id Vehiculo: ",id_vehiculo);
    seteIdVehiculo({
      ...idVehiculo,
      id: id_vehiculo
    });
    console.log("objeto idVehiculo: ",id_vehiculo)
    //ASIGNAR_VEHICULO - - > 
  }

  //console.log("LISTA DE USUARIOS(scope general): ", _listaUsuarios);

  return (
    <div>
      <Navigation></Navigation>
      <main className="main-user-vehicle">
        <div className="contenedor-add">
          <div className="header-contenedor-add">
            <div>
              <h4>Vehiculos registrados</h4>
            </div>
            <div className="div-btn-agregar">
              <button onClick={() => addVehicle()} className="btn-agregar">
                +  Nuevo
              </button>
            </div>
          </div>
          <Table bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>VIM</th>
                <th>Observaciones</th>
              </tr>
            </thead>
            <tbody>
              {_listaVehiculos == null ? (
                <tr>
                  <td>cargando...</td>
                  <td>cargando...</td>
                  <td>cargando...</td>
                </tr>
              ) : (
                _listaVehiculos.map((el, key) => (
                  <tr key ={key}>
                    <td>{el.id}</td>
                    <td>{el.vim}</td>
                    <td>
                      <button
                        onClick={(e) => agregarObservacion(e, el.id)}>
                          + Agregar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </main>

      <ModalAddObservation
        show={modalShowObservation}
        onHide={() => setModalShowObservation(false)}
        props_idvehiculo={idVehiculo.id}></ModalAddObservation>

      <ModalCreateVehicle 
        show={modalShow} 
        onHide={() => setModalShow(false)} />
    </div>
  );
};

export default VehiclesOperation;
