import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function FooterComponent() {
    return (
        <div>
            <footer className="py-5">
                <div className="row">
                    <div className="col-4">
                        <h5>Links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Inicio</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Información</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Habitaciones</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Servicios</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <h5>Servicios</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Reservas</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Salones de eventos</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Salones de reuniones</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Área social</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Sitios turísticos</a></li>
                        </ul>
                    </div>

                    {/* <div className="col-2">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div> */}

                    <div className="col-sm-4">
                        <form>
                            <h5>Subscríbete a nuestro boletín informativo</h5>
                            <p>Recibe todas nuestras ofertas en tu correo.</p>
                            <div className="d-flex w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden">Correo</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Correo" />
                                <button className ="btn btn-primary" type="button">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex justify-content-between py-4 my-4 border-top">
                    <p>&copy; 2021 Princess Hotel Panamá, Todos los derechos reservados.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-dark" href="https://api.whatsapp.com/send?phone=50769756086&text=%C2%A1Hola%2C%20Princess%20Hotel%20Panam%C3%A1!%20Estoy%20interesado%20en%20hacer%20una%20reserva."><WhatsAppIcon /></a></li>
                        <li className="ms-3"><a className="link-dark" href="https://www.instagram.com/princesshotelpanama/"><InstagramIcon /></a></li>
                        <li className="ms-3"><a className="link-dark" href="https://facebook.com/princesshotelpanama/"><FacebookIcon /></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default FooterComponent;
