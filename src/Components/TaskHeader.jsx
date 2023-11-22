import logoArgProg from "../assets/argprog.png";

export const TaskHeader = () => {
  return (
    <header className="titulo">
      <a href="/">
        <img
          className="logo-argprog"
          src={logoArgProg}
          alt="Logo UTN Argentina Programa"
        />
      </a>
      <h1>Trabajo Integrador Final UTN 4.0</h1>
      <h2>Lista de Tareas</h2>
    </header>
  );
};
