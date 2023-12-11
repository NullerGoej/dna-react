import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-dark text-secondary py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Kontakt Information</h5>
                        <p>Email: <a href="mailto:support@dna-shop.dk">support@dna-shop.dk</a></p>
                        <p>Telefon: <a href="tel:+4542216047">+45 42 21 60 47</a></p>
                        <p>Adresse: vejlegaarden 6, ishoej danmark</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Sociale Medier Links</h5>
                        <a href="https://www.facebook.com" className="me-2"><i className="fab fa-facebook fa-2x"></i></a>
                        <a href="https://www.twitter.com" className="me-2"><i className="fab fa-twitter fa-2x"></i></a>
                        <a href="https://www.instagram.com"><i className="fab fa-instagram fa-2x"></i></a>
                    </div>
                    <div className="col-md-4">
                        <h5>Juridisk</h5>
                        <Link disabled href="">Privatlivspolitik</Link>
                        <br />
                        <Link disabled href="">Servicevilkaar</Link>
                        <br />
                        <Link disabled href="">Cookiepolitik</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr />
                        <p className="text-center">Skabt af <a href="https://dna.moedekjaer.dk">Den Noerdede ArtShop</a> | Ophavsret {currentYear}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;