import React from 'react';
import vacuntur from '../../assets/website/img/vacuntur.jpg';
function VacuturComponent() {
    return (
        <div className="card text-white mt-5">
            <img src={vacuntur} className="card-img" alt="..." />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="card-title"><b>TARIFA VANCUNTUR PANAMÁ</b></div>
                <div className="card-text mb-1">Reservas desde 65.00 + ITBMS</div>
                <a className="btn btn-warning shadow-sm" href="https://api.whatsapp.com/send?phone=50769756086&text=%C2%A1Hola%2C%20Princess%20Hotel%20Panam%C3%A1!%20Estoy%20interesado%20en%20hacer%20una%20reserva%20para%20el%20programa%20Vacuntur.">Reservar</a>
            </div>
        </div>
    )
}

export default VacuturComponent