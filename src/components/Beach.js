import React from 'react'
import styled from 'styled-components'

function Beach(props) {
    const beach = props.data;
    return (
        {/* <Container className="p-2">
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
        </Container> */},
        <Container className="card mb-3 text-start">
            <img src={beach.img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title fs-1">{beach.name}</h5>
                <p class="card-text">{beach.description}</p>
                <p class="card-text">{beach.phone}</p>
                <p class="card-text">{beach.social}</p>
                <p class="card-text">{beach.web}</p>
                <p class="card-text">{beach.email}</p>
            </div>
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
