import React from 'react'
import styled from 'styled-components'
import summit from '../assets/img/summit.jpg'
import rainforest from '../assets/img/rainforest.jpg'
import valleanton from '../assets/img/valleanton.jpg'
import veraguas from '../assets/img/veraguas.jpg'
import azuero from '../assets/img/azuero.jpg'

function AdventureSpirit() {

    const adventureLocations = [
        {
            title: 'Summit Municipal Park',
            img: summit,
            description: 'Here you will see and learn about our National bird the Harpy Eagle. The perfect place to walk and enjoy nature.',
            phone: '',
            social: '',
            web: '',
            email: '',
        },
        {
            title: 'Panama Rain Forest Discovery Center',
            img: rainforest,
            description: 'A place where you can connect with nature, a special place for bird watchers, it has a tower for bird observation and a spectacular view of the place.',
            phone: '',
            social: '@panama_rainforest_dc',
            web: '',
            email: '',
        },
        {
            title: 'Anton Valley',
            img: valleanton,
            description: 'A tourist community located in the crater of an extinct volcano. Visit the different thermal wells, chorro El Macho, visit the local zoo at El Nispero, you can also enjoy canopying with Canopy Adventure.',
            phone: '+507 264-5720',
            social: '',
            web: '',
            email: 'contact-us@canopytower.com',
        },
        {
            title: 'Veraguas',
            img: veraguas,
            description: 'In this province you could know and enjoy the Forest Reserve La Yeguada, the perfect place for camping and hiking, take a relaxing bath in La Silampa well. Like surfing? you are looking for Santa Catalina beach, for its perfect surge is the place.',
            phone: '+507 6571-4387',
            social: '',
            web: 'www.hotelsantacatalinapanama.com',
            email: '',
        },
        {
            title: 'Azuero',
            img: azuero,
            description: 'To know and learn more about our culture and traditions, visit Las Tablas y Guararé, both known for making our traditional dress La Pollera. By law, every second Saturday of January takes place the 1000 Polleras Parade, here you can appreciate all types of polleras. In Guararé takes place the National Mejorana Festival in September, this festival includes traditional dancing.',
            phone: '+507 848-3071',
            social: '',
            web: 'www.donamarabnb.com | www.hotelpresidente.com',
            email: '',
        }
    ]

    return (
        <Container>
            <Title className="display-2 text-center">Adventure Spirit?</Title>
            <p>Get to know the flora and fauna of our country, visiting these places:</p>
            {
                adventureLocations.map((location, key) => (
                    <div className="card mb-3 text-start shadow-sm overflow-hidden border-0" key={key}>
                        <div className="row g-0">
                            <div className="col-md-4">
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

export default AdventureSpirit

const Container = styled.div`
`;

const Title = styled.div`
    color: #cd8825;
    margin: 50px 0;
`;