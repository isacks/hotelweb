import React from 'react'
import styled from 'styled-components'
import mask from '../assets/img/covid/mask.png';
import temperature from '../assets/img/covid/termometro.png';
import antibacterial from '../assets/img/covid/desinfectante.png';
import distance from '../assets/img/covid/distancia.png';
import alert from '../assets/img/emerg/advertencia.png';
import exit from '../assets/img/emerg/exit.png';
import emergency from '../assets/img/emerg/emergency.png';
import scream from '../assets/img/emerg/scream.png';
import elevator from '../assets/img/emerg/elevator.png';
import back from '../assets/img/emerg/back.png';

function PreventiveRules() {

    const covidRules = [
        {
            icon: mask,
            description: 'Face mask required.'
        },
        {
            icon: temperature,
            description: 'We will be checking that your body temperature is less than 38°.'
        },
        {
            icon: antibacterial,
            description: 'Use antibacterial gel for proper hand desinfection.'
        },
        {
            icon: distance,
            description: 'During your visit, please keep a minimum distance of 2 meters between other guest or employees.'
        },
    ]

    const evacuationRules = [
        {
            icon: alert,
            description: 'Please inform to the hotel operador the emergency situation as quickly as posible.'
        },
        {
            icon: exit,
            description: 'Locate the nearest emergency exit and the evacuation route which are identify in the layout of the hotel that is attached to the back of the entrance door in your room.'
        },
        {
            icon: emergency,
            description: 'Leave your room as indicated in the evacuation instructions.'
        },
        {
            icon: scream,
            description: 'Keep calm, do not scream or run.'
        },
        {
            icon: elevator,
            description: 'Do not use the elevators.'
        },
        {
            icon: back,
            description: 'Return to your room if the area or the evacuation route is filled with smoke, place wet towels under the door and go to the window so you can be seen from outside.'
        },
    ]

    return (
        <Container>
            <Title className="display-3 text-center">Preventive Rules for entering our facilities</Title>
            <div>
                {
                    covidRules.map(rule => (
                        <div className="row mb-3 p-3">
                            <RuleImg className="col-md-4">
                                <img src={rule.icon} alt="..." />
                            </RuleImg>
                            <RuleInfo className="col-md-8">
                                <p>{rule.description}</p>
                            </RuleInfo>
                        </div>
                    ))
                }
            </div>
            <Title className="display-3 my-5">In case of Fire / Evacuation</Title>
            <div>
                {
                    evacuationRules.map(rule => (
                        <div className="row mb-3 p-3">
                            <RuleImg className="col-md-4 p-2">
                                <img src={rule.icon} alt="..." />
                            </RuleImg>
                            <RuleInfo className="col-md-8 p-2">
                                <p>{rule.description}</p>
                            </RuleInfo>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}

export default PreventiveRules

const Container = styled.div`
`;

const Title = styled.div`
    color: #cd8825;
    margin: 50px 0;
`;

const RuleImg = styled.div`
    img{
        width: 200px;
    }
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const RuleInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: 500;
`;