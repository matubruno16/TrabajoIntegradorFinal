/* eslint-disable react/prop-types */
import {  useState } from "react";
import iconDelete from "../assets/icons8-eliminar-250.png";
import iconCompleted from "../assets/icons8-marca-de-verificación-250.png";

export const TaskItem = ({ tarea, index, handleDelete }) => {
  const storedCompletadas =
    JSON.parse(localStorage.getItem("completadas")) || {};

  const [completada, setCompletada] = useState(!!storedCompletadas[index]);

  const handleCompletada = () => {
    const updatedCompletadas = { ...storedCompletadas, [index]: !completada };
    setCompletada(!completada);
    localStorage.setItem("completadas", JSON.stringify(updatedCompletadas));
  };


  return (
    <div className={`lista-tareas ${completada ? "completada" : ""}`}>
      <p className={`tarea ${completada ? "completada-texto" : ""}`}>{tarea}</p>
      <div className="iconos">
        <img
          onClick={handleCompletada}
          className="icono-task"
          src={iconCompleted}
          alt="icono tarea completada"
        />
        <img
          onClick={() => handleDelete(index)}
          className="icono-task"
          src={iconDelete}
          alt="icono borrar tarea"
        />
      </div>
    </div>
  );
};
