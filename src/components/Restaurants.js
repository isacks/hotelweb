import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import tinajas from '../assets/img/tinajas.jpg'
import lafonda from '../assets/img/lafonda.jpg'
import otto from '../assets/img/otto.jpg'
import bistrot from '../assets/img/lebistrot.jpg'

function Restaurant() {

    const nationalRestaurants = [
        {
            img: tinajas,
            title: 'Tinajas Restaurant',
            description: 'Traditional food',
            location: 'Located at 51 St. East.',
            phone: '+507 263-7890',
            social: '@restaurante_tinajas',
            gmap: 'https://goo.gl/maps/N3oRiJ1GkUZp8b888'
        },
        {
            img: lafonda,
            title: 'La Fonda',
            description: 'Traditional food',
            location: 'Located in Marbella, Anastacio Ruiz Noriega St.',
            phone: '+507 385-7220',
            social: '@lafondapanama',
            gmap: 'https://goo.gl/maps/dR5JGeoraSPquXNL9'
        },
    ]

    const internationalRestaurants = [
        {
            img: otto,
            title: 'Ottoman Restaurant & Lounge',
            description: 'Turquish and Mediterranean style food',
            location: 'Located at the World Trade Center Panama',
            phone: '+507 238-4525',
            social: '@ottomanrestaurant',
            gmap: 'https://goo.gl/maps/uKKAAKGB2X2rZ2zH6'
        },
        {
            img: bistrot,
            title: 'Le Bistrot',
            description: '80´s Restaurant and Author Cuisine.',
            location: 'Located at 53 St., Plaza La Florida',
            phone: '+507 264-5587',
            social: '@lebistrotrestaurant',
            gmap: 'https://goo.gl/maps/EJ3vuACRKaBmFRZM6'
        },
    ]

    return (
        <Container>
            <Title className="display-4 text-center">And now a taste of our varied gastronomy</Title>
            <p>In Panamá you could taste a varied gastronomy, from International plates to our traditional dishes as sancocho, arroz con pollo, tamales, saus among others.</p>
            <Title className="display-5">Traditional Style Food Restaurants</Title>
            {
                nationalRestaurants.map((rest, key) => (
                    <div className="card mb-3 text-start shadow-sm overflow-hidden border-0" key={key}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={rest.img} alt={rest.title} className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{rest.title}</h5>
                                    <p className="card-subtitle mb-2">{rest.description}</p>
                                    <p className="card-text"><LocationOnIcon /> {rest.location}</p>
                                    <p className="card-text"><PhoneIcon /> <small className="text-muted">{rest.phone}</small></p>
                                    <p className="card-text"><InstagramIcon /> <small className="text-muted">{rest.social}</small></p>
                                    <p className="card-text"><small className="text-muted">{rest.email}</small></p>
                                    <a className="btn btn-success btn-block" href={rest.gmap}><LocationOnIcon /> Go</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <Title className="display-5">International Food Restaurants</Title>
            {
                internationalRestaurants.map((rest, key) => (
                    <div className="card mb-3 text-start shadow-sm overflow-hidden border-0" key={key}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={rest.img} alt={rest.title} className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{rest.title}</h5>
                                    <p className="card-subtitle mb-2">{rest.description}</p>
                                    <p className="card-text"><LocationOnIcon /> {rest.location}</p>
                                    <p className="card-text"><PhoneIcon /> <small className="text-muted">{rest.phone}</small></p>
                                    <p className="card-text"><InstagramIcon /> <small className="text-muted">{rest.social}</small></p>
                                    <p className="card-text"><small className="text-muted">{rest.email}</small></p>
                                    <a className="btn btn-success btn-block" href={rest.gmap}><LocationOnIcon /> Go</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Container>
    )
}

export default Restaurant

const Container = styled.div`
    padding: 10px;
`;
const Title = styled.div`
    color: #cd8825;
    margin: 50px 0;
`;
const RestPhoto = styled.div`
`;
const RestInfo = styled.div`
    text-align: left;
`;
const RestName = styled.div`
    font-weight: 500;
    margin: 10px 0;
`;
const RestDescription = styled.div`
`;
const RestLocation = styled.div`
`;
const RestPhone = styled.div`
`;
const RestSocials = styled.div`
`;