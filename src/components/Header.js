import React from 'react'
import styled from 'styled-components';
import logo from '../assets/img/princesshotel.png';

function Header() {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="col-sm-6">
                <img src={logo} alt="logo" className="mt-3 figure-img img-fluid"/>
            </div>
            <Title className="display-3 text-center">Princess Hotel Directory</Title>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    display: flex;
    justify-content: center;
    img{
        width: 50%;
    }
`;

const Title = styled.div`
    color: #cd8825;
`;