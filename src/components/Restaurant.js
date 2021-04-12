import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Restaurant(props) {
    const rest = props.data;
    console.log(rest.img);
    return (
        <Container className="row">
            <RestPhoto className="col-sm-6">
                <img src={rest.img} alt="..." className="figure-img img-fluid rounded" />
            </RestPhoto>
            <RestInfo className="col-sm-6 d-flex flex-column justify-content-center">
                <RestName className="display-6">
                    {rest.name}
                </RestName>
                <RestDescription>
                    {rest.description}
                </RestDescription>
                <RestLocation>
                    <LocationOnIcon />{rest.location}
                </RestLocation>
                <RestPhone>
                    <PhoneIcon />{rest.phone}
                </RestPhone>
                <RestSocials>
                    <InstagramIcon />{rest.socials}
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
`;
const RestName = styled.div`
    color: #cd8825;
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