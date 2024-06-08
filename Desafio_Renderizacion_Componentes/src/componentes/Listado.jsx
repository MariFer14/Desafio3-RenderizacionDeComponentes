import React from "react";

function Listado({ colaboradores, eliminarColaborador }) {
  return (
    <div>
      {colaboradores.length > 0 ? (
        <table className="table table-striped table-bordered table-responsive">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Teléfono</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {colaboradores.map((colaborador) => (
              <tr key={colaborador.id}>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
                <td>
                  <button
                    onClick={() => eliminarColaborador(colaborador.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
}

export default Listado;
