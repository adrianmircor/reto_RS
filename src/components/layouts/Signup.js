import React, { useState, useEffect } from "react";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { asignarUsuario, crearUsuario } from "../../redux/actions/userAction.js";

import { Link } from "react-router-dom";


const Signup = () => {
  const dispatch = useDispatch();

  //Campos deben ir acorde a 'name' del form
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
    <div>
      <section>
        <div className="contenedor">
          <div className="bienvenido">
            <h2>¡Bienvenido!</h2>
          </div>

          <form className="login" onSubmit={handleSubmit}>
            <div className="header-login">
              <h3>Registrarse</h3>
            </div>

            <div className="body-login">
              <div className="label-input">
                <label htmlFor="">Nombre de usuario: </label>
                <input type="text" name="nombre_usuario" onChange={handleChange} />
              </div>

              <div className="label-input">
                <label htmlFor="">Contraseña: </label>
                <input type="text" name="password" onChange={handleChange} />
              </div>

              <div className="botones">
                <Link to="/">
                  <button type="button" className="btn-login">
                    Iniciar sesión
                  </button>
                </Link>
                <button type="submit" className="btn-login">
                  Registrarse
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;
