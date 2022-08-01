import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
const VerCliente = () => {
  const { id } = useParams();

  const [cliente, setCliente] = useState({});
  const [cargando, Setcargando] = useState(false);
  const { nombre, empresa, email, telefono, nota, idCliente } = cliente;
  useEffect(() => {
    Setcargando(!cargando);
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        Setcargando(false);
      }, 1500);
    };
    obtenerClienteAPI();
  }, []);
  return (
    <div>
      {cargando ? (
        <Spinner />
      ) : Object.keys(cliente).length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        <>
          <h1 className="font-black text-4xl text-blue-900">
            Ver cliente: {nombre}{" "}
          </h1>
          <p className="mt-3">Información del cliente</p>
          <p className="text-4xl text-gray-600 mt-10">
            <span className="text-gray-800 uppercase font-bold">Nombre: </span>
            {nombre}
          </p>
          {empresa && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">
                Empresa:{" "}
              </span>
              {empresa}
            </p>
          )}

          {email && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">Email: </span>
              {email}
            </p>
          )}

          {telefono && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">
                Teléfono:{" "}
              </span>
              {telefono}
            </p>
          )}

          {nota && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">Nota: </span>
              {nota}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default VerCliente;
