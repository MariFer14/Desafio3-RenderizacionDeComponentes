import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Listado from "./componentes/Listado";
import Formulario from "./componentes/Formulario";
import {BaseColaboradores} from "../src/assets/components/utils/BaseColaboradores"
import Alert from "../src/assets/components/Alert";
import Buscador from "../src/assets/components/Buscador";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [buscarColaboradores, setBuscarColaboradores] =
    useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    setBuscarColaboradores([...buscarColaboradores, nuevoColaborador]);
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );

    setColaboradores(nuevosColaboradores);
    setBuscarColaboradores(nuevosColaboradores);
  };

  return (
    <>
      <div className="d-flex container">
        <div>
          <h2 className="text-start mb-5">Lista de Colaboradores</h2>
          <Buscador
            setBuscarColaboradores={setBuscarColaboradores}
            colaboradores={colaboradores}
          />
          <div className="mt-4">
            <Listado
              colaboradores={
                buscarColaboradores.length > 0
                  ? buscarColaboradores
                  : colaboradores
              }
              eliminarColaborador={eliminarColaborador}
            />
          </div>
        </div>
        <div className="formulario">
          <h2 className="mb-4">Agregar Colaborador</h2>
          <Formulario
            agregandoColaborador={agregarColaborador}
            setAlertMessage={setAlertMessage}
            setAlertType={setAlertType}
          />
          {alertMessage && <Alert message={alertMessage} type={alertType} />}
        </div>
      </div>
    </>
  );
}

export default App;
