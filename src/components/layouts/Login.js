import React, { useState } from "react";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { verificarUsuario } from "../../redux/actions/userAction.js";

import { Link, Redirect, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const _usuario = useSelector((state) => state.user.usuario);

  const [user, setUser] = useState({
    usuario: "",
    contrasena: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verificarUsuario(user));
  };

  if (_usuario !== null) {
    return <Redirect to="/main" />;
  }

  return (
    <div>
      <section>
        <div className="contenedor">
          <div className="bienvenido">
            <h2>¡Bienvenido!</h2>
          </div>

          <form className="login" onSubmit={handleSubmit}>
            <div className="header-login">
              <h3>Iniciar Sesión</h3>
            </div>

            <div className="body-login">
              <div className="label-input">
                <label htmlFor="">Nombre de usuario: </label>
                <input type="text" name="usuario" onChange={handleChange} />
              </div>

              <div className="label-input">
                <label htmlFor="">Contraseña: </label>
                <input type="text" name="contrasena" onChange={handleChange} />
              </div>

              <div className="botones">
                <Link to="/signup">
                  <button type="button" className="btn-login">
                    Registrarse
                  </button>
                </Link>
                <button type="submit" className="btn-login">
                  Iniciar sesión
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
