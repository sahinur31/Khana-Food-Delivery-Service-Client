import logo from '../../images/footer-logo.png';
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <div className="footer-area text-white pt-5">
                <div className="container">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div className="footer-logo">
                        <img className="mb-3" src={logo} alt="" />
                         <p>In the year 2012, 1st March, Khana food delivery service. going to establish, with the promise to give the best and modern food delivery facility to the people of newly developed Rampura Banasree, ...</p>
                        </div>
                        <div className="icons-container d-flex text-center ">
                            <div className="icon">
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faTwitterSquare} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </div>
                            </div>
                    </div>
                    <div className="col-md-3">
                    <div className="footer-menu-container">
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">About Online service</Nav.Link>
                            <Nav.Link eventKey="link-1">Read our blog</Nav.Link>
                            <Nav.Link eventKey="link-2">Sign up to order</Nav.Link>
                            <Nav.Link eventKey="link-3">Add your service</Nav.Link>
                        </Nav>
                    </div>
                    </div>
                    <div className="col-md-3">
                        <Nav defaultActiveKey="/home" className="flex-column justify-content-end">
                            <Nav.Link href="/home">Get Help</Nav.Link>
                            <Nav.Link eventKey="link-1">Read FAQs</Nav.Link>
                            <Nav.Link eventKey="link-2">View all restaurants</Nav.Link>
                            <Nav.Link eventKey="link-3">Food Review</Nav.Link>
                        </Nav>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col pt-2">
                    <p className="text-muted">
                        Copyright &copy;2021 Khana food delivery Service. All rights reserved.
                    </p>
                    </div>
                    <div className="col">
                        <Nav className="justify-content-end" activeKey="/home">
                            <Nav.Item>
                            <Nav.Link href="/home">Privacy & Policy</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="link-1">Terms of Use</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="link-2">Pricing</Nav.Link>
                            </Nav.Item>
                        </Nav>                                          
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Footer;