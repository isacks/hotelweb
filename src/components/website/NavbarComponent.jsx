import React from 'react';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

function NavbarComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Princess Hotel Panamá</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mb-2 mx-auto mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Información</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Habitaciones</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contacto</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Vacutur  <HealthAndSafetyIcon /></a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="https://www.tourismpanama.com/vaccine/">Programa Vacutur</a></li>
                  <li><a className="dropdown-item" href="https://api.whatsapp.com/send?phone=50769756086&text=%C2%A1Hola%2C%20Princess%20Hotel%20Panam%C3%A1!%20Estoy%20interesado%20en%20hacer%20una%20reserva%20para%20el%20programa%20Vacutur.">Reservar</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarComponent;
