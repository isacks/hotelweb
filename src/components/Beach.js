import React from 'react'
import styled from 'styled-components'

function Beach(props) {
    const beach = props.data;
    return (
        <Container className="p-2">
            <BeachName className="h4">{beach.name}</BeachName>
            <BeachImg>
                <img src={beach.img} className="img-fluid" />
            </BeachImg>
            <BeachDescription>
                {beach.description}
            </BeachDescription>
            <BeachPhone>{beach.phone}</BeachPhone>
            <BeachSocial>{beach.social}</BeachSocial>
            <BeachWeb>{beach.web}</BeachWeb>
            <BeachEmail>{beach.email}</BeachEmail>
        </Container>
    )
}

export default Beach

const Container = styled.div``;
const BeachName = styled.div``;
const BeachImg = styled.div``;
const BeachDescription = styled.div``;
const BeachPhone = styled.div``;
const BeachSocial = styled.div``;
const BeachWeb = styled.div``;
const BeachEmail = styled.div``;
