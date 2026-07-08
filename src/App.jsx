// src/App.jsx
import './App.css';
import Tarjeta from './Tarjeta';

function App() {
  return (
    <div className="app-shell">
      <div className="app-shell__glow app-shell__glow--one" aria-hidden="true" />
      <div className="app-shell__glow app-shell__glow--two" aria-hidden="true" />

      <main className="app-content">
        <h1>Tarjeta de Presentación</h1>
        <p className="app-content__subtitle">
          Un ejemplo con animación suave, hover y pequeños detalles visuales.
        </p>

        <img
          src="./iconouser.jpg"
          alt="Avatar"
          className="app-content__avatar"
        />

        <Tarjeta />
      </main>
    </div>
  );
}

export default App;