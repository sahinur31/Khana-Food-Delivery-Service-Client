import { faMugHot, faTruck, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Works.css';

const Works = () => {
    return (
        <div className="works-area py-5 text-center">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>HOW IT WORKS</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="works-single p-4">
                            <div className="fa-4x theme-color mb-2">
                                <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon>
                            </div>
                            <h2 className="text-capitalize">Choose Your Favorite</h2>
                            <p>Choose your favorite meals and restaurants and order online or by phone. It's easy to customize your order.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="works-single p-4">
                            <div className="fa-4x theme-color mb-2">
                                <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
                            </div>
                            <h2>We Deliver Your Meals</h2>
                            <p>Our delivery man goes this restaurants, take this food and delivered meals arrive at your door.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="works-single p-4">
                            <div className="fa-4x theme-color mb-2">
                                <FontAwesomeIcon icon={faMugHot}></FontAwesomeIcon>
                            </div>
                            <h2>Eat And Enjoy</h2>
                            <p>No shopping, no cooking, no counting and no cleaning. Enjoy your healthy meals with your family.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;