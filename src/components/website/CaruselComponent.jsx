import React from 'react';
import styled from 'styled-components';
import asocial from '../../assets/website/img/asocial.jpg';
import lobby from '../../assets/website/img/lobby.jpg';
import food from '../../assets/website/img/food.jpg';

function CaruselComponent() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide container" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={asocial} className="d-block w-100 h-100" alt="..." />
                    <InfoCard className="carousel-caption d-none d-md-block">
                        <h5>El mejor momento al aire libre</h5>
                        <p>Disfruta con amigos o familiares de nuestras áreas sociales.</p>
                    </InfoCard>
                </div>
                <div className="carousel-item">
                    <img src={lobby} className="d-block w-100" alt="..." />
                    <InfoCard className="carousel-caption d-none d-md-block">
                        <h5>Ambiente agradable y música relajante</h5>
                        <p>Dale rienda suelta a tu imaginación y se más productivo.</p>
                    </InfoCard>
                </div>
                <div className="carousel-item">
                    <img src={food} className="d-block w-100" alt="..." />
                    <InfoCard className="carousel-caption d-none d-md-block">
                        <h5>Consiente tu paladar</h5>
                        <p>Disfruta de nuestro menu especial que incluye sabores nacionales e internacionales.</p>
                    </InfoCard>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default CaruselComponent;

const InfoCard = styled.div`
    background: rgba(33,37,41,75%);
`;
