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
            name: 'Tinajas Restaurant',
            description: 'Traditional food',
            location: 'Located at 51 St. East.',
            phone: '+507 263-7890',
            socials: '@restaurante_tinajas'
        },
        {
            img: lafonda,
            name: 'La Fonda',
            description: 'Traditional food',
            location: 'Located in Marbella, Anastacio Ruiz Noriega St.',
            phone: '+507 385-7220',
            socials: '@lafondapanama'
        },
    ]

    const internationalRestaurants = [
        {
            img: otto,
            name: 'Ottoman Restaurant & Lounge',
            description: 'Turquish and Mediterranean style food',
            location: 'Located at the World Trade Center Panama',
            phone: '+507 238-4525',
            socials: '@ottomanrestaurant'
        },
        {
            img: bistrot,
            name: 'Le Bistrot',
            description: '80´s Restaurant and Author Cuisine.',
            location: 'Located at 53 St., Plaza La Florida',
            phone: '+507 264-5587',
            socials: '@lebistrotrestaurant'
        },
    ]

    return (
        <Container>
            <Title className="display-4 text-center">And now a taste of our varied gastronomy</Title>
                <p>In Panamá you could taste a varied gastronomy, from International plates to our traditional dishes as sancocho, arroz con pollo, tamales, saus among others.</p>
            <Title className="display-5">Traditional Style Food Restaurants</Title>
            {
                nationalRestaurants.map(rest => (
                    <div className="row">
                        <RestPhoto className="col-sm-6">
                            <img src={rest.img} alt="..." className="figure-img img-fluid rounded" />
                        </RestPhoto>
                        <RestInfo className="col-sm-6 d-flex flex-column justify-content">
                            <RestName className="display-6">
                                {rest.name}
                            </RestName>
                            <RestDescription>
                                <RestaurantIcon /> {rest.description}
                            </RestDescription>
                            <RestLocation>
                                <LocationOnIcon /> {rest.location}
                            </RestLocation>
                            <RestPhone>
                                <PhoneIcon /> {rest.phone}
                            </RestPhone>
                            <RestSocials>
                                <InstagramIcon /> {rest.socials}
                            </RestSocials>
                        </RestInfo>
                    </div>
                ))
            }
            <Title className="display-5">International Food Restaurants</Title>
            {
                internationalRestaurants.map(rest => (
                    <div className="row">
                        <RestPhoto className="col-sm-6">
                            <img src={rest.img} alt="..." className="figure-img img-fluid rounded" />
                        </RestPhoto>
                        <RestInfo className="col-sm-6 d-flex flex-column justify-content">
                            <RestName className="display-6">
                                {rest.name}
                            </RestName>
                            <RestDescription>
                                <RestaurantIcon /> {rest.description}
                            </RestDescription>
                            <RestLocation>
                                <LocationOnIcon /> {rest.location}
                            </RestLocation>
                            <RestPhone>
                                <PhoneIcon /> {rest.phone}
                            </RestPhone>
                            <RestSocials>
                                <InstagramIcon /> {rest.socials}
                            </RestSocials>
                        </RestInfo>
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