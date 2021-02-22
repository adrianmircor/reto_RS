import React from "react";
import Navigation from "./Navigation";

const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <main className="reportes">
        <div className="contenedor-cuadro">
          <div className="cuadro">
            <div>
              <h3 className="titulo-diagrama">Observaciones por empleado</h3>
            </div>
            <div className="diagrama">
              <div>//Aqui va la tabla</div>
            </div>
          </div>
        </div>

        <div className="contenedor-cuadro">
          <div className="cuadro">
            <div>
              <h3 className="titulo-diagrama">Observaciones totales</h3>
            </div>
            <div className="diagrama">
              <div>//Aqui va el reporte</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
