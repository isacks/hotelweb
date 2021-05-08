import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Services from './Services'
import Restaurants from './Restaurants'
import PreventiveRules from './PreventiveRules'
import AdventureSpirit from './AdventureSpirit'
import DiscoverPanama from './DiscoverPanama'
import Beach from './Beach'
import logo from '../assets/img/princesshotellogo.png'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';

function Content() {

    return (
        <Container className="container">
            <Header />
            <Location className="d-flex flex-column justify-content-center">
                <Title className="display-4 text-center">Location</Title>
                <div>
                    Princess Hotel Panamá it's located in the city center, 30 minutes from Tocumen International Airport, near banks, restaurants and malls. Our check in is at 3:00 p.m. and our check out is at 12:00 p.m.
                </div>
            </Location>
            <Services />
            <PreventiveRules />
            <DiscoverPanama />
            <AdventureSpirit />
            <Beach />
            <Restaurants />
            <Footer className="row">
                <figure className="col-sm-4 mt-3">
                    <img src={logo} alt="..." className="img-fluid" />
                </figure>
                <div className="col-sm-4 d-flex justify-content-center flex-column align-items-center mb-4">
                    <LocationOnIcon className="mb-2 fs-1" style={{ color: "#cd8825" }} />
                    <div className="display-6 mb-3">Address</div>
                    <div className="">Marbella, Calle 53 Este con Ave. 5ta. B Sur, Plaza World Trade Center</div>
                </div>
                <div className="col-sm-4 d-flex justify-content-center flex-column align-items-center mb-4">
                    <MailIcon className="mb-2 fs-1" style={{ color: "#cd8825" }} />
                    <div className="display-6 mb-3">Contact</div>
                    <div>Phone: +507 309-6901</div>
                    <div>Email: reservas@princesshotelpanama.com</div>
                </div>
            </Footer>
        </Container>
    )
}

export default Content;

const Container = styled.div`
    text-align: center;
`;

const Location = styled.div`
`;

const Title = styled.div`
    color: #cd8825;
    margin: 50px 0;
`;
const Footer = styled.div`
    background: #2c353d;
    color: white;
    padding: 10px;
    img{
        width: 50%;
    }
`;