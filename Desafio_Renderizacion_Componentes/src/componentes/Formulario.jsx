import React, { useState } from "react";
import "../assets/css/styles.css";

function Formulario({ agregandoColaborador, setAlertMessage, setAlertType }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const validarCorreo = (correo) => {
    const caracteres = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return caracteres.test(String(correo).toLowerCase());
  };

  const limpiarInputs = () => {
    setNombre("");
    setCorreo("");
    setEdad("");
    setCargo("");
    setTelefono("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      correo === "" ||
      edad === "" ||
      cargo === "" ||
      telefono === ""
    ) {
      setAlertMessage("Todos los campos son obligatorios");
      setAlertType("danger");
      return;
    }

    if (!validarCorreo(correo)) {
      setAlertMessage("El formato del correo es incorrecto");
      setAlertType("danger");
      return;
    }

    const nuevoColaborador = {
      id: Date.now(),
      nombre,
      correo,
      edad,
      cargo,
      telefono,
    };

    agregandoColaborador(nuevoColaborador);
    setAlertMessage("¡Colaborador agregado éxitosamente!");
    setAlertType("success");

    limpiarInputs();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form-control mb-3"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del colaborador"
          />
        </div>
        <div>
          <input
            className="form-control mb-3"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Correo del colaborador"
          />
        </div>
        <div>
          <input
            className="form-control mb-3"
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            placeholder="Edad del colaborador"
          />
        </div>
        <div>
          <input
            className="form-control mb-3"
            type="text"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            placeholder="Cargo del colaborador"
          />
        </div>
        <div>
          <input
            className="form-control mb-3"
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Teléfono del colaborador"
          />
        </div>
        <button type="submit" className="boton mb-4 mt-4 col-12">Agregar</button>
      </form>
    </div>
  );
}

export default Formulario;
