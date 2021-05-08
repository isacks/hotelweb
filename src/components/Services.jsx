import React from 'react'
import styled from 'styled-components'
/* COMPONENTS */
import ChannelList from './ChannelList'
/* ICONS */
import PoolIcon from '@material-ui/icons/Pool';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import WifiIcon from '@material-ui/icons/Wifi';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function Services() {
    return (
        <Container>
            <Title className="display-4 text-center">Services</Title>
            <p>Begin your day with a delicious breakfast served at our Saloma Restaurant located in PB level, from 6:00 a.m. to 10:00 a.m.</p>
            <p>We are at your service in Front Desk 24/7 dialing 1, for any request.</p>
            <div>
                <WifiIcon style={{ fontSize: 80, color: "#cd8825" }} />
                <div className="h2">Always connected</div>
                <p>Free wifi at the hotel.</p>
                <p>Wireless Name: Princess Hotel</p>
                <p>Password: PrincessHotelpm@</p>
            </div>
            <div>
                <LocalBarIcon style={{ fontSize: 80, color: "#cd8825" }} />
                <div className="h2">Mini Bar</div>
                <p>Ask for menu and prices.</p>
            </div>
            <div>
                <PoolIcon style={{ fontSize: 80, color: "#cd8825" }} />
                <div className="h2">Pool</div>
                <p>Relax in our cozy outdoor pool located at CL level from 9:00 a.m. to 9:00 p.m.</p>
            </div>
            <div>
                <LibraryAddCheckIcon style={{ fontSize: 80, color: "#cd8825" }} />
                <div className="h2">Late Check Out</div>
                <p>Enjoy spending more time of your stay, in the city or with us, ask for a late check out until 2:00 p.m. for 16.50 USD or until 4:00 p.m. for 27.50 USD.</p>
            </div>
            <div>
                <LiveTvIcon style={{ fontSize: 80, color: "#cd8825" }} />
                <div className="h2">Channel Listing</div>
                <p>For your entertainment we suggest these channels:</p>
            </div>
            <ChannelList />
            <div>
                <CheckCircleOutlineIcon style={{ fontSize: 80, color: "#cd8825" }} />
                <div className="h4">Rooms Cleaning</div>
                <p>For your biosecurity and of our cleaning staff, your room will be cleaned and change the bed linens every 3 days.</p>
                <p>If you need to change the bed linen or other object, please ask at front desk and we will deliver your request.</p>
            </div>
        </Container>
    )
}

export default Services

const Container = styled.div``

const Title = styled.div`
    color: #cd8825;
    margin: 50px 0;
`;
