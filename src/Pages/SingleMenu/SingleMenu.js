import React from 'react';
import { Link } from 'react-router-dom';
import './SingleMenu.css';
import Zoom from "react-reveal/Zoom";

const SingleMenu = ({ menu }) => {
    const {_id,name,price,description,img,restaurantName} = menu;
    return (
        <Zoom>
            <div className="col-lg-4 text-center">
            <div className="card mb-3 single-service p-3">
                <img src={img} alt="" />
                <h3 className="my-3">{name}</h3>
                <h6 className="my-3">Restaurant: {restaurantName}</h6>
                <h6>Price: {price}</h6>
                <p className="text-justify">{description}</p>
                <div className="text-center">
                    <Link to={`/placeorder/${_id}`}>
                        <button className="btn text-center text-white theme-bg">Order Now</button>
                    </Link> 
                </div>
            </div>
        </div>
        </Zoom>
    );
};

export default SingleMenu;