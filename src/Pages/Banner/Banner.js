import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="banner-area d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row col">
                        <div className="banner-content text-center text-white">
                            <h1>"KHANA"</h1>
                            <h1>Food Delivery & Services</h1>
                            <div className="searchBox mt-4">
                                <h3 className="text-white">Search Best Foods For You?</h3>
                                <div className="input-group mt-4 mb-3 mx-auto">
                                    <input  type="text" className="form-control me-3 bg-white" placeholder="Type Place, City" />
                                    <input  type="text" className="form-control me-3 bg-white" placeholder="Restaurants" />
                                    <button className="btn text-white px-4 theme-bg ">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Banner;