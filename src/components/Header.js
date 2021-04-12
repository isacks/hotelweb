import React from 'react'
import styled from 'styled-components';
import logo from '../assets/img/princesshotel.png';

function Header() {
    return (
        <Container className="col-sm-12 d-flex flex-column align-items-center">
            <img src={logo} alt="" className="mt-3"/>
            <Title className="display-3 text-center my-4">Princess Hotel Directory</Title>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    display: flex;
    justify-content: center;
    img{
        width: 25%;
    }
`;

const Title = styled.div`
    color: #cd8825;
`;