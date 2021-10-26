import React from 'react';
import NavbarComponent from './website/NavbarComponent';
import CaruselComponent from './website/CaruselComponent';
import RoomsComponent from './website/RoomsComponent';
import FotosComponent from './website/FotosComponent';
import FooterComponent from './website/FooterComponent';
function HomeComponent() {
    return (
        <div className="container">
            <NavbarComponent />
            <CaruselComponent />
            <RoomsComponent />
            <FotosComponent />
            <FooterComponent />
        </div>
    )
}

export default HomeComponent;
