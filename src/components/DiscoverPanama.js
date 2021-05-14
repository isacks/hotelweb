import React from 'react'
import styled from 'styled-components'
import canal from '../assets/img/canal.jpg'
import aguaclara from '../assets/img/aguaclara.jpg'
import causeway from '../assets/img/causeway.jpg'

function DiscoverPanama() {

    const discoverLocations = [
        {
            title: 'Panama Canal',
            img: canal,
            description: 'About 20 minutes from the hotel at the Miraflores Visitors Center you could experience and see the transit of all types of ships by the locks, learn about the history of the Panamá Canal construction as well as taste some good dishes at Atlantic and Pacific Restaurant.',
            phone: '+507 276-8325',
            social: '@canaldepanama',
            web: '',
            email: '',
        },
        {
            title: 'Agua Clara Visitors Center',
            img: aguaclara,
            description: 'Located in the Atlantic, near Colón City. This Visitors Center is well known for its impressive panoramic view, trails and the Gatún Lake View., among other things. They have their own restaurant.',
            phone: '',
            social: '',
            web: '',
            email: '',
        },
        {
            title: 'Causeway o Calzada de Amador',
            img: causeway,
            description: 'A special place to walk, ride bicycles and watch the sea. Enjoy the food and the view from Bahia Panamá Restaurant. Located 15 minutes from the hotel.',
            phone: '',
            social: '',
            web: '',
            email: '',
        }
    ]

    return (
        <Container>
            <Title className="display-2 text-center">Discover Panama</Title>
            <p> We like you to take advantage of your visit and discover the beauty of Panamá. These are our suggestions:</p>
            {
                discoverLocations.map((location, key) => (
                    <div className="card mb-3 text-start shadow-sm overflow-hidden border-0" key={key}>
                        <div className="row g-0">
                            <div className="col-md-4 shadow">
                                <img src={location.img} alt={location.title} className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{location.title}</h5>
                                    <p className="card-text">{location.description}</p>
                                    <p className="card-text"><small className="text-muted">{location.phone}</small></p>
                                    <p className="card-text"><small className="text-muted">{location.social}</small></p>
                                    <p className="card-text"><small className="text-muted">{location.web}</small></p>
                                    <p className="card-text"><small className="text-muted">{location.email}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Container>
    )
}

export default DiscoverPanama

const Container = styled.div``

const Title = styled.div`
    color: #cd8825;
    margin: 50px 0;
`;