import React from 'react';
import lobby from '../../assets/website/img/lobby2.jpg';
import rooms from '../../assets/website/img/rooms.jpg';
import rooms2 from '../../assets/website/img/rooms2.jpg';
import restaurant from '../../assets/website/img/restaurant.jpg';
import banos from '../../assets/website/img/banos.jpg';
import restaurant2 from '../../assets/website/img/restaurant2.jpg';
import events from '../../assets/website/img/events.jpg';
import meeting from '../../assets/website/img/meeting.jpg';

function FotosComponent() {
    return (
        <div>
            <div className="display-6 my-5">Fotos del Hotel</div>
            <div className="row">
                <div className="col-md-3 mb-3">
                    <img src={lobby} class="img-thumbnail" alt="..." />
                </div>
                <div className="col-md-3 mb-3">
                    <img src={rooms} class="img-thumbnail" alt="..." />
                </div>
                <div className="col-md-3 mb-3">
                    <img src={rooms2} class="img-thumbnail" alt="..." />
                </div>
                <div className="col-md-3 mb-3">
                    <img src={restaurant} class="img-thumbnail" alt="..." />
                </div>
                <div className="col-md-3 mb-3">
                    <img src={banos} class="img-thumbnail" alt="..." />
                </div>
                <div className="col-md-3 mb-3">
                    <img src={restaurant2} class="img-thumbnail" alt="..." />
                </div>
                <div className="col-md-3 mb-3">
                    <img src={events} class="img-thumbnail" alt="..." />
                </div>
                <div className="col-md-3 mb-3">
                    <img src={meeting} class="img-thumbnail" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default FotosComponent
