import './Formulario.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
let apiUsuarios = 'http://localhost:5174/usuarios'



const Formulario = () => {
  const [getNombre, setNombre] = useState("")
  const [getApellido, setApellido] = useState("")
  const [getEdad, setEdad] = useState("")
  const [getCorreo, setCorreo] = useState("")
  const [getNota, setNota] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(apiUsuarios, {
        getNombre, getApellido, getEdad, getCorreo, getNota
      });
      console.log("Evento Registrado")
      console.log(res.data);
      setNombre("");
      setApellido("");
      setEdad("");
      setCorreo("");
      setNota("");
    } catch (error) {
      console.log("Error Evento", error);
    }
  };
  let redireccion = useNavigate();
  function iniciarSesion() {
    redireccion("/listas")
      
  }

  return (
    
    <div className="Formulario-page" onSubmit={handleSubmit}>
      <div className= "Titulo">
        <h1>FORMULARIO</h1>
         <h3>Por favor ingresa los datos</h3>
      </div>
      <div className="form">
         <form className="Formulario-form">
          <p>Digita tus nombres</p>
          <input value={getNombre} onChange={(e) => { setNombre(e.target.value) }}type="text" placeholder="Nombre" />
          <p>Digita tus apellidos</p>
          <input value={getApellido} onChange={(e) => { setApellido(e.target.value) }} type="text" placeholder="Apellido" />
          <p>Digita tu edad</p>
          <input value={getEdad} onChange={(e) => { setEdad(e.target.value) }}type="text" placeholder="Edad" />
          <p>Digita tu correo electronico</p>
          <input value={getCorreo} onChange={(e) => { setCorreo(e.target.value) }}type="text" placeholder="Correo electronico" />
          <p>Digita tu nota</p>
          <input value={getNota} onChange={(e) => { setNota(e.target.value) }} type="text" placeholder="Nota del curso" />
          
          {/* <button onClick={iniciarSesion} type="button">Enviar</button> */}
          <button className="button-register" type="submit" onClick={iniciarSesion}>
          Enviar
        </button>
        {/* <button className="button-show" onClick={iniciarSesion}>
          Mostrar Eventos
        </button> */}
        
          </form>
      </div>
    </div>
  );
};

export default Formulario;

