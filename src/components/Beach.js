import React from 'react'
import styled from 'styled-components'
import taboga from '../assets/img/taboga.jpg'
import islagrande from '../assets/img/islagrande.jpg'
import bocas from '../assets/img/bocas.jpg'
import gunayala from '../assets/img/gunayala.jpg'

function Beach() {

    const beaches = [
        {
            img: taboga,
            title: 'Taboga',
            description: 'Also known as The Flowers Island, besides beaches it has walking trails up to the highest point of the island including Vigía Hill and Cross Hill.',
            phone: '+507 6234-8989',
            social: '',
            web: 'www.tabogaexpress.com',
            email: 'info@tabogaexpress.com',
        },
        {
            img: islagrande,
            title: 'Isla Grande',
            description: "Located in Colon City, it's a crystal water insland, perfect for diving.",
            phone: '+507 6948-1990',
            social: '@hotelsistermoon',
            web: 'www.hotelsistermoon.com',
            email: '',
        },
        {
            img: bocas,
            title: 'Bocas del Toro',
            description: "Is an archipelago of islands, with turquoise color water also offers tropical forest and lagoons where you can see dolphins. Red Frog is one of their famous beaches.",
            phone: '+507 836-5501',
            social: '',
            web: 'www.redfrogbeach.com.pa',
            email: '',
        },
        {
            img: gunayala,
            title: 'Guna Yala',
            description: "There're 365 islands, each for every day of the year! White sands, crystal clear water invites you to dive and snorkel.",
            phone: '+507 203-7762',
            social: '',
            web: 'www.redfrogbeach.com.pa',
            email: 'reservas@yandupisland.com',
        },
    ]

    return (
        <Container>
            <Title className="display-2 text-center">
                Did somebody said sun, beach and sand?
            </Title>
            <p>Bathed for 2 oceans, Panamá offers countless beaches in the Pacific or Caribbean ocean.</p>
            {
                beaches.map((beach, key) => (
                    <div className="card mb-3 text-start shadow-sm overflow-hidden border-0" key={key}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={beach.img} alt={beach.title} className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{beach.title}</h5>
                                    <p className="card-text">{beach.description}</p>
                                    <p className="card-text"><small className="text-muted">{beach.phone}</small></p>
                                    <p className="card-text"><small className="text-muted">{beach.social}</small></p>
                                    <p className="card-text"><small className="text-muted">{beach.web}</small></p>
                                    <p className="card-text"><small className="text-muted">{beach.email}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Container>
    )
}

export default Beach

const Container = styled.div``;

const Title = styled.div`
    color: #cd8825;
    margin: 50px 0;
`;
