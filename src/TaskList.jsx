import { useState, useEffect } from 'react';
import { TaskForm } from './Components/TaskForm';
import { TaskItem } from './Components/TaskItem';
import { TaskHeader } from './Components/TaskHeader';
import { TaskFooter } from './Components/TaskFooter';

export const TaskList = () => {
  const defaultTareas = ["Estudiar React JS", "Aprobar Desarrollo Web con React JS", "Agradecerle al profe Lucas Zanutel"];
  const storedTareas = JSON.parse(localStorage.getItem('tareas')) || defaultTareas;
  const [tareas, setTareas] = useState(storedTareas);
  

  const handleDelete = (index) => {
    setTareas((prevTareas) => prevTareas.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  return (
    <>
      <TaskHeader />

      <TaskForm setTareas={setTareas} />
      <div className="seccion-tareas">
        {tareas.map((tarea, index) => (
          <TaskItem handleDelete={handleDelete} key={index} index={index} tarea={tarea} />
        ))}
      </div>

      <TaskFooter />
    </>
  );
};
