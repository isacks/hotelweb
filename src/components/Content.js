import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Restaurant from './Restaurant'
import tinajas from '../assets/img/tinajas.jpg'
import lafonda from '../assets/img/lafonda.jpg'
import otto from '../assets/img/otto.jpg'
import bistrot from '../assets/img/lebistrot.jpg'
import canal from '../assets/img/canal.jpg'
import aguaclara from '../assets/img/aguaclara.jpg'
import causeway from '../assets/img/causeway.jpg'
import summit from '../assets/img/summit.jpg'
import rainforest from '../assets/img/rainforest.jpg'
import valleanton from '../assets/img/valleanton.jpg'
import veraguas from '../assets/img/veraguas.jpg'
import azuero from '../assets/img/azuero.jpg'
import taboga from '../assets/img/taboga.jpg'
import islagrande from '../assets/img/islagrande.jpg'
import bocas from '../assets/img/bocas.jpg'
import gunayala from '../assets/img/gunayala.jpg'
import Beach from './Beach'

function Content() {
    const tvChannels = [
        [2, "TVN", "LOCAL"],
        [4, "RPC", "LOCAL"],
        [5, "FETEV", "LOCAL"],
        [9, "TVMAX", "LOCAL"],
        [11, "SERTV", "LOCAL"],
        [13, "TELEMETRO", "LOCAL"],
        [23, "MAS 23", "LOCAL"],
        [234, "TNT", "MOVIES"],
        [235, "SPACE", "MOVIES"],
        [237, "CINECANAL", "MOVIES"],
        [238, "FX MOVIE", "MOVIES"],
        [240, "STUDIO UNIVERSAL", "MOVIES"],
        [251, "GOLDEN", "MOVIES"],
        [253, "PARAMOUNT", "MOVIES"],
        [271, "STAR CHANNEL", "SERIES"],
        [272, "WARNER", "SERIES"],
        [274, "UNIVERSAL", "SERIES"],
        [275, "FX", "SERIES"],
        [286, "DISCOVERY ID", "SERIES"],
        [302, "CNN SPANISH", "NEWS"],
        [304, "FOX NEWS", "NEWS"],
        [326, "CNN INTL", "NEWS"],
        [336, "DISNEY", "CARTOONS"],
        [337, "CARTOON NETWORK", "CARTOONS"],
        [339, "NICKELODEON", "CARTOONS"],
        [371, "COS", "SPORTS"],
        [373, "ESPN", "SPORTS"],
        [375, "FOX SPORTS", "SPORTS"],
        [426, "DISCOVERY", "VARIETY"],
        [428, "NAT GEO", "VARIETY"],
        [429, "HISTORY", "VARIETY"],
        [432, "E! ENTERTAINMENT", "VARIETY"],
        [433, "A&E", "VARIETY"],
        [442, "CARACOL", "VARIETY"],
        [458, "TELEMUNDO", "VARIETY"],
    ]

    const nationalRestaurants = [
        {
            img: tinajas,
            name: 'Tinajas Restaurant',
            description: '',
            location: 'Located at 51 St. East.',
            phone: '+507 263-7890',
            socials: '@restaurante_tinajas'
        },
        {
            img: lafonda,
            name: 'La Fonda',
            description: '',
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

    const beaches = [
        {
            img: taboga,
            name: 'Taboga',
            description: 'Also known as The Flowers Island, besides beaches it has walking trails up to the highest point of the island including Vigía Hill and Cross Hill.',
            phone: '',
            social: '',
            web: '',
            email: '',
        },
        {
            img: islagrande,
            name: 'Isla Grande',
            description: "Located in Colon City, it's a crystal water insland, perfect for diving.",
            phone: '+507 6948-1990',
            social: '@hotelsistermoon',
            web: 'www.hotelsistermoon.com',
            email: '',
        },
        {
            img: bocas,
            name: 'Bocas del Toro',
            description: "Is an archipelago of islands, with turquoise color water also offers tropical forest and lagoons where you can see dolphins. Red Frog is one of their famous beaches.",
            phone: '+507 836-5501',
            social: '',
            web: 'www.redfrogbeach.com.pa',
            email: '',
        },
        {
            img: gunayala,
            name: 'Guna Yala',
            description: "There're 365 islands, each for every day of the year! White sands, crystal clear water invites you to dive and snorkel.",
            phone: '+507 203-7762',
            social: '',
            web: 'www.redfrogbeach.com.pa',
            email: 'reservas@yandupisland.com',
        },
    ]
    return (
        <Container>
            <Header />
            <Location>
                <Title className="display-4 text-center my-3">Location</Title>
                <div>
                    Princess Hotel Panamá
                    It's located in the city center, 30 minutes from Tocumen International Airport, near banks, restaurants and malls. Our check in is at 3:00 p.m. and our check out is at 12:00 p.m.
                </div>
            </Location>
            <Services>
                <Title className="display-4 text-center my-3">Services</Title>
                <div>
                    <p>Begin your day with a delicious breakfast served at our Saloma Restaurant located in PB level, from 6:00 a.m. to 9:00 p.m.</p>

                    <p>We are at your service in Front Desk 24/7 dialing 1, for any request.</p>
                    <p>
                        <div className="h2">Always connected</div>
                        Mini Bar
                        Free wifi at the hotel.<br />
                        User: Princess Hotel <br />
                        Password: PrincessHotelpm@
                    </p>
                    <p>
                        <div className="h2">Mini Bar</div>
                        Ask for menu and prices.
                    </p>
                    <p>
                        <div className="h2">Pool</div>
                        Relax in our cozy outdoor pool located at CL level from 9:00 a.m. to 9:00 p.m.
                    </p>
                    <p>
                        <div className="h2">Late Check Out</div>
                        Enjoy spending more time of your stay, in the city or with us, ask for a late check out until 2:00 p.m. for 16.50 USD or until 4:00 p.m. for 27.50 USD.
                    </p>
                    <p>
                        <div className="h2">Channel Listing</div>
                        Late Check Out
                        For your entertainment we suggest these channels: <br />
                    </p>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Channel</th>
                                <th>Channel Name</th>
                                <th>Class</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tvChannels.map((channel, key) => (
                                    <tr key={key}>
                                        <td>{channel[0]}</td>
                                        <td>{channel[1]}</td>
                                        <td>{channel[2]}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </Services>
            <HotelRules>
                <Title className="display-4 text-center my-3">Preventive Rules for entering our facilities</Title>
                <div>
                    <div className="h4">Rooms Cleaning</div>
                    <p>For your biosecurity and of our cleaning staff, your room will be cleaned and change the bed linens every 3 days.</p>
                    <p>If you need to change the bed linen or other object, please ask at front desk and we will deliver your request.</p>
                </div>
            </HotelRules>
            <Discover>
                <Title className="display-4 text-center my-3">Discover Panamá</Title>
                <div>
                    <div className="h4">Panama Canal</div>
                    <img src={canal} className="img-fluid" />
                    <p>
                        About 20 minutes from the hotel at the Miraflores Visitors Center you could experience and see the transit of all types of ships by the locks, learn about the history of the Panamá Canal construction as well as taste some good dishes at Atlantic and Pacific Restaurant. <br />
                        Visitors Center telephone: +507 276-8325 <br />
                        @canaldepanama
                    </p>
                </div>
                <div>
                    <div className="h4">Agua Clara Visitors Center</div>
                    <img src={aguaclara} className="img-fluid" />
                    <p>
                        Located in the Atlantic, near Colón City.  This Visitors Center is well known for its impressive panoramic view, trails and the Gatún Lake View., among other things. They have their own restaurant. <br />
                        Entrance price 15 USD.
                    </p>
                </div>
                <div>
                    <div className="h4">Causeway o Calzada de Amador</div>
                    <img src={causeway} className="img-fluid" />
                    <p>
                        A special place to walk, ride bicycles and watch the sea. Enjoy the food and the view from Bahia Panamá Restaurant. Located 15 minutes from the hotel.
                    </p>
                </div>
                <div>
                    <div className="h4">Other restaurants we suggest:</div>
                    <p>
                        <strong>Pencas Restaurant</strong> <br />
                        Panamanian and Caribbean style food. <br />
                        Cell phone: 6490-0651 | @restaurantepencas
                    </p>
                    <p>
                        <strong>Mi Ranchito Restaurant</strong> <br />
                        Panamanian and Caribbean style food. <br />
                        Cell phone: 6490-0651 | @restaurantepencas
                    </p>
                </div>
            </Discover>
            <Adventure>
                <Title className="display-4 text-center my-3">Adventure Spirit?</Title>
                <p>Get to know the flora and fauna of our country, visiting these places:</p>
                <div>
                    <div className="h4">Summit Municipal Park</div>
                    <img src={summit} className="img-fluid" />
                    <p>Here you will see and learn about our National bird the Harpy Eagle. The perfect place to walk and enjoy nature and know about the different.</p>
                </div>
                <div>
                    <div className="h4">Panama Rain Forest Discovery Center</div>
                    <img src={rainforest} className="img-fluid" />
                    <p>A place where you can connect with nature, a special place for bird watchers, it has a tower for bird observation and a spectacular view of the place. @panama_rainforest_dc</p>
                </div>
                <div>
                    <div className="h4">Anton Valley</div>
                    <img src={valleanton} className="img-fluid" />
                    <p>A tourist community located in the crater of an extinct volcano. Visit the different thermal wells, chorro El Macho, visit the local zoo at El Nispero, you can also enjoy canopying with Canopy Adventure.
                    Contact: +507 264-5720.
                    Email: contact-us@canopytower.com</p>
                </div>
                <div>
                    <div className="h4">Veraguas</div>
                    <img src={veraguas} className="img-fluid" />
                    <p>
                        In this province you could know and enjoy the Forest Reserve La Yeguada, the perfect place for camping and hiking, take a relaxing bath in La Silampa well.
                        Like surfing? you are looking for Santa Catalina beach, for its perfect surge is the place.
                        For lodging contact: 507 6571- 4387
                        www.hotelsantacatalnapanama.com
                    </p>
                </div>
                <div>
                    <div className="h4">Azuero</div>
                    <img src={azuero} className="img-fluid" />
                    <p>
                        To know and learn more about our culture and traditions, visit Las Tablas y Guararé, both known for making our traditional dress La Pollera.
                        By law, every second Saturday of January takes place the 1000 Polleras Parade, here you can appreciate all types of polleras.
                        In Guararé takes place the National Mejorana Festival in September, this festival includes traditional dancing.
                    
                        For lodging contact:
                        www.donamarabnb.com
                        www.hotelpresidente.com
                        +507 848-3071
                    </p>

                    
                </div>
            </Adventure>
            <SunBeach>
                <Title className="display-4 text-center">
                    Did somebody said sun, beach and sand?
                </Title>
                <p>Bathed for 2 oceans, Panamá offers countless beaches in the Pacific or Caribbean ocean.</p>
                {
                    beaches.map((beach) =>(
                        <Beach data={beach}/>
                    ))
                }
            </SunBeach>
            <Gastronomy>
                <Title className="display-4 text-center">And now a taste of our varied gastronomy</Title>
                <p>In Panamá you could taste a varied gastronomy, from International plates to our traditional dishes as sancocho, arroz con pollo, tamales, saus among others.</p>
                <div className="display-6 py-3">Traditional Style Food Restaurants</div>
                {
                    nationalRestaurants.map((restaurant) => (
                        <Restaurant data={restaurant} />
                    ))
                }
                <div className="display-6 py-3">International Food Restaurants</div>

                {
                    internationalRestaurants.map((restaurant) => (
                        <Restaurant data={restaurant} />
                    ))
                }
            </Gastronomy>
        </Container>
    )
}

export default Content;


const Container = styled.div`
    text-align: center;
`;

const Location = styled.div`
`;

const Services = styled.div`
`;

const HotelRules = styled.div`
`;

const Discover = styled.div`
`;

const Adventure = styled.div`
`;

const SunBeach = styled.div`
`;

const Gastronomy = styled.div`  
`;

const Title = styled.div`
    color: #cd8825;
`;