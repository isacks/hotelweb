import React from 'react';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

function NavbarComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Princess Hotel Panamá</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mx-auto mb-2 mb-md-0">
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
              <li className="nav-item d-flex">
                <a className="nav-link" href="https://www.tourismpanama.com/vaccine/">Vacutur  <HealthAndSafetyIcon /></a>
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarComponent;