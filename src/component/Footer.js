import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Contact Information</h5>
                        <p>Email: <a href="mailto:bastian@moedekjaer.dk">bastian@moedekjaer.dk</a></p>
                        <p>Phone: <a href="tel:+4542216047">+45 42 21 60 47</a></p>
                        <p>Address: vejlegården 6, ishøj denmark</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Social Media Links</h5>
                        <a href="https://www.facebook.com" className="me-2"><i className="fab fa-facebook fa-2x"></i></a>
                        <a href="https://www.twitter.com" className="me-2"><i className="fab fa-twitter fa-2x"></i></a>
                        <a href="https://www.instagram.com"><i className="fab fa-instagram fa-2x"></i></a>
                    </div>
                    <div className="col-md-4">
                        <h5>Legal</h5>
                        <Link disabled href="">Privacy Policy</Link>
                        <br />
                        <Link disabled href="">Terms of Service</Link>
                        <br />
                        <Link disabled href="">Cookie Policy</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr />
                        <p className="text-center">Created by <a href="https://moedekjaer.dk">Moedekjaer</a> | Copyright {currentYear}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;