import axios from 'axios'
let apiUsuarios = 'http://localhost:5175/usuarios'
import React, { useEffect, useState } from 'react'
import './Listas.css'
import { useNavigate } from "react-router-dom";

const Listas = () => {
  const [usuarios, setUsuarios] = useState([]);
  let redireccion = useNavigate();

  const obtenerUsuarios = async () => {
    const resApi = await axios.get(apiUsuarios);
    console.log(resApi.data)
    setUsuarios(resApi);
  };

  // useEffect(() => {
    obtenerUsuarios();
  // }, []);


  return (
    <div className="Listas-page">
      <div className="Encabezado">
        <h1>ESTUDIANTES</h1>
        <h3>Lista de Ingresados</h3>
        {usuarios.map((item) => {
          <div key={item.id} className="usuario">
            <p> <b>Nombres del estudiante</b>
              {item.getNombre}</p>
            <p> <b>Apellidos del estudiante</b>
              {item.getApellido}</p>
              <p> <b>Edad</b>
              {item.getEdad}</p>
              <p> <b>Correo Electronico</b>
              {item.getCorreo}</p>
              <p> <b>Nota final</b>
              {item.getNota}</p>
          </div>
        })}
      </div>
    </div>

  );
};

export default Listas