import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/Form.css'; // Ruta para el archivo de estilos

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Formulario enviado correctamente');
  };

  return (
    <div className="form-container">
      <h2>Formulario Responsivo</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Campo Nombre */}
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            placeholder="Ingresa tu nombre"
            {...register('name', { required: true, minLength: 2 })}
          />
          {errors.name && <span className="error">El nombre es obligatorio y debe tener al menos 2 caracteres.</span>}
        </div>

        {/* Campo Email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span className="error">Debes ingresar un email válido.</span>}
        </div>

        {/* Campo Teléfono */}
        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            placeholder="Ingresa tu teléfono"
            {...register('phone', { required: true, pattern: /^[0-9]{10}$/ })}
          />
          {errors.phone && <span className="error">El teléfono debe tener 10 dígitos.</span>}
        </div>

        {/* Campo Mensaje */}
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Escribe tu mensaje"
            {...register('message', { required: true, minLength: 10 })}
          ></textarea>
          {errors.message && <span className="error">El mensaje debe tener al menos 10 caracteres.</span>}
        </div>

        {/* Botón de envío */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
