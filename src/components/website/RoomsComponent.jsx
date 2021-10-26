import React from 'react';
import doble1 from '../../assets/website/img/doble1.jpg';
import doble2 from '../../assets/website/img/doble2.jpeg';
import jsuite from '../../assets/website/img/jsuite.jpg';

function RoomsComponent() {
    return (
        <div>
            <div className="display-6 my-5">Habitaciones</div>
            <div className="row mt-5 d-flex justify-content-around">
                <div className="card border-light col-md-3 shadow-sm">
                    <img src={doble1} className="card-img-top img-fluid mt-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-text">Habitación Doble</h5>
                        <p className="card-text">1 cama doble grande.</p>
                    </div>
                </div>


                <div className="card border-light col-md-3 border-none shadow-sm">
                    <img src={doble2} className="card-img-top mt-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-text ">Habitación Doble 2 Camas</h5>
                        <p className="card-text">2 camas dobles.</p>
                    </div>
                </div>

                <div className="card border-light col-md-3 shadow-sm">
                    <img src={jsuite} className="card-img-top mt-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-text">Habitación Junior Suite</h5>
                        <p className="card-text">1 cama doble extragrande</p>
                        <p className="card-text">1 sofá cama</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomsComponent;
