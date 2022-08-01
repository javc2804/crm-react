import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Formulario from "../components/Formulario";

const EditarCliente = () => {
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
      <>
        <h1 className="font-black text-4xl text-blue-900">Editar cliente</h1>
        <p className="mt-3">
          utiliza este formulario para editar datos de cliente
        </p>
        {cliente?.nombre ? (
          <Formulario cliente={cliente} cargando={cargando} />
        ): <p>Cliente ID no válido</p>}
      </>
    </div>
  );
};

export default EditarCliente;
