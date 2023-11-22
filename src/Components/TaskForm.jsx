/* eslint-disable react/prop-types */
import { useState } from 'react';

export const TaskForm = ({ setTareas }) => {
  const [error, setError] = useState('');

  const agregarTarea = (e) => {
    e.preventDefault();
    const nuevaTarea = e.target.task.value.trim();

    if (nuevaTarea !== '') {
      setTareas((tareas) => [...tareas, nuevaTarea]);
      setError(''); 
    } else {
      setError('Debes ingresar algún título para la tarea');
    }
  };

  return (
    <>
      <form className="formulario" onSubmit={agregarTarea}>
        <input type="text" name="task" id="task" placeholder="Crea una nueva tarea" />
        <button type="submit">Crear</button>
      </form>
      {error && <p className="error-mensaje">{error}</p>}
    </>
  );
};
