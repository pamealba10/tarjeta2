// src/Tarjeta.jsx
function Tarjeta() {
  // Información estática de la tarjeta
  const nombre = "Pamela Alba";
  const profesion = "Desarrolladora Web";
  const mensaje = "¡Bienvenido a mi tarjeta de presentación!";
  const habilidades = ["React", "JavaScript", "CSS"];

  // Retornamos el JSX
  return (
    <article className="tarjeta tarjeta--animated">
      <div className="tarjeta__badge">Disponible para proyectos</div>
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>

      <ul className="tarjeta__skills" aria-label="Habilidades destacadas">
        {habilidades.map((habilidad) => (
          <li key={habilidad}>{habilidad}</li>
        ))}
      </ul>

      <button className="tarjeta__button" type="button">
        Contáctame
      </button>
    </article>
  );
}

export default Tarjeta;