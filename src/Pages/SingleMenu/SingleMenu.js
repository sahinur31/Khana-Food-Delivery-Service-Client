import React from 'react';
import { Link } from 'react-router-dom';
import './SingleMenu.css';

const SingleMenu = ({ menu }) => {
    const {_id,name,price,description,img} = menu;
    return (
        <div className="col-lg-4">
            <div className="card mb-3 single-service p-3">
                <img src={img} alt="" />
                <div className="d-flex justify-content-between my-3">
                    <div>
                        <h3 className="my-3">{name}</h3>
                    </div>
                    <div>
                        {/* <button className="btn mt-4 text-center text-white theme-bg">{}}</button> */}
                    </div>
                </div>
                <h6>Price: {price}</h6>
                <p className="text-justify">{description}</p>
                <div className="text-center">
                    <Link to={`/placeorder/${_id}`}>
                        <button className="btn text-center text-white theme-bg">Order Now</button>
                    </Link> 
                </div>
            </div>
        </div>
    );
};

export default SingleMenu;