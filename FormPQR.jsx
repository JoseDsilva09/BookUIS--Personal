import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/FormPQR.css'; // Ruta para el archivo de estilos
import logo from '../assets/logo1.png'; // Asegúrate de tener el logo en esta ruta

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Formulario enviado correctamente');
  };

  return (
    <div className="pqr-form-container">
      <div className="pqr-form-wrapper">
        <div className="pqr-form-content">
          <div className="pqr-title-container">
            <h2 className="pqr-form-title">Enviar PQR</h2>
            <h5 className="pqr-form-subtitle">Ayudame a mejorar tu experiencia con nosotros</h5>
          </div>
          <form className="pqr-custom-form" onSubmit={handleSubmit(onSubmit)}>
            {/* Campos del formulario */}
            <div className="pqr-form-group">
              <label htmlFor="name" className="pqr-form-label1">Nombre Completo:</label>
              <input
                type="text"
                id="name"
                className="pqr-form-input"
                placeholder="Nombre del usuario"
                {...register('name', { required: true, minLength: 2 })}
              />
              {errors.name && <span className="pqr-error">El nombre es obligatorio y debe tener al menos 2 caracteres.</span>}
            </div>

            <div className="pqr-form-group">
              <label htmlFor="email" className="pqr-form-label">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                className="pqr-form-input"
                placeholder="****@gmail.com"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              />
              {errors.email && <span className="pqr-error">Debes ingresar un email válido.</span>}
            </div>

            <div className="pqr-form-group">
              <label htmlFor="message" className="pqr-form-label">Peticiones, Quejas y Reclamaciones:</label>
              <textarea
                id="message"
                rows="4"
                className="pqr-form-textarea"
                placeholder="Escribe tu mensaje"
                {...register('message', { required: true, minLength: 10 })}
              ></textarea>
              {errors.message && <span className="pqr-error">El mensaje debe tener al menos 10 caracteres.</span>}
            </div>

            <button className="pqr-form-button" type="submit">Enviar</button>
          </form>
        </div>
        <div className="pqr-form-logo">
          <img src={logo} alt="Logo" className="pqr-logo-image" />
        </div>
      </div>
    </div>
  );
};

export default Form;

