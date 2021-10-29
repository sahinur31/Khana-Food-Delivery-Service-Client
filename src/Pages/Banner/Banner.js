import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="banner-area">
                <div className="container">
                    <div className="row justify-content-center col">
                        <div className="banner-content">
                            <div className="searchBox text-center mt-4">
                                <h1 className="text-white">Search Best Foods For You?</h1>
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