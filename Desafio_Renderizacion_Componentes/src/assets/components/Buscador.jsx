import React, { useState } from "react";

function Buscador({ colaboradores, setBuscarColaboradores }) {
  const [buscar, setBuscar] = useState("");

  const handleSearch = (e) => {
    const termino = e.target.value.toLowerCase();
    setBuscar(termino);

    const buscador = colaboradores.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(termino) ||
        colaborador.correo.toLowerCase().includes(termino) ||
        colaborador.edad.toString().includes(termino) ||
        colaborador.cargo.toLowerCase().includes(termino) ||
        colaborador.telefono.includes(termino)
    );
    setBuscarColaboradores(buscador);
  };

  return (
    <div>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar Colaborador"
        value={buscar}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Buscador;
