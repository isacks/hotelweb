import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RestaurantIcon from '@material-ui/icons/Restaurant';

function Restaurant(props) {
    const rest = props.data;
    console.log(rest.img);
    return (
        <Container className="row">
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
        </Container>
    )
}

export default Restaurant

const Container = styled.div`
    padding: 10px;
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